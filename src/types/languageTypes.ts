export interface IInitLanguage {
  active: boolean;
}

export const SWITCH_LANGUAGE: string = "SWITCH_LANGUAGE";

export interface ISwitchLanguageAction {
  type: typeof SWITCH_LANGUAGE;
}
