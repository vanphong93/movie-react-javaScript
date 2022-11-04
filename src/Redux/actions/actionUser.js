import {
  SET_LIST_USER,
  SET_TT_LIST_USER_EDIT,
  SET_USER,
} from "../constant/constantUser";
import { userServ } from "../../Services/userService";
import { localServ } from "../../Services/localService";
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

const setUserSuccess = (successValue) => {
  return {
    type: SET_USER,
    payload: successValue,
  };
};
export const setLogin = (dataLogin, onSuccess, onFailed) => {
  return (dispatch) => {
    userServ
      .postLogin(dataLogin)
      .then((res) => {
        localServ.user.set(res.data.content);
        dispatch(setUserSuccess(res.data.content));
        onSuccess();
      })
      .catch((err) => {
        onFailed();
        console.log(err);
      });
  };
};
export const setRegister = (dataRegister, onSuccess, onFailed) => {
  return (dispatch) => {
    userServ
      .postRegister(dataRegister)
      .then(() => {
        dispatch(setLogin(dataRegister, onSuccess, onFailed));
      })
      .catch((err) => {
        onFailed();
        console.log("err", err);
      });
  };
};
