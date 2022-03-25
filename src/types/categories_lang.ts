export interface CarAndLang{
    categories:any[];
    lang:{
        ru:any[],
        eng:any[]
    }
}

export const RandArrayCategories:string = 'RandArrayCategories'

export interface RandArrayCategoriesAction{
    type:typeof RandArrayCategories
}