

const initialState = {data:""}

export let tabsMovieReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case "get_data_theater":
    return { ...state, data:payload }

  default:
    return state
  }
}
