import React, { useState, useEffect } from "react";
// import { movieSer } from "../../../services/movieService";
import Slider from "react-slick";
import "./Baner.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { BanerMediaIcon, TicketIcon } from "../../../Utilities/Icon";
import { OPEN_MODAL } from "../../../redux/constant/constantModal";
export default function Baner({ showModal, banerMovie }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  let dispatch = useDispatch();
  const settings = {
    fade: true,
    dots: true,
    // infinite: true,
    autoplay: true,
    // speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => {
      return (
        <div>
          <ul className="baner-dots" style={{ margin: "0px" }}>
            {" "}
            {dots}{" "}
          </ul>
        </div>
      );
    },
  };
  // const [banerMovie, setBanerMovie] = useState([]);
  // useEffect(() => {
  //   movieSer
  //     .getBanerMovie()
  //     .then((res) => {
  //       let data_new = res.data.content;
  //       let listMaphim = res.data.content.map((item) => {
  //         return item.maPhim;
  //       });
  //       listMaphim.forEach((id, i) => {
  //         return movieSer.getInfoMovie(id).then((res) => {
  //           let { trailer, moTa, danhGia, tenPhim } = res.data.content;
  //           // data_new[i] = { ...data_new[i], trailer, moTa, danhGia, tenPhim };
  //           data_new[i] = {
  //             ...data_new[i],
  //             trailer: "https://www.youtube.com/embed/YOJsKatW-Ts",
  //             moTa,
  //             danhGia,
  //             tenPhim,
  //             baner: true,
  //           };

  //           setBanerMovie(data_new);

  //           // console.log("data_new: ", data_new);
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  let openModalBaner = (item) => {
    dispatch({
      type: OPEN_MODAL,
      payload: item,
    });
    showModal();
  };
  // let handleTicket = () => {
  //   alert(23);
  // };
  let renderBaner = () => {
    return banerMovie.map((item, index) => {
      return (
        <div className="group relative z-10" key={index}>
          <BanerMediaIcon
            openModalBaner={() => {
              openModalBaner(item);
            }}
          />
          <NavLink to={`/detail/${item.maPhim}`}>
            {" "}
            <TicketIcon />
          </NavLink>

          <img
            className="active:cursor-grabbing"
            style={{ height: "75vh", width: "100vw" }}
            src={item.hinhAnh}
            alt={`baner-${index}`}
          />
        </div>
      );
    });
  };
  return (
    <div className="">
      {/* <h2>Append Dots</h2> */}
      <Slider {...settings}>{renderBaner()}</Slider>
    </div>
  );
}
