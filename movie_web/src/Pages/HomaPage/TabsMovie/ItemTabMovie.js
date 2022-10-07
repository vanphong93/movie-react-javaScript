import { Popover } from "antd";
import moment from "moment";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { movieSer } from "../../../Services/movieService";
import { useDispatch } from "react-redux";
export default function ItemTabMovie({ data,showModal }) {
  let dispatch = useDispatch();
//   console.log("render item tabs movie");
  // let naviga = useNavigate();
  let handleTrailer = (maPhim) => {
    console.log("maPhim: ", maPhim);
    movieSer
      .getInfoMovie(maPhim)
      .then((res) => {
        console.log(res.data.content);
        let newData = { ...res.data.content, isSearch: true };
        dispatch({
          type: "open_modal",
          payload: newData,
        });
        showModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let handleTicket = (data) => {
    // naviga("/login")
    console.log(data);
    // alert(234)
  };
  return (
    <div className="p-1 flex">
      <img
        onClick={() => {
          handleTrailer(data.maPhim);
        }}
        src={data.hinhAnh}
        className="w-28 h-36 sm:w-40 sm:h-52 object-fill hover:shadow-lg duration-300 transition ease-in-out hover:scale-105 hover:-translate-y-1 hover:cursor-pointer"
      />

      <div className="flex-grow text-center">
        <h1 className="text-sm md:mx-3 md:text-xl">{data.tenPhim}</h1>
        <div
        // className="grid grid-cols-1"
        className="grid grid-cols-1 lg:grid-cols-4 md:gap-3"
        >
          {data.lstLichChieuTheoPhim.slice(0, 7).map((item, index) => {
            let vnd = new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "vnd",
            }).format(item.giaVe);
            let content = <span>{vnd} </span>;
            return (
              <NavLink to={`/book/${item.maLichChieu}`} key={index}>
                <Popover placement="rightTop" content={content}>
                  {" "}
                  <button
                    onClick={() => {
                      handleTicket(item);
                    }}
                    className="m-1 p-2 md:ml-3 md:p-3 rounded bg-red-500 text-white"
                  >
                    {moment(item.ngayChieuGioChieu).format(
                      "DD-MM-YY h:mm a"
                    )}
                  </button>
                </Popover>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
