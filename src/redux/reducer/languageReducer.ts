import {
  IInitLanguage,
  ISwitchLanguageAction,
  SWITCH_LANGUAGE,
} from "../../types/languageTypes";

const initStateCategoriesAndLan: IInitLanguage = {
  active: false,
};

export const languageReducer = (
  state = initStateCategoriesAndLan,
  action: ISwitchLanguageAction
) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        active: !state.active,
      };
    default:
      return state;
  }
};
