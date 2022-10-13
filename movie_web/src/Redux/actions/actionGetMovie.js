import { message } from "antd";
import { movieSer } from "../../Services/movieService";
import { dataBaner } from "../../Utilities/FixDetailBaner";
import { GET_BANER, GET_MOVIE, GET_THEATER } from "../constant/constantMovie";
import { setLoadingOff, setLoadingOn } from "./actionsSpiner";
export const getMovieTheater = (setData) => {
  return (dispatch) => {
    movieSer
      .getMovieByTheater()
      .then((res) => {
        dispatch({
          type: GET_THEATER,
          payload: res.data.content,
        });
        setData(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
};
export const getMovie = (setMovies, dispatch) => {
  dispatch(setLoadingOn());
  return (dispatch) => {
    movieSer
      .getListMovie()
      .then((res) => {
        dispatch(setLoadingOff());
        dispatch({
          type: GET_MOVIE,
          payload: res.data.content,
        });
        setMovies(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
        dispatch(setLoadingOff());
        message.error("Kiểm tra kết nối mạng");
      });
  };
};
export const getBaner = (setBanerMovie) => {
  return (dispatch) => {
    movieSer
      .getBanerMovie()
      .then((res) => {
        let data_new = res.data.content;
        let listMaphim = res.data.content.map((item) => {
          return item.maPhim;
        });
        listMaphim.forEach((id, i) => {
          return movieSer.getInfoMovie(id).then((res) => {
            let { moTa, danhGia, tenPhim, trailer } = res.data.content;
            data_new[i] = {
              ...data_new[i],
              trailer,
              moTa,
              danhGia,
              tenPhim,
              baner: true,
            };
            ///data banner cũ, lỗi nên fix trực tiếp
            dispatch({
              type: GET_BANER,
              payload: dataBaner,
              // payload: data_new,
            });
            setBanerMovie(dataBaner);
            //  setBanerMovie(data_new);
          });
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
};
