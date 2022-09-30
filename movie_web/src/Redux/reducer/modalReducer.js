let initalState = {
    data: "",
  };
  export const modalReducer = (state = initalState, { type, payload }) => {
    
    switch (type) {
      case "open_modal":
        return { ...state, data: payload };
      // case "open_baner":
      //   console.log('payload: ', payload);
      //   return { ...state, data: payload };
      default:
        return{...state};
    }
  };
  