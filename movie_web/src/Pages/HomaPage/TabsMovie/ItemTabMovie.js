import { Popover } from "antd";
import moment from "moment";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { movieSer } from "../../../Services/movieService";
import { useDispatch } from "react-redux";
export default function ItemTabMovie({ data,showModal }) {
  let dispatch = useDispatch();
  console.log("render item tabs movie");
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
        className="w-36 h-48 object-fill hover:shadow-md duration-300 transition ease-in-out hover:scale-105 hover:-translate-y-1 hover:cursor-pointer"
      />

      <div className="flex-grow">
        <h1 className="mx-3">{data.tenPhim}</h1>
        <div className="grid grid-cols-3 gap-5">
          {data.lstLichChieuTheoPhim.slice(0, 9).map((item, index) => {
            let vnd = new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "vnd",
            }).format(item.giaVe);
            let content = <p>{vnd} </p>;
            return (
              <NavLink to={`/book/${item.maLichChieu}`} key={index}>
                <Popover placement="rightTop" content={content}>
                  {" "}
                  <button
                    onClick={() => {
                      handleTicket(item);
                    }}
                    className="ml-3 p-3 rounded bg-red-500 text-white"
                  >
                    {moment(item.ngayChieuGioChieu).format(
                      "DD-MM-YY h:mm:ss a"
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
