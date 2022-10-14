import { combineReducers } from "redux";

import { userReducer } from "./reducerUser";
import { spinerReducer } from "./reducerSpiner";
import { movieReducer } from "./movieReducer";
import { modalReducer } from "./modalReducer";
import { dataBookReducer } from "./dataBookReducer";
import { searchData } from "./searchData";
import { filmReducer } from "./reducerFilm";
export let rootReducer = combineReducers({
  userReducer,
  spinerReducer,
  filmReducer,
  modalReducer,
  movieReducer,
  dataBookReducer,
  searchData,
});
