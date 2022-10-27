import { CLEAR_TOTAL, FIX_DATA, TOTAL_MONEY } from "../constant/constantTicket";
import _ from "lodash";
const initialState = { data: "", total: [] };

export let dataBookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FIX_DATA:
      //chia so luong ghe thanh hang 16
      let newData=_.chunk(payload,16)
      return { ...state, data: newData };
    case TOTAL_MONEY:
      let cloneTotal = [...state.total];
      let index = cloneTotal.findIndex((item) => {
        return item.maGhe == payload.maGhe;
      });
      if (index == -1) {
        cloneTotal.push(payload);
      } else {
        cloneTotal.splice(index, 1);
      }

      return { ...state, total: cloneTotal };
    case CLEAR_TOTAL:
      return { ...state, total: [] };
    default:
      return state;
  }
};
