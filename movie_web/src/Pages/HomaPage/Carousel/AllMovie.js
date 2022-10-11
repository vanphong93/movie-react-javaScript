import { Tabs } from "antd";
import React from "react";
import { DataContainer } from "../../../demo/Ada";
// import {CarouselMovies} from './CarouselMovies'
// const onChange = (key) => {

// };

export const AllMovie = ({ dataMovieCurrent, dataMovieNext }) => (
  <Tabs
    centered

    type="card"
    defaultActiveKey="1"
    items={[
      {
        label: (
          <span className="font-semibold text-base ">Phim đang chiếu</span>
        ),
        key: "1",
        children: dataMovieCurrent,
      },
      {
        label: <span className="font-semibold text-base ">Phim sắp chiếu</span>,
        key: "2",
        children: dataMovieNext,
      },

    ]}
  />
);
