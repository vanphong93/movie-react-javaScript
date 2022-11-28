import React from "react";
import Slider from "react-slick";
import "./Baner.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { BanerMediaIcon, TicketIcon } from "../../../Utilities/Icon";
import { OPEN_MODAL } from "../../../Redux/constant/constantModal";
import { ArrowHidden } from "../../../Utilities/ArrowCarousel";
export default function Baner({ showModal, banerMovie }) {
  const dispatch = useDispatch();
  const settings = {
    fade: true,
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowHidden/>,
    prevArrow: <ArrowHidden />,
    appendDots: (dots) => (
      <div>
        <ul className="baner-dots" style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  const openModalBaner = (item) => {
    dispatch({
      type: OPEN_MODAL,
      payload: item,
    });
    showModal();
  };
  const renderBaner = () =>
    banerMovie.map((item, index) => (
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
          className="banerImage active:cursor-grabbing"
          src={item.hinhAnh}
          alt={`baner-${index}`}
        />
      </div>
    ));

  return (
    <div className="">
      <Slider {...settings}>{renderBaner()}</Slider>
    </div>
  );
}
