import { Popover, Tabs } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TextSplice, { MediaCardIcon, moneyFormat } from "../../Utilities/Icon";
import LoremSplice from "../HomaPage/LoremSplice";
import ItemTabMovie from "../HomaPage/TabsMovie/ItemTabMovie";

export const TabsDetail = ({ data }) => {
  let { heThongRapChieu } = data;
  console.log("data: ", data);

  let handleTicket = (data) => {
    // naviga("/login")
    console.log(data);
    // alert(234)
  };
  const renderTimeMovie = (data) => {
    let content = <span>{moneyFormat(data.lichChieuPhim[0].giaVe)}</span>;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-3">
        {data.lichChieuPhim.slice(0, 9).map((item, i) => {
          return (
            <NavLink to={`/book/${item.maLichChieu}`} key={i}>
              <Popover placement="rightTop" content={content}>
                <button
                  onClick={() => {
                    handleTicket(item);
                  }}
                  className="ml-3 p-1 md:p-3 rounded bg-red-500 duration-300 hover:bg-red-700 text-white"
                >
                  {moment(item.ngayChieuGioChieu).format("DD-MM-YY h:mm:ss a")}
                </button>
              </Popover>
            </NavLink>
          );
        })}
      </div>
    );
  };

  const renderTabChildren = (data) => {
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition={"left"}
          style={{
            height: 420,
          }}
          items={data.map((item, i) => {
            const content = <span>{item.diaChi}</span>;
            return {
              label: (
                <>
                  <div className="w-36 md:w-48 text-left">
                    <Popover placement="rightTop" content={content}>
                      <p className=" truncate">{item.tenCumRap}</p>
                    </Popover>
                    <hr />
                  </div>
                </>
              ),
              key: i,
              children: renderTimeMovie(item),
              // children: <ItemTabMovie data={data}/>,
            };
          })}
        />
      </div>
    );
  };

  return (
    <div className="container mx-auto py-10">
      <div
        className="mx-auto mt-10 flex items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl 
 "
      >
        <img
          className="w-32 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={data.hinhAnh}
          alt="image"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {data.tenPhim}
          </h5>
          <p className="mb-3 font-normal text-gray-500 ">
            <TextSplice data={data.moTa ? data.moTa : "Đang cập nhật"} />
            {/* <LoremSplice data={data.moTa ? data.moTa : "Đang cập nhật"} /> */}
          </p>
        </div>
      </div>
      <div className="p-2 md:p-10 text-blue-700 ">
        {heThongRapChieu && heThongRapChieu.length != 0 ? (
          <Tabs
            className="shadow-xl"
            defaultActiveKey="1"
            tabPosition={"left"}
            style={{
              height: "auto",
            }}
            items={heThongRapChieu.map((item, i) => {
              return {
                label: (
                  <img
                    className="w-10 h-10 md:w-16 md:h-16"
                    // style={{ height: "50px" }}
                    src={item.logo}
                    alt="image"
                  />
                ),
                key: i,
                children: <>{renderTabChildren(item.cumRapChieu)}</>,
              };
            })}
          />
        ) : (
          <h1 className="text-center text-2xl text-red-300">
            Hệ thống đang cập nhật
          </h1>
        )}
      </div>
    </div>
  );
};
