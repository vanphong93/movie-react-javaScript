import { Tabs, Popover } from "antd";
import "./TabsMovies.css";
import React, { useEffect, useState } from "react";
import ItemTabMovie from "./ItemTabMovie";
export default function ({ showModal, dataMovie }) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 640px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  const renderDetail = (item) => (
    <Tabs
      className="p-0"
      defaultActiveKey="0"
      style={{ height: 520 }}
      tabPosition="left"
      items={item.lstCumRap.map((cumRap, index) => {
        const content = <span>{cumRap.diaChi}</span>;
        return {
          label: (
            <div className="w-24 md:w-48 text-left dark:text-gray-300">
              <Popover placement="rightTop" content={content}>
                {" "}
                <p className="truncate">{cumRap.tenCumRap}</p>
                <hr className="" />
              </Popover>
            </div>
          ),
          key: index,
          children: (
            <div style={{ height: 510, overflowY: "auto" }}>
              {cumRap.danhSachPhim.map((phim, index) => (
                <ItemTabMovie showModal={showModal} key={index} data={phim} />
              ))}
            </div>
          ),
        };
      })}
    ></Tabs>
  );
  return (
    <Tabs
      className="shadow-lg dark:shadow-white font-semibold"
      tabPosition={matches ? "left" : "top"}
      defaultActiveKey="1"
      items={dataMovie.map((item, index) => {
        return {
          label: <img className="w-10 h-10 md:w-16 md:h-16" alt="logoTheater" src={item.logo} />,
          key: index,
          children: renderDetail(item),
        };
      })}
    ></Tabs>
  );
}
