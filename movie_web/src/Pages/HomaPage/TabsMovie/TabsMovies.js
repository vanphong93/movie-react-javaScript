import { Tabs, Button, Popover } from "antd";
import { movieSer } from "../../../services/movieService";
import React, { useEffect, useState } from "react";
import ItemTabMovie from "./ItemTabMovie";
export default function () {
  const [dataMovie, setDataMovie] = useState([]);
  useEffect(() => {
    movieSer
      .getMovieByTheater()
      .then((res) => {
        console.log("lich chieu theo he thong", res);
        setDataMovie(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  let renderContent = () => {
    return dataMovie.map((item, index) => {
      return (
        <Tabs.TabPane
          tab={<img className="w-16 h-16" src={item.logo} />}
          key={index}
        >
          {" "}
          <Tabs style={{ height: 500 }} tabPosition="left">
            {item.lstCumRap.map((cumRap, index) => {
              const content = <p>{cumRap.diaChi}</p>;
              return (
                <Tabs.TabPane
                  tab={
                    <div className="w-48 text-left">
                      <Popover placement="rightTop" content={content}>
                        {" "}
                        <p className=" truncate">{cumRap.tenCumRap}</p>
                        <hr/>
                      </Popover>
                      {/* <p className="truncate">{cumRap.diaChi}</p> */}
                    </div>
                  }
                  key={index}
                >
                  <div
                    style={{ height: 500, overflowY: "scroll" }}
                    className="h-45 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
                  >
                    {cumRap.danhSachPhim.map((phim, index) => {
                      return <ItemTabMovie key={index} data={phim} />;
                    })}
                  </div>
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        </Tabs.TabPane>
      );
    });
  };
  return (
    <div className="p-10">
      {" "}
      <Tabs
        className="shadow-xl"
        tabPosition="left"
        defaultActiveKey="1"
      >
        {renderContent()}
      </Tabs>
    </div>
  );
}
