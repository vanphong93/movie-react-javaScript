import { movieSer } from "../../Services/movieService";
import { CLEAR_TOTAL, FIX_DATA, TOTAL_MONEY } from "../constant/constantTicket";
import { setLoadingOff, setLoadingOn } from "./actionsSpiner";

export const getDataTicket = (id, setData, dispatch) => {
    dispatch(setLoadingOn());
    dispatch({
        type: CLEAR_TOTAL,
    });
    return (any) => {
        movieSer
            .getInfoTicket(id)
            .then((res) => {
                console.log("ticket info", res.data.content);
                any({
                    type: FIX_DATA,
                    payload: res.data.content.danhSachGhe,
                });
                setData(res.data.content);
                dispatch(setLoadingOff());
            })
            .catch((err) => {
                dispatch(setLoadingOn());
                console.log("err: ", err);
            });
    };
};
export const addOrRemoveChair = (props, i, selectChair, setSelectChair) => {
    let cloneData = [...selectChair];
    if (props.isSelect) {
        cloneData[i] = { ...props, isSelect: false };
    } else {
        cloneData[i] = { ...props, isSelect: true };
    }
    setSelectChair(cloneData);
    return (any) => {
        any({
            type: TOTAL_MONEY,
            payload: props,
        });
    };
};
