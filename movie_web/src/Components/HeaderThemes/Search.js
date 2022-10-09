import { AutoComplete } from "antd";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { data_fix } from "./Search/data";
const SearchMovies = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // const [filmSearch, setFilmSearch] = useState();

  let { dataTheater, dataMovie, dataSearch } = useSelector((state) => {
    return state.movieReducer;
  });
  //  useEffect(() => {
  //   if (dataSearch) {setFilmSearch(dataSearch)
  //   } else {
  //       let allFilm = [];
  //       (dataMovie ? dataMovie : []).forEach((item) => {
  //           let data = {
  //               value: item.tenPhim,
  //               key: item.maPhim,
  //           };
  //           allFilm.push(data);
  //       });
  //       (dataTheater ? dataTheater : []).map((item) => {
  //           // let tenRap = item.tenHeThongRap;
  //           return item.lstCumRap.map((item) => {
  //               return item.danhSachPhim.forEach((item, i) => {
  //                   let data = {
  //                       label: item.tenPhim,
  //                       value: item.maPhim + "",
  //                       key: item.maPhim,
  //                   };
  //                   allFilm.push(data);
  //               });
  //           });
  //       });
  //       let fixDataFilm = _.unionBy(allFilm, "value");
  //       dispatch({
  //           type: "data_search",
  //           payload: fixDataFilm,
  //       });
  //       setFilmSearch(fixDataFilm)
  //   }

  //  }, [])

  let allFilm = [];
  (dataMovie ? dataMovie : []).forEach((item) => {
    let data = {
      value: item.tenPhim,
      key: item.maPhim,
    };
    allFilm.push(data);
  });
  (dataTheater ? dataTheater : []).map((item) => {
    // let tenRap = item.tenHeThongRap;
    return item.lstCumRap.map((item) => {
      return item.danhSachPhim.forEach((item, i) => {
        let data = {
          // label: item.tenPhim,
          value: item.tenPhim,
          key: item.maPhim,
        };
        allFilm.push(data);
      });
    });
  });
  let fixDataFilm = _.unionBy(allFilm, "value");
  // console.log('fixDataFilm: ', fixDataFilm);
  // let check = (a, b) => {};
  let onSelect = (value, options) => {
    console.log("options: ", options);
    // setFilmSearch(options);
    let url = options.key;
    console.log("url: ", url);
    navigate(`/detail/${url}`);
  };

  // let getData = () => {
  //   let url = filmSearch.maPhim;
  //   navigate(`/detail/${url}`);
  // };
  let onFocus = (a) => {
    console.log("check", a);
  };
  return (
    <>
      <AutoComplete
        allowClear={true}
        // notFoundContent
        // className="w-40 md:w-64"
        // allowClear={true}
        style={{
          width: 280,
        }}
        // onFocus={onFocus}
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
