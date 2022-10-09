import { AutoComplete } from "antd";
import React, { useState } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchMovies = () => {
  let navigate = useNavigate();
  let allFilm = [];
  let { dataTheater, dataMovie, dataBaner } = useSelector((state) => {
    return state.movieReducer;
  });

  (dataMovie ? dataMovie : []).forEach((item) => {
    allFilm.push({ value: item.tenPhim, maPhim: item.maPhim });
  });
  (dataTheater ? dataTheater : []).map((item) => {
    return item.lstCumRap.map((item) => {
      return item.danhSachPhim.forEach((item) => {
        allFilm.push({ value: item.tenPhim, maPhim: item.maPhim });
      });
    });
  });
  (dataBaner ? dataBaner : []).forEach((item) => {
    allFilm.push({ value: item.tenPhim, maPhim: item.maPhim });
  });
  let onSelect = (value, options) => {
    navigate(`/detail/${options.maPhim}`);
  };
  let fixDataFilm = _.unionBy(allFilm, "value");
  // let dataErr = [
  //   {
  //     value: "Bạn cần quay về trang chủ để cập nhật",
  //     maPhim: 1,
  //   },
  // ];
  return (
    <>
      <AutoComplete
        // popupClassName="HomePage"
        className="w-40 md:w-64"
        allowClear={true}
        onSelect={onSelect}
        options={fixDataFilm}
        placeholder={
          fixDataFilm.length
            ? "Nhập tên phim"
            : "Xin quay về trang chủ cập nhật"
        }
        filterOption={(inputValue, option) =>
          option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        }
      ></AutoComplete>
    </>
  );
};

export default SearchMovies;
