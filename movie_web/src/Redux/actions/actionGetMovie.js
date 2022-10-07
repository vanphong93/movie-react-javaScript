// import { useDispatch } from "react-redux";
import { movieSer } from "../../Services/movieService";
import { setLoadingOff, setLoadingOn } from "./actionsSpiner";
export const getMovieTheater = (setData) => {
  return (any) => {
    movieSer
      .getMovieByTheater()
      .then((res) => {
        
        any({
          type: "get_theater",
          payload: res.data.content,
        });
        setData(res.data.content);
      })
      .catch((err) => {
        
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
        
        dispatch(setLoadingOff());
        anyFunction({
          type: "get_movie",
          payload: res.data.content,
        });
        setMovies(res.data.content);
      })
      .catch((err) => {
        dispatch(setLoadingOn());
        
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
              type: "get_baner",
              payload: data_new,
            });

            setBanerMovie(data_new);
          });
        });
      })
      .catch((err) => {
        
      });
  };
};
