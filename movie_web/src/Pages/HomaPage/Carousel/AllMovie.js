import { Tabs } from 'antd';
import React from 'react';
// import {CarouselMovies} from './CarouselMovies'
// const onChange = (key) => {

// };

export const AllMovie = ({dataMovieCurrent,dataMovieNext}) => (
  <Tabs centered 
  addIcon
  type='card'
    defaultActiveKey="1"
    // onChange={onChange}
    items={[
      {
        label: `Phim đang chiếu`,
        key: '1',
        children: dataMovieCurrent,
      },
      {
        label: `Phim sắp chiếu`,
        key: '2',
        children: dataMovieNext,
      },
    ]}
  />
);

