import React from "react";
import addClass from "classnames";
import {useTypedSelector} from "../useTypedSelector";

const Loading: React.FC = () => {
    const state = useTypedSelector((state) => state);
  return (
    <div className={addClass("loading_cont",{
        active: state.gallery.loading || state.category.loading,
    })}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;
