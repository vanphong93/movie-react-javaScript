import { movieSer } from "../../Services/movieService";
import { FixUrl } from "../../Utilities/FixUrlEmbed";
import { OPEN_MODAL } from "../constant/constantModal";
export const dataToModal = (showModal, maPhim) => {
  return (dispatch) => {
    movieSer
      .getInfoMovie(maPhim)
      .then((res) => {
        let newData = { ...res.data.content, isSearch: true };
        dispatch({
          type: OPEN_MODAL,
          payload: FixUrl(newData),
        });
        showModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
