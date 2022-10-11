import { localServ } from "../../Services/localService";
import { SET_USER } from "../constant/constantUser";

let initialState = {
  user: localServ.user.get(),
  admin: 1,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      state.user = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
