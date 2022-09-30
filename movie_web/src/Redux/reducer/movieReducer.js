const initialState = {dataMovie:"",dataBaner:""}

export const movieReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case "get_movie":

    return { ...state, dataMovie:payload }
  case "get_baner":

    return { ...state, dataBaner:payload }

  default:
    return state
  }
}
