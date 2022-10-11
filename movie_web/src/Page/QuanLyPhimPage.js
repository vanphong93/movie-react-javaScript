import React, { Fragment, useEffect, useState } from "react";
import { Table } from "antd";
import { Input } from "antd";
import { phimServ } from "../Services/phimService";

export default function QuanLyPhimPage() {
  const [movie, setMovie] = useState([]);
  console.log("[movie]: ", movie);

  useEffect(() => {
    phimServ
      .getListPhim()
      .then((res) => {
        console.log("res", res.data.content);
        setMovie(res.data.content);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      width: "10%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={150}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      width: "15%",
    },
    {
      title: "Mô tả ",
      dataIndex: "moTa",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      width: "35%",
    },
    {
      title: "Thao tác",
      dataIndex: "biDanh",
      width: "25%",
    },
  ];
  const data = movie;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params onChange Table", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h3 className="text-xl mb-5">Quản Lý Fimls</h3>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
        Thêm Phim
      </button>
      <Search
        className="mb-5"
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
