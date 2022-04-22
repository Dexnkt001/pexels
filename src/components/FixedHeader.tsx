import React, { useCallback, useEffect, useState } from "react";
import MainNavigation from "./MainNavigation";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FixedHeader = () => {
  const { category } = useParams();

  const [state, setState] = useState<string>("");

  const { t } = useTranslation();

  let navigate = useNavigate();

  const submit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (e.target[0].value.trim() !== "") {
        navigate(`../about/${encodeURIComponent(e.target[0].value)}`);
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (category !== undefined) {
      setState(category);
    }
  }, [category]);

  return (
    <div className="fixed_header">
      <div className="header_nav">
        <div className="fixed_left_header">
          <a href="/">
            <svg width="32px" height="32px" viewBox="0 0 32 32">
              <path
                d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                fill="#05A081"
              ></path>
              <path
                d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                fill="#fff"
              ></path>
            </svg>
            <span className="pexels_tag">Pexels</span>
          </a>
          <form
            className="header-form"
            action=""
            onSubmit={(e) => {
              submit(e);
            }}
          >
            <input
              className="search_inp input_header"
              type="search"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              placeholder={t("header.search")}
            />
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M 15.5 14 h -0.79 l -0.28 -0.27 C 15.41 12.59 16 11.11 16 9.5 C 16 5.91 13.09 3 9.5 3 S 3 5.91 3 9.5 S 5.91 16 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z"></path>
              </svg>
            </button>
          </form>
        </div>
        <MainNavigation />
      </div>
    </div>
  );
};

export default FixedHeader;
