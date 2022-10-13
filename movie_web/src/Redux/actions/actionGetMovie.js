import { movieSer } from "../../Services/movieService";
import { dataBaner } from "../../Utilities/FixDetailBaner";
import { GET_BANER, GET_MOVIE, GET_THEATER } from "../constant/constantMovie";
import { setLoadingOff, setLoadingOn } from "./actionsSpiner";
export const getMovieTheater = (setData) => {
  return (any) => {
    movieSer
      .getMovieByTheater()
      .then((res) => {
        any({
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
  return (anyFunction) => {
    movieSer
      .getListMovie()
      .then((res) => {
        dispatch(setLoadingOff());
        anyFunction({
          type: GET_MOVIE,
          payload: res.data.content,
        });
        setMovies(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
        dispatch(setLoadingOn());
        setTimeout(() => {
          dispatch(setLoadingOff());
          alert("Kiểm tra kết nối mạng");
          // window.location.href("/err");
        }, 3000);
      });
  };
};
export const getBaner = (setBanerMovie) => {
  return (anyFunction) => {
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
            anyFunction({
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
