import { SET_FILM } from "../constant/constantFilm";

let initialState = {
  arrFilm: [],
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM:
      state.arrFilm = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
