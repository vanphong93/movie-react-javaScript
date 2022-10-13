import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalUpdateUser from "./ModalUpdateUser";
import { userServ } from "../../Services/userService";
import TabsUser from "./TabsUser";
import { moneyFormat, TicketIcon, TicketIconInfo } from "../../Utilities/Icon";
import { useNavigate } from "react-router-dom";
import { setLoadingOff, setLoadingOn } from "../../redux/actions/actionsSpiner";
import { message } from "antd";
export default function UserInfo() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [dataTicket, setDataTicket] = useState();
  let { dataSearch } = useSelector((state) => {
    return state.searchData;
  });
  useEffect(() => {
    dispatch(setLoadingOn());
    userServ
      .postUserInfo()
      .then((res) => {
        dispatch(setLoadingOff());
        setDataTicket(res.data.content);
      })
      .catch((err) => {
        console.log("err: ", err);
        setTimeout(() => {
          dispatch(setLoadingOff());
          alert("kiem tra ket noi");
        }, 6000);
      });
  }, []);
  let addTicket = (data) => {
    let index = dataSearch.findIndex((item) => {
      return item.value == data;
    });
    if (index == -1) {
      message.error("Bạn cần quay lại trang chủ để cập nhật dữ liệu");
    } else {
      let result = dataSearch[index].maPhim;
      navigate(`/detail/${result}`);
    }
  };
  let renderChairInfo = (item) => {
    let newItem = [...item.danhSachGhe];
    return newItem.splice(-10).map((item, i) => {
      return (
        <span className="bg-green-500 p-0.5 mx-1 rounded" key={i}>
          {item.tenGhe}
        </span>
      );
    });
  };
  let renderContent = () => {
    return dataTicket?.thongTinDatVe.map((item, i) => {
      console.log("dataTicket: ", dataTicket);

      return (
        <div
          key={i}
          className="flex h-56 shadow-lg hover:-translate-y-2 duration-300 rounded"
        >
          <img
            onClick={() => {
              addTicket(item.tenPhim);
            }}
            className="w-1/3 rounded hover:cursor-pointer"
            src={item.hinhAnh}
            alt="image"
          />
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
