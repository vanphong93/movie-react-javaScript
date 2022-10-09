import { GET_BANER, GET_MOVIE, GET_THEATER } from "../constant/constantMovie";

const initialState = {
    dataMovie: "",
    dataBaner: "",
    dataTheater: "",
    dataSearch: "",
};

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MOVIE:
            return { ...state, dataMovie: payload };
        case GET_BANER:
            return { ...state, dataBaner: payload };
        case GET_THEATER:
            return { ...state, dataTheater: payload };
        // case "data_search":
        //     return { ...state, dataSearch: payload };
        default:
            return state;
    }
};
