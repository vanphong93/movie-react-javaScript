import React, { useState, useEffect } from "react";
// import { movieSer } from "../../../services/movieService";
import Slider from "react-slick";
import "./Baner.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Baner({ showModal,banerMovie }) {
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
      type: "open_modal",
      payload: item,
    });
    showModal();
  };
  let handleTicket = () => {
    alert(23);
  };
  let renderBaner = () => {
    return banerMovie.map((item, index) => {
      return (
        <div className="group relative z-10" key={index}>
          <svg
            onClick={() => {
              openModalBaner(item);
            }}
            className="w-16 absolute opacity-0 bottom-1 z-10 text-yellow-50 group-hover:opacity-70 group-hover:animate-spin duration-1000 hover:cursor-pointer"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          <NavLink to={`/detail/${item.maPhim}`}>
            {" "}
            <svg
              className="absolute z-10 w-16 opacity-0 group-hover:opacity-70 duration-1000 bottom-16 text-yellow-50 hover:cursor-pointer"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
            </svg>
          </NavLink>

          <img
            className="active:cursor-grabbing"
            style={{ height: "80vh", width: "100vw" }}
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
