import { OPEN_MODAL } from "../constant/constantModal";

let initalState = {
  data: "",
  isOpen: "",
};
export const modalReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL:
      return { ...state, data: payload };
    default:
      return { ...state };
  }
};
