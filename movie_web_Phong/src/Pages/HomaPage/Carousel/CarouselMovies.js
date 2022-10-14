import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div style={{ ...style, display: "none" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div style={{ ...style, display: "none" }} onClick={onClick} />;
}
export default function SimpleSlider({ data }) {
  const settings = {
    dots: true,
    slidesToShow: 5,
    speed: 500,
    rows: 2,

    slidesToScroll: 5,

    infinite: data().length > 10,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => {
      return (
        <div className="m-5">
          <ul className="baner-dots" style={{ padding: "0" }}>
            {" "}
            {dots}{" "}
          </ul>
        </div>
      );
    },
  };
  return <Slider {...settings}>{data()}</Slider>;
}
