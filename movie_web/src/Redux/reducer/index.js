import { combineReducers } from "redux";
import { userReducer } from "./reducerUser";
import { spinerReducer } from "./reducerSpiner";
import {movieReducer} from './movieReducer'
import {modalReducer} from './modalReducer'
import {dataBookReducer} from './dataBookReducer'

export let rootReducer = combineReducers({
  userReducer,spinerReducer,modalReducer,movieReducer,dataBookReducer,
});
