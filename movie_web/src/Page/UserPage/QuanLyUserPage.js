import React, { Fragment, useEffect, useState } from "react";
import { userServ } from "../../Services/userService";
import { Table, Tag } from "antd";
import { Input } from "antd";
import UserAction from "./UserAction";
import { useDispatch, useSelector } from "react-redux";
import { setListUser } from "../../Redux/actions/actionUser";

export default function QuanLyUserPage() {
  const { Search } = Input;
  let dispatch = useDispatch();
  const arrUsers = useSelector((state) => {
    return state.userReducer.arrUsers;
  });

  useEffect(() => {
    userServ
      .getListUser()
      .then((res) => {
        let dataUser = res.data.content.map((item) => {
          return { ...item, action: <UserAction item={item} /> };
        });
        console.log("data", dataUser);
        dispatch(setListUser(dataUser));
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      width: "10%",
    },
    {
      title: "Mật Khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
      width: "10%",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "soDT",
      width: "10%",
    },
    {
      title: "Loại Người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      width: "12%",
      render: (text) => {
        if (text == "QuanTri") {
          return <Tag color="red">Quản trị</Tag>;
        } else {
          return <Tag color="blue">Khách hàng</Tag>;
        }
      },
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      width: "25%",
    },
  ];

  const onSearch = (value) => {
    console.log(value);
    if (value != "") {
      userServ
        .UserSreach(value)
        .then((res) => {
          console.log("Thanh cong", res.data.content);
          let dataUser = res.data.content.map((item) => {
            return { ...item, action: <UserAction item={item} /> };
          });
          console.log("data", dataUser);
          dispatch(setListUser(dataUser));
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      userServ
        .getListUser()
        .then((res) => {
          let dataUser = res.data.content.map((item) => {
            return { ...item, action: <UserAction item={item} /> };
          });
          console.log("data", dataUser);
          dispatch(setListUser(dataUser));
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const data = arrUsers;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params onChange Table", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h3 className="text-xl mb-5">Quản Lý User</h3>
      <Search
        className="mb-5"
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"taiKhoan"}
      />
    </div>
  );
}
