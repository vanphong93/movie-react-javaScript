import { movieSer } from "../../Services/movieService";
import { OPEN_MODAL } from "../constant/constantModal";

export const dataToModal = (showModal, maPhim) => {
    return (any) => {
        movieSer
            .getInfoMovie(maPhim)
            .then((res) => {
                console.log(res.data.content);
                let newData = { ...res.data.content, isSearch: true };
                any({
                    type: OPEN_MODAL,
                    payload: newData,
                });
                showModal();
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
