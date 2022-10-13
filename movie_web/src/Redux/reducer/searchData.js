const initialState = {
  dataSearch: "",
};

export let searchData = (state = initialState, { type, payload }) => {
  
  switch (type) {
    case "get_data_search":
      console.log('payload: ', payload);
      return { ...state, dataSearch: payload };

    default:
      return state;
  }
};




// let { dataTheater, dataMovie, dataBaner } = useSelector((state) => {
//   return state.movieReducer;
// });