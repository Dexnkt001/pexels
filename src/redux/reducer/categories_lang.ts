import {CarAndLang, RandArrayCategories, RandArrayCategoriesAction} from "../../types/categories_lang";


const InitStateCategoriesAndLan : CarAndLang = {
    categories:[],
    lang:{
        ru:[],
        eng:[]
    }
}

export const CategoriesLandReducer = (state=InitStateCategoriesAndLan, action:RandArrayCategoriesAction) => {
switch (action.type) {
    case RandArrayCategories: return { lang:state.lang, categories:state.categories.sort(() => Math.random() - 0.5)}
    default: return state
}
}