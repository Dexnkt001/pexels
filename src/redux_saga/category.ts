import { put, takeEvery, call } from "redux-saga/effects";
import { IPictures, PicturesCategoryActionTypes } from "../types/categoryTypes";
import { select } from "typed-redux-saga";
import {
  ErrorCreator,
  FetchMorePicturesCategorySuccessAction,
} from "../redux/actions/categoryActions";

const api_key: string = process.env.REACT_APP_API_KEY as string;

const getMoreCategoryPicturesAction = (
  key: string,
  count: number,
  category: string,
  size: string,
  orientation: string
) => {
  const page: number = Math.ceil(count / 20);
  let req_url: string;
  if (size !== "" && orientation !== "") {
    req_url = `https://api.pexels.com/v1/search?query=${category}&page=${page}&orientation=${orientation}&size=${size}&per_page=20`;
  } else if (size !== "") {
    req_url = `https://api.pexels.com/v1/search?query=${category}&page=${page}&size=${size}&per_page=20`;
  } else if (orientation !== "") {
    req_url = `https://api.pexels.com/v1/search?query=${category}&page=${page}&orientation=${orientation}&&per_page=20`;
  } else {
    req_url = `https://api.pexels.com/v1/search?query=${category}&page=${page}&per_page=20`;
  }

  const res = fetch(req_url, {
    headers: {
      Authorization: key,
    },
  }).then((resp) => {
    return resp.json();
  });

  return res;
};

interface IPicts {
  page: number;
  per_page: number;
  photos: IPictures[];
  total_results: number;
  next_page: string | undefined;
}

interface ICategoryData {
  count_pict: number;
  category: string;
  size: string;
  orientation: string;
}

function* getMoreCategoryPicturesWorker() {
  try {
    const categoryData: ICategoryData = yield select((state) => state.category);
    const data: IPicts = yield call(
      getMoreCategoryPicturesAction,
      api_key,
      categoryData.count_pict + 20,
      categoryData.category,
      categoryData.size,
      categoryData.orientation
    );
    yield put(
      FetchMorePicturesCategorySuccessAction({
        count_pict: categoryData.count_pict + data.photos.length,
        pictures: data.photos,
        total: data.total_results,
        nextPage: data.next_page,
      })
    );
  } catch (e) {
    yield put(ErrorCreator("Error"));
  }
}

export function* picturesCategoryWatcher() {
  yield takeEvery(
    PicturesCategoryActionTypes.ASYNC_CATEGORY_MORE_PICTURES,
    getMoreCategoryPicturesWorker
  );
}
