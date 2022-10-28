import { Popover } from "antd";
import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { moneyFormat } from "../../../Utilities/TextMoney";
import { dataToModal } from "../../../Redux/actions/actionModel";
export default function ItemTabMovie({ data, showModal }) {
  let dispatch = useDispatch();
  let handleTrailer = (maPhim) => {
    dispatch(dataToModal(showModal, maPhim));
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

      <div className="flex-grow dark:text-gray-200 text-center">
        <h1 className="text-sm dark:text-gray-200  md:mx-3 md:text-xl">
          {data.tenPhim}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-3">
          {data.lstLichChieuTheoPhim.slice(0, 7).map((item, index) => {
            let content = <span>{moneyFormat(item.giaVe)} </span>;
            return (
              <NavLink to={`/book/${item.maLichChieu}`} key={index}>
                <Popover placement="rightTop" content={content}>
                  {" "}
                  <button className="m-1 p-2 md:ml-3 md:p-3 duration-300 hover:bg-red-700 rounded bg-red-500 text-white">
                    {moment(item.ngayChieuGioChieu).format("DD-MM-YY h:mm a")}
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
