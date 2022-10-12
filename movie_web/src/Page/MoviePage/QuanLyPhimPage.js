import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Table } from "antd";
import { Input } from "antd";
import { phimServ } from "../../Services/phimService";
import { setFilm } from "../../Redux/actions/actionFilm";
import FilmAction from "./FilmAction";

export default function QuanLyPhimPage() {
  let arrfilms = useSelector((state) => {
    return state.filmReducer.arrFilm;
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    phimServ
      .getListPhim()
      .then((res) => {
        // console.log("res", res.data.content);
        let data = res.data.content.map((item) => {
          return { ...item, action: <FilmAction item={item} /> };
        });
        dispatch(setFilm(data));
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
      key: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      width: "15%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
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
      key: "tenPhim",
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
      key: "moTa",
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
      dataIndex: "action",
      key: "action",
      width: "25%",
    },
  ];
  const data = arrfilms;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params onChange Table", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h3 className="text-xl mb-5">Quản Lý Fimls</h3>
      <button
        onClick={() => {
          navigate("/admin/FilmsManage/AddFilm");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
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
