import React from "react";
import Slider from "react-slick";
import "./Baner.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { BanerMediaIcon, TicketIcon } from "../../../Utilities/Icon";
import { OPEN_MODAL } from "../../../Redux/constant/constantModal";
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
    autoplay: true,
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

  let openModalBaner = (item) => {
    dispatch({
      type: OPEN_MODAL,
      payload: item,
    });
    showModal();
  };
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
      <Slider {...settings}>{renderBaner()}</Slider>
    </div>
  );
}
