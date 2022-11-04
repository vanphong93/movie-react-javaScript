import { AutoComplete } from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_DATA_SEARCH } from "../../Redux/constant/constantSearch";
const RemoveDulicatePush = (Array, newArray) => {
  Array.forEach((item) => {
    newArray.findIndex((newItem) => newItem.maPhim === item.maPhim) === -1 &&
      newArray.push({ value: item.tenPhim, maPhim: item.maPhim });
  });
};
const SearchMovies = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let allFilm = [];
  let { dataTheater, dataMovie, dataBaner } = useSelector(
    (state) => state.movieReducer
  );
  if (dataMovie && dataTheater && dataBaner) {
    RemoveDulicatePush(dataMovie, allFilm);
    dataTheater.map((item) => {
      return item.lstCumRap.map((item) => {
        return RemoveDulicatePush(item.danhSachPhim, allFilm);
      });
    });
    RemoveDulicatePush(dataBaner, allFilm);
  }
  useEffect(() => {
    dispatch({
      type: GET_DATA_SEARCH,
      payload: allFilm,
    });
  }, [dataBaner]);
  let onSelect = (value, options) => {
    navigate(`/detail/${options.maPhim}`);
  };
  return (
    <>
      <AutoComplete
        className="w-40 md:w-64"
        allowClear={true}
        onSelect={onSelect}
        options={allFilm}
        placeholder={
          allFilm.length ? "Nhập tên phim" : "Xin quay về trang chủ cập nhật"
        }
        filterOption={(inputValue, option) =>
          option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        }
      ></AutoComplete>
    </>
  );
};

export default SearchMovies;
