import { ArrowHidden } from "../../../Utilities/ArrowCarousel";
import React, { Component } from "react";
import Slider from "react-slick";
export default class SimpleSlider extends Component {
  componentDidUpdate() {
    this.slider.slickGoTo(0);
  }
  render() {
    let { data } = this.props;
    const settings = {
      dots: true,
      slidesToShow: 5,
      speed: 500,
      rows: 2,
      slidesToScroll: 2,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      nextArrow: <ArrowHidden />,
      prevArrow: <ArrowHidden />,
      appendDots: (dots) => {
        return (
          <div className="m-5">
            <ul className="baner-dots dark" style={{ padding: "0" }}>
              {" "}
              {dots}{" "}
            </ul>
          </div>
        );
      },
    };
    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {data()}
        </Slider>
        ;
      </div>
    );
  }
}
