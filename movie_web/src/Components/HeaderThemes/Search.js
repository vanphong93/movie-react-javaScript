import { AutoComplete } from "antd";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SearchMovies = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // let {}=useSelector()
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
  let fixDataFilm = _.unionBy(allFilm, "value");
  console.log('fixDataFilm: ', fixDataFilm);
  useEffect(() => {
    dispatch({
      type: "get_data_search",
      payload: fixDataFilm,
    });
  }, [dataTheater]);
  let onSelect = (value, options) => {
    navigate(`/detail/${options.maPhim}`);
  };

  return (
    <>
      <AutoComplete
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
