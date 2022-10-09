import { userServ } from "../../Services/userService";
import { SET_USER } from "../constant/constantUser";
import { localServ } from "../../Services/localService";
const setUserSuccess = (successValue) => {
  return {
    type: SET_USER,
    payload: successValue,
  };
};
export const setLogin = (dataLogin, onSuccess, onFailed) => {
  return (anyFunction) => {
    userServ
      .postLogin(dataLogin)
      .then((res) => {
        localServ.user.set(res.data.content);
        onSuccess();
        // anyFunction(setUserSuccess(res.data.content));
        anyFunction({
          type: SET_USER,
          payload: res.data.content,
        });
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
      .then((res) => {
        onSuccess();

        dispatch(setUserSuccess(res.data.content));
      })
      .catch((err) => {
        onFailed();
        console.log("err", err);
      });
  };
};
