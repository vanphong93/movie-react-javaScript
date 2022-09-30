import { Popover } from "antd";
import moment from "moment";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ItemTabMovie({ data }) {
  let naviga = useNavigate();
  let handleTicket = (data) => {
    // naviga("/login")
    console.log(data);
    // alert(234)
  };
  return (
    <div className="p-3 flex">
      <img src={data.hinhAnh} className="w-28 h-36 object-cover" />
      <div className="flex-grow">
        <h1 className="mx-3">{data.tenPhim}</h1>
        <div className="grid grid-cols-3 gap-5">
          {data.lstLichChieuTheoPhim.slice(0, 9).map((item, index) => {
            let content = <p>{item.giaVe} đồng</p>;
            // return <span key={index} className="ml-3 p-3 rounded bg-red-500 text-white">{item.ngayChieuGioChieu}</span>
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
