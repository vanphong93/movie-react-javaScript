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
  const settings = {
    // swipeToSlide:true,
     // fade: true,
    className: "",
    dots:true,
    infinite: true,
    slidesToShow:5,
    speed: 500,
    rows: 2,
    initialSlide: 1,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings} >
      {data()}

    </Slider>
  );
}

