import { combineReducers } from "redux";
import { userReducer } from "./reducerUser";
import { filmReducer } from "./reducerFilm";
export let rootReducer = combineReducers({
  userReducer,
  filmReducer,
});
