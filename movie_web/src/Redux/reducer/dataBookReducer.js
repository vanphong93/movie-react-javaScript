const initialState = { data: "", total: [] };

export let dataBookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "fix_data":
      console.log("payload: ", payload);
      let newData = [];
      for (let i = 0; i < payload.length; i += 16) {
        const element = payload.slice(i, i + 16);
        newData.push(element);
      }
      return { ...state, data: newData };
    case "total_money":
      let cloneTotal = [...state.total];
      let index = cloneTotal.findIndex((item) => {
        return item.maGhe == payload.maGhe;
      });
      if (index == -1) {
        cloneTotal.push(payload);
      } else {
        cloneTotal.splice(index,1);
      }
      
      console.log('cloneTotal: ', cloneTotal);
      return { ...state, total: cloneTotal };
    case "clear_total":
      return {...state,total:[]}
    default:
      return state;
  }
};
