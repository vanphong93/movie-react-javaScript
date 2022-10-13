import { localServ } from "../../Services/localService";
import { SET_LIST_USER, SET_USER } from "../constant/constantUser";

let initialState = {
  user: localServ.user.get(),
  arrUsers: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      state.user = action.payload;
      return { ...state };
    case SET_LIST_USER:
      state.arrUsers = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
