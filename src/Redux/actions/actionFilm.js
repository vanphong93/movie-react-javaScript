import { SET_FILM, SET_TT_FILM_EDIT } from "../constant/constantFilm";
export const setFilm = (successValue) => {
  return {
    type: SET_FILM,
    payload: successValue,
  };
};
export const setThongTinFilmEdit = (Value) => {
  return {
    type: SET_TT_FILM_EDIT,
    payload: Value,
  };
};
