import { useDispatch } from "react-redux";
import { movieSer } from "../../services/movieService";
import { setLoadingOff, setLoadingOn } from "./actionsSpiner";

export const getMovie=(setMovies,dispatch) => { 
// let dispatch=useDispatch()
    dispatch(setLoadingOn());
    return (anyFunction) => { 
        movieSer
    .getListMovie()
    .then((res) => {
      console.log("lay data thanh cong", res.data.content);
      dispatch(setLoadingOff());
    anyFunction({
        type:"get_movie",
        payload:res.data.content,
      })
      setMovies(res.data.content);
    })
    .catch((err) => {
      dispatch(setLoadingOn());
      console.log("err", err);
    });
   }
     }
 export const getBaner=(setBanerMovie) => { 
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
                type:"get_baner",
                payload:data_new,
              })
              setBanerMovie(data_new);
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
      }
  }