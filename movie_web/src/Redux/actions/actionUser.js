import { SET_USER } from "../constant/constantUser";

export const setUserLogin = (successValue) => {
  return {
    type: SET_USER,
    payload: successValue,
  };
};
