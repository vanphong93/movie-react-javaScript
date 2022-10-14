import { SET_FILM, SET_TT_FILM_EDIT } from "../constant/constantFilm";

let initialState = {
  arrFilm: [],
  TTFimlEdit: [],
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM:
      state.arrFilm = action.payload;
      return { ...state };
    case SET_TT_FILM_EDIT:
      state.TTFimlEdit = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
