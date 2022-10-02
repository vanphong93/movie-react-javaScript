import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import { TOKEN } from "../../services/configURL";
import { movieSer } from "../../Services/movieService";
// import TabsMovies from "../HomaPage/TabsMovies";
// import ItemTabMovie from "../HomaPage/ItemTabMovie";
import { TabsDetail } from "./TabsDetail";
import {useDispatch} from 'react-redux'
import { setLoadingOff, setLoadingOn } from "../../redux/actions/actionsSpiner";
export default function Detail() {
  let dispatch=useDispatch()
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    dispatch(setLoadingOn())
    movieSer
      .getInfoMovieTheater(id)
      .then((res) => {
        console.log("detail film", res.data.content);
        setDetail(res.data.content);
        dispatch(setLoadingOff())
      })
      .catch((err) => {
        console.log("err", err);
        dispatch(setLoadingOn())
      });
  }, []);

  return (
    <div className="">
      {/* <img style={{ height: 200 }} src={detail.hinhAnh} alt="image" /> */}
    <TabsDetail data={detail}/>
    </div>
  );
}
