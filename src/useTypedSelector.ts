import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "./redux/reducer";


export const useTypedSelector:TypedUseSelectorHook<rootState> = useSelector