import React from "react";
import { useTypedSelector } from "../useTypedSelector";
import { useDispatch } from "react-redux";
import addClass from "classnames";
import { useTranslation } from "react-i18next";
import { NewOrientationCategoryCreator } from "../redux/actions/category_actions";

const Orientation: React.FC = () => {
  const { t } = useTranslation();

  const title = useTypedSelector((state) => {
    return state.category;
  });

  const dispatch = useDispatch();

  function ClickOrientation(name: string) {
    if (name !== title.orientation && !title.loading) {
      return dispatch(NewOrientationCategoryCreator(name));
    } else return;
  }

  return (
    <ul className="orientation_list">
      <li
        onClick={() => {
          ClickOrientation("");
        }}
        className={addClass({ active_orientation_item: title.orientation === "" })}
      >
        {t("orientation.all_orientation")}
      </li>
      <li
        onClick={() => {
          ClickOrientation("landscape");
        }}
        className={addClass({ active_orientation_item: title.orientation === "landscape" })}
      >
        {" "}
        <i className="rd__svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            viewBox="0 0 24 16"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-914.000000, -184.000000)"
                fill="#9E9E9E"
                fillRule="nonzero"
              >
                <path d="M935,184 C936.656854,184 938,185.343146 938,187 L938,197 C938,198.656854 936.656854,200 935,200 L917,200 C915.343146,200 914,198.656854 914,197 L914,187 C914,185.343146 915.343146,184 917,184 L935,184 Z M935,186 L917,186 C916.487164,186 916.064493,186.38604 916.006728,186.883379 L916,187 L916,197 C916,197.512836 916.38604,197.935507 916.883379,197.993272 L917,198 L935,198 C935.512836,198 935.935507,197.61396 935.993272,197.116621 L936,197 L936,187 C936,186.487164 935.61396,186.064493 935.116621,186.006728 L935,186 Z"></path>
              </g>
            </g>
          </svg>
        </i>
        <span>{t("orientation.horizontal")}</span>
      </li>
      <li
        onClick={() => {
          ClickOrientation("portrait");
        }}
        className={addClass({ active_orientation_item: title.orientation === "portrait" })}
      >
        <i className="rd__svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="24px"
            viewBox="0 0 16 24"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-918.000000, -220.000000)"
                fill="#9E9E9E"
                fillRule="nonzero"
              >
                <path
                  d="M935,224 C936.656854,224 938,225.343146 938,227 L938,237 C938,238.656854 936.656854,240 935,240 L917,240 C915.343146,240 914,238.656854 914,237 L914,227 C914,225.343146 915.343146,224 917,224 L935,224 Z M935,226 L917,226 C916.487164,226 916.064493,226.38604 916.006728,226.883379 L916,227 L916,237 C916,237.512836 916.38604,237.935507 916.883379,237.993272 L917,238 L935,238 C935.512836,238 935.935507,237.61396 935.993272,237.116621 L936,237 L936,227 C936,226.487164 935.61396,226.064493 935.116621,226.006728 L935,226 Z"
                  transform="translate(926.000000, 232.000000) rotate(-270.000000) translate(-926.000000, -232.000000) "
                ></path>
              </g>
            </g>
          </svg>
        </i>
        <span>{t("orientation.vertical")}</span>
      </li>
      <li
        onClick={() => {
          ClickOrientation("square");
        }}
        className={addClass({ active_orientation_item: title.orientation === "square" })}
      >
        <i className="rd__svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-916.000000, -262.000000)"
                fill="#9E9E9E"
                fillRule="nonzero"
              >
                <path d="M933,262 C934.656854,262 936,263.343146 936,265 L936,279 C936,280.656854 934.656854,282 933,282 L919,282 C917.343146,282 916,280.656854 916,279 L916,265 C916,263.343146 917.343146,262 919,262 L933,262 Z M933,264 L919,264 C918.487164,264 918.064493,264.38604 918.006728,264.883379 L918,265 L918,279 C918,279.512836 918.38604,279.935507 918.883379,279.993272 L919,280 L933,280 C933.512836,280 933.935507,279.61396 933.993272,279.116621 L934,279 L934,265 C934,264.487164 933.61396,264.064493 933.116621,264.006728 L933,264 Z"></path>
              </g>
            </g>
          </svg>
        </i>
        <span>{t("orientation.square")}</span>
      </li>
    </ul>
  );
};

export default Orientation;
