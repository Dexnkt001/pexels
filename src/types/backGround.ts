export interface IInitBackground {
  background: string;
  namePhotographerBack: string;
  linkPhotographerBack: string;
}

export const NEW_BACKGROUND: string = "NEW_BACKGROUND";

export interface INewBackgroundAction {
  type: typeof NEW_BACKGROUND;
  payload: {
    background: string;
    namePhotographerBack: string;
    linkPhotographerBack: string;
  };
}
