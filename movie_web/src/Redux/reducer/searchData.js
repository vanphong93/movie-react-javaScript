import { GET_DATA_SEARCH } from "../constant/constantSearch";

const initialState = {
  dataSearch: "",
};
export let searchData = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_SEARCH:
      return { ...state, dataSearch: payload };
    default:
      return state;
  }
};
