import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { App } from "../../Components/HeaderThemes/Header";
import ModalHeader from "../../Components/HeaderThemes/ModalHeader";
import { userServ } from "../../Services/userService";
import TabsUser from "./TabsUser";

export default function UserInfo() {
  const [dataTicket, setDataTicket] = useState();

  // let { user } = useSelector((state) => {
  //   return state.userReducer;
  // });
  // console.log("user: ", user.taiKhoan);
  useEffect(() => {
    userServ
      .postUserInfo()
      .then((res) => {
        // // dataTicketUser=res.data.content.thongTinDatVE
        console.log("dataTicketUser: ", res.data.content);
        // // console.log("lay user",res);
        setDataTicket(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // let renderContent = () => {
  //   if (dataTicket == undefined) {
  //     return <></>;
  //   } else {
  //     console.log("codulieu: ", dataTicket);
  //     return dataTicket.thongTinDatVe.map((item, i) => {
  //       return (
  //         <img className=" w-36 h-44 " key={i} src={item.hinhAnh} alt="iamge" />
  //       );
  //     });
  //   }
  // };
  let renderChairInfo = (item) => {
    return item.danhSachGhe.map((item, i) => {
      return (
        <span className="bg-green-500 p-1 mx-1 rounded" key={i}>
          {item.tenGhe}
        </span>
      );
    });
  };
  let renderContent = () => {
    return dataTicket?.thongTinDatVe.map((item, i) => {
      return (
        <div key={i} className="flex h-60 shadow-lg rounded">
          <img
            className="w-1/4 object-cover rounded"
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
            <p>Thời lượng {item.thoiLuongPhim}</p>
            <p>Giá vé {item.giaVe}</p>
            <p>Hệ thống {item.danhSachGhe[0].tenHeThongRap}</p>
            <p className="font-medium">Tên ghế: {renderChairInfo(item)}</p>
          </div>
        </div>
      );
    });
  };
  let renderUser = () => {
    if (dataTicket) {
      let { email, hoTen, matKhau, soDT, taiKhoan } = dataTicket;
      return (
        <>
          <p>Tên: {hoTen}</p>
          <p>Tài khoản: {taiKhoan}</p>
          <p>Mật khẩu: {matKhau}</p>
          <p>Số điện thoại: {soDT}</p>
          <p>Email: {email}</p>
<ModalHeader/>
          {/* <Link href="#register">check</Link> */}
          {/* <button  className="rounded p-2 text-teal-50 bg-green-500">Cập nhật</button> */}
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
