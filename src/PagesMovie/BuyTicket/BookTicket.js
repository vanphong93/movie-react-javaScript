import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { movieSer } from "../../Services/movieService";
import { useDispatch } from "react-redux";
import Table from "./Table";
import { moneyFormat } from "../../Utilities/Format";
import { getDataTicket } from "../../Redux/actions/actionBookTicket";
export default function BookTicket() {
  const { id } = useParams();
  const [infoTicket, setInfoTicket] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalMoney = useSelector((state) => state.dataBookReducer.total);
  const isLogin = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(getDataTicket(id, setInfoTicket, dispatch));
  }, []);
  const handleBuy = (dataTicket, idTicket) => {
    let data = {
      maLichChieu: idTicket,
      danhSachVe: dataTicket,
    };
    if (isLogin) {
      data.danhSachVe.length == 0
        ? message.error("Bạn chưa chọn vé, xin kiểm tra")
        : movieSer
            .postTicket(data)
            .then((res) => {
              let text = "Bạn có muốn chuyển sang trang thông tin";
              onclose = () => {
                window.confirm(text)
                  ? navigate("/user")
                  : window.location.reload();
              };
              message.success("Chúc mừng bạn đặt vé thành công", 1, onclose);
            })
            .catch((err) => {
              console.log(err);
            });
    } else {
      message.error("Bạn cần đăng nhập để mua vé");
    }
  };

  const renderTotal = () => {
    const moneyTotal = totalMoney.reduce(
      (total, item) => (total += item.giaVe),
      0
    );
    const tenGheChon = totalMoney.reduce(
      (total, item) => (total += "" + item.tenGhe + ","),
      ""
    );

    return (
      <div className="p-5 text-gray-50 md:w-96">
        <section className="grid grid-cols-2 lg:grid-cols-1 gap-2">
          <p>
            <span className=" mx-2 bg-yellow-300   py-2 px-3 rounded"></span>
            Ghế vip
          </p>
          <p>
            <span className="mx-2  bg-blue-300 py-2 px-3  rounded"></span>
            Ghế trống
          </p>
          <p>
            <span className="bg-green-500 mx-2 py-2 px-3 rounded opacity-50"></span>
            Ghế đang chọn
          </p>
          <p>
            <span className="bg-red-700 mx-2 py-2 px-3 rounded opacity-50 cursor-not-allowed"></span>
            Ghế đã đặt
          </p>
        </section>{" "}
        <section>
          <p className="text-green-500 mx-2 font-bold text-base">
            Ghế bạn chọn {tenGheChon}
          </p>
          <p className="text-yellow-500 mx-2 font-bold text-base">
            Tổng tiền thanh toán {moneyFormat(moneyTotal)}
          </p>
          <button
            onClick={() => {
              handleBuy(totalMoney, id);
            }}
            className="bg-red-500 p-3 rounded hover:bg-red-700 duration-300 "
          >
            Thanh toán
          </button>
        </section>
      </div>
    );
  };

  const renderContent = () => {
    const { hinhAnh, tenCumRap, tenRap, diaChi, tenPhim, ngayChieu, gioChieu } =
      infoTicket.thongTinPhim;
    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-center mx-auto my-10">
          <div className="flex flex-row rounded-lg bg-gray-100 shadow-md shadow-white">
            <img
              className="w-44 h-52 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={hinhAnh}
              alt="anhPhim"
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-2xl font-bold mb-2">
                {tenPhim}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                <span className="font-medium">Ngày chiếu:</span>
                {ngayChieu}
                <br />
                <span className="font-medium">Giờ chiếu:</span>
                {gioChieu}
                <br />
                <span className="font-medium">Địa chỉ:</span>
                {diaChi},{tenCumRap},{tenRap}
                <br />
              </p>
            </div>
          </div>
        </div>

        <section className="lg:flex">
          <table className="mx-auto">
            <tbody>
              <Table />
            </tbody>
          </table>
          {renderTotal()}
        </section>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://static.mservice.io/img/momo-upload-api-210701105436-637607336767432408.jpg)`,
      }}
    >
      {infoTicket && renderContent()}
    </div>
  );
}
