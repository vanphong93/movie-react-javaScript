import React from "react";
import Slider from "react-slick";
// import Movie from "./Movie";

import styleChange from './CarouselMovies.module.css';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleChange["slick-prev"]}`}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} ${styleChange['slick-next']}`}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
export default function SimpleSlider({data}) {
  var settings = {
    // swipeToSlide:true,
     // fade: true,
    className: "",
    dots:true,
    infinite: false,
    slidesToShow: 5,
    speed: 500,
    rows: 2,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings} >
      {data()}

    </Slider>
  );
}

