import {
  SET_LIST_USER,
  SET_TT_LIST_USER_EDIT,
  SET_USER,
} from "../constant/constantUser";

export const setUserLogin = (successValue) => {
  return {
    type: SET_USER,
    payload: successValue,
  };
};
export const setListUser = (successValue) => {
  return {
    type: SET_LIST_USER,
    payload: successValue,
  };
};
export const setThongTinListUserEdit = (Value) => {
  return {
    type: SET_TT_LIST_USER_EDIT,
    payload: Value,
  };
};
