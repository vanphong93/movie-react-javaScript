import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
// import { TOKEN } from "../../services/configURL";
import { movieSer } from "../../Services/movieService";
// import TabsMovies from "../HomaPage/TabsMovies";
// import ItemTabMovie from "../HomaPage/ItemTabMovie";
import { TabsDetail } from "./TabsDetail";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    movieSer
      .getInfoMovieTheater(id)
      .then((res) => {
        console.log("detail film", res.data.content);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="">
      {/* <img style={{ height: 200 }} src={detail.hinhAnh} alt="image" /> */}
    <TabsDetail data={detail}/>
    </div>
  );
}
