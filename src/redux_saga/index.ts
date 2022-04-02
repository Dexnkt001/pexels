import {all} from 'redux-saga/effects'
import {picturesCategoryWatcher} from "./category";
import {picturesWatcher} from "./gallery";

export function* rootWatcher(){
    yield all([picturesCategoryWatcher(),picturesWatcher()])
}