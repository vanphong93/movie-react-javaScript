// import { useDispatch } from "react-redux";
import { movieSer } from "../../Services/movieService";
import { GET_BANER, GET_MOVIE, GET_THEATER } from "../constant/constantMovie";
import { setLoadingOff, setLoadingOn } from "./actionsSpiner";
export const getMovieTheater = (setData) => {
  return (any) => {
    movieSer
      .getMovieByTheater()
      .then((res) => {
        // console.log("get data theaer", res.data.content);

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
  // let dispatch=useDispatch()
  
  dispatch(setLoadingOn());
  return (anyFunction) => {
    movieSer
      .getListMovie()
      .then((res) => {
        // console.log('get list movie ', res);

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
          alert("Kiểm tra kết nối mạng")
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
            let { moTa, danhGia, tenPhim } = res.data.content;
            data_new[i] = {
              ...data_new[i],
              trailer: "https://www.youtube.com/embed/YOJsKatW-Ts",
              moTa,
              danhGia,
              tenPhim,
              baner: true,
            };
            anyFunction({
              type: GET_BANER,
              payload: data_new,
            });
            // console.log('data_new: baner ', data_new);
            setBanerMovie(data_new);
          });
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
};
