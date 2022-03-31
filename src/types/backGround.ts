export interface initBackground{
    background:string;
    namePhotographerBack:string;
    linkPhotographerBack:string;
}

export  const NEW_BACKGROUND:string = 'NEW_BACKGROUND'

export interface NewBackgroundAction{
    type:typeof NEW_BACKGROUND;
    payload:{
        background:string;
        namePhotographerBack:string;
        linkPhotographerBack:string;
    }
}