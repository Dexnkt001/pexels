import React, { useEffect, Suspense } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Category from "./pages/Category";
import { AsyncPicturesCreator } from "./redux/actions/gallery_actions";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AsyncPicturesCreator());
  }, []);

  return (
    <Suspense fallback={"Loading ..."}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about/:category" element={<Category />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
