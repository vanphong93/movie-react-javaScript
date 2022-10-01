const initialState = {dataMovie:"",dataBaner:"",dataTheater:""}

export const movieReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case "get_movie":

    return { ...state, dataMovie:payload }
  case "get_baner":

    return { ...state, dataBaner:payload }
  case "get_theater":

    return { ...state, dataTheater:payload }

  default:
    return state
  }
}
