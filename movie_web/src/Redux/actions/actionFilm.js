import { SET_FILM } from "../constant/constantFilm";

export const setFilm = (successValue) => {
  return {
    type: SET_FILM,
    payload: successValue,
  };
};
