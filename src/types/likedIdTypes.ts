export interface initLikedId{
    likedId:number[]
}

export enum likedIdTypes{
    NEW_LIKED_ID = 'NEW_LIKED_ID',
    DELETE_LIKED_ID = 'DELETE_LIKED_ID',
}


 interface NewLikedIdAction{
    type:typeof likedIdTypes.NEW_LIKED_ID;
    payload:number
}

interface DeleteLikedIdAction{
    type:typeof likedIdTypes.DELETE_LIKED_ID;
    payload: number[]
}

export type enumLikedIdTypes  = NewLikedIdAction | DeleteLikedIdAction