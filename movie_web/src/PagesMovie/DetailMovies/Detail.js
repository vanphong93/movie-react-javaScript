import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieSer } from "../../Services/movieService";
import styled from "./Detail.module.css";
import { TabsDetail } from "./TabsDetail";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../../Redux/actions/actionsSpiner";
import { message } from "antd";
export default function Detail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  let dispatch = useDispatch();
  const { id } = useParams();

  const [detail, setDetail] = useState([]);
  useEffect(() => {
    if (id == 1) {
      return;
    }
    dispatch(setLoadingOn());
    movieSer
      .getInfoMovieTheater(id)
      .then((res) => {
        setDetail(res.data.content);
        dispatch(setLoadingOff());
      })
      .catch((err) => {
        console.log("err: ", err);
        dispatch(setLoadingOff());
        message.error("Lỗi kết nối, xin bạn quay lại sau");
      });
  }, [id]);

  return (
    <div
      className={styled.main}
      style={{
        backgroundImage: `url(${detail.hinhAnh})`,
        backgroundSize: "cover",
      }}
    >
      <TabsDetail data={detail} />
    </div>
  );
}
