import React, { useEffect, useState } from "react";
import { useParams,useResolvedPath } from "react-router-dom";

import { movieSer } from "../../Services/movieService";

import { TabsDetail } from "./TabsDetail";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../../redux/actions/actionsSpiner";
export default function Detail() {
// let history=useResolvedPath()
// 

  let dispatch = useDispatch();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {


    dispatch(setLoadingOn());
    movieSer
      .getInfoMovieTheater(id)
      .then((res) => {
        
        setDetail(res.data.content);
        dispatch(setLoadingOff());
      })
      .catch((err) => {
        
        dispatch(setLoadingOn());
      });
  }, [id]);

  return (
    <div className="">
      <TabsDetail data={detail} />
    </div>
  );
}
