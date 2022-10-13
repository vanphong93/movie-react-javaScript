import { AutoComplete } from "antd";
import React, { useEffect } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchMovies = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let allFilm = [];
  let { dataTheater, dataMovie, dataBaner } = useSelector((state) => {
    return state.movieReducer;
  });
  if (dataMovie && dataTheater && dataBaner) {
    dataMovie.forEach((item) => {
      allFilm.push({ value: item.tenPhim, maPhim: item.maPhim });
    });
    dataTheater.map((item) => {
      return item.lstCumRap.map((item) => {
        return item.danhSachPhim.forEach((item) => {
          allFilm.push({ value: item.tenPhim, maPhim: item.maPhim });
        });
      });
    });
    dataBaner.forEach((item) => {
      allFilm.push({ value: item.tenPhim, maPhim: item.maPhim });
    });
  }

  let onSelect = (value, options) => {
    navigate(`/detail/${options.maPhim}`);
  };
  let fixDataFilm = _.unionBy(allFilm, "value");
  useEffect(() => {
    dispatch({
      type: "get_data_search",
      payload: fixDataFilm,
    });
  }, [dataBaner]);
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
