import { AutoComplete } from "antd";
import React, { useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
const SearchMovies = () => {
  let navigate = useNavigate();
  // const [filmSearch, setFilmSearch] = useState();
  let allFilm = [];
  let { dataTheater, dataMovie } = useSelector((state) => {
    return state.movieReducer;
  });
  (dataMovie ? dataMovie : []).forEach((item) => {
    let data = {
      value: item.tenPhim,
      maPhim: item.maPhim,
    };
    allFilm.push(data);
  });
  (dataTheater ? dataTheater : []).map((item) => {
    // let tenRap = item.tenHeThongRap;
    return item.lstCumRap.map((item) => {
      return item.danhSachPhim.forEach((item, i) => {
        let data = {
          value: item.tenPhim,
          maPhim: item.maPhim,
        };
        allFilm.push(data);
      });
    });
  });

  // let check = (a, b) => {};
  let onSelect = (value, options) => {
    // setFilmSearch(options);
    let url = options.maPhim;
    navigate(`/detail/${url}`);
  };
  let fixDataFilm = _.unionBy(allFilm, "value");

  // let getData = () => {
  //   let url = filmSearch.maPhim;
  //   navigate(`/detail/${url}`);
  // };

  return (
    <>
      <AutoComplete
        className="w-40 md:w-64"
        // allowClear={true}
        // style={{
        //   width: 280,
        // }}
        onSelect={onSelect}
        options={fixDataFilm}
        placeholder="Nhập tên phim"
        filterOption={(inputValue, option) =>
          option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        }
      ></AutoComplete>
      {/* <SearchOutlined style={{fontSize:30}} onClick={getData} />{" "} */}
      {/* <button onClick={getData} className="p-3 bg-red-500">
        cliks
      </button> */}
    </>
  );
};

export default SearchMovies;
