import moment from "moment";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { App } from "../../Components/HeaderThemes/Header";
import ModalUpdateUser from "./ModalUpdateUser";
import { userServ } from "../../Services/userService";
import TabsUser from "./TabsUser";
import { moneyFormat } from "../../Utilities/Icon";

export default function UserInfo() {
  const [dataTicket, setDataTicket] = useState();

  useEffect(() => {
    userServ
      .postUserInfo()
      .then((res) => {
        setDataTicket(res.data.content);
        console.log("res.data.content: ", res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  let renderChairInfo = (item) => {
    return item.danhSachGhe
      .splice(item.danhSachGhe.length - 10, item.danhSachGhe.length)
      .map((item, i) => {
        return (
          <span className="bg-green-500 p-0.5 mx-1 rounded" key={i}>
            {item.tenGhe}
          </span>
        );
      });
  };
  let renderContent = () => {
    return dataTicket?.thongTinDatVe.map((item, i) => {
      return (
        <div
          key={i}
          className="flex h-56 shadow-lg hover:-translate-y-2 duration-300 rounded"
        >
          <img className="w-1/3 rounded" src={item.hinhAnh} alt="image" />
          <div className="mx-2">
            <h5 className="text-purple-900 text-center text-2xl font-bold">
              {item.tenPhim}
            </h5>
            <p className="font-medium text-rose-400">
              Ngày đặt: {moment(item.ngayDat).format("DD-MM-YY h:mm a")}
            </p>
            <span>
              Thời lượng {item.thoiLuongPhim}, giá vé {moneyFormat(item.giaVe)}
            </span>
            <br />

            <span>Hệ thống {item.danhSachGhe[0].tenHeThongRap}</span>
            <p className="font-medium">Tên ghế: {renderChairInfo(item)}</p>
          </div>
        </div>
      );
    });
  };
  let renderUser = () => {
    if (dataTicket) {
      let { email, hoTen, matKhau, soDT, taiKhoan, maLoaiNguoiDung, maNhom } =
        dataTicket;
      return (
        <>
          <p>Tên: {hoTen}</p>
          <p>Tài khoản: {taiKhoan}</p>
          <p>Mật khẩu: {matKhau}</p>
          <p>Số điện thoại: {soDT}</p>
          <p>Email: {email}</p>
          <p>
            Người dùng:
            {maLoaiNguoiDung == "KhachHang" ? "Khách Hàng" : "Quản Trị"}
          </p>
          <p>Hạng:{maNhom == "GP00" ? "Bạc" : "Đồng"}</p>

          <ModalUpdateUser data={dataTicket} />
        </>
      );
    }
  };
  return (
    <div className="container mx-auto py-16">
      <TabsUser renderContent={renderContent} renderUser={renderUser} />
    </div>
  );
}
