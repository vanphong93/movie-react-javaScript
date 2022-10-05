import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { movieSer } from "../../Services/movieService";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../../redux/actions/actionsSpiner";
import Table from "./Table";

export default function BookTicket() {
  let navigate = useNavigate();

  let dispatch = useDispatch();
  let totalMoney = useSelector((state) => {
    return state.dataBookReducer.total;
  });
  let newUser = useSelector((state) => {
    return state.userReducer.user;
  });
  const handleBuy = (dataTicket, idTicket) => {
    let data = {
      maLichChieu: idTicket,
      danhSachVe: dataTicket,
    };
    if (newUser) {
      if (data.danhSachVe.length == 0) {
        message.error("Bạn chưa chọn vé, xin kiểm tra");
      } else {
        movieSer
          .postTicket(data)
          .then((res) => {
            console.log(res);
            let text = "Bạn có muốn chuyển sang thông tin";
            onclose = () => {
              if (window.confirm(text) == true) {
                navigate("/user");
              } else {
                window.location.reload();
              }
            };
            message.success("Chúc mừng bạn đặt vé thành công", 1, onclose);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      message.error("Bạn cần đăng nhập để mua vé");
    }
  };
  const { id } = useParams();
  const [infoTicket, setInfoTicket] = useState([]);
  useEffect(() => {
    dispatch(setLoadingOn());
    dispatch({
      type: "clear_total",
    });
    movieSer
      .getInfoTicket(id)
      .then((res) => {
        console.log("ticket info", res.data.content);
        dispatch({
          type: "fix_data",
          payload: res.data.content.danhSachGhe,
        });
        setInfoTicket(res.data.content);
        dispatch(setLoadingOff());
      })
      .catch((err) => {
        dispatch(setLoadingOn());
        console.log("err: ", err);
      });
  }, []);
  let renderTotal = () => {
    let moneyTotal = 0;
    let tenGheChon = "";
    totalMoney.forEach((item) => {
      moneyTotal += item.giaVe;
      tenGheChon += " " + item.tenGhe + ",";
    });
    let vnd = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "vnd",
    }).format(moneyTotal);
    return (
      <div className="p-5">
        <section className="grid grid-cols-3 lg:grid-cols-1 gap-2">
          <p>
            <span className="bg-transparent mx-2 hover:bg-yellow-500 text-yellow-700 py-2 px-3 border border-yellow-500 hover:border-transparent rounded"></span>
            Ghế vip
          </p>
          <p>
            <span className="bg-transparent mx-2 hover:bg-blue-500 text-blue-700 border border-blue-500 py-2 px-3 hover:border-transparent rounded"></span>
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
            Tổng tiền thanh toán {vnd}
          </p>
          <button
            onClick={() => {
              handleBuy(totalMoney, id);
            }}
            className="bg-white hover:bg-gray-100 mx-2 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Thanh toán
          </button>
        </section>
      </div>
    );
  };
  let renderContent = () => {
    if (infoTicket == "") {
      return <></>;
    } else {
      let { hinhAnh, tenCumRap, tenRap, diaChi, tenPhim, ngayChieu, gioChieu } =
        infoTicket.thongTinPhim;

      return (
        <div className="container mx-auto py-10">
          <div className="flex my-10 justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                className="w-48 h-52 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={hinhAnh}
                alt="image"
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
                {/* <p className="text-gray-600 text-xs">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>
          <section className="lg:flex">
            <table className="">
              <tbody>
                <Table />
              </tbody>
            </table>
            <div>{renderTotal()}</div>
          </section>
        </div>
      );
    }
  };
  return (
    <>
      {renderContent()}
      {/* <button
        onClick={handleBuy}
        type="button"
        className="text-gray-900 mt-16 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Red to Yellow
      </button> */}
    </>
  );
}
