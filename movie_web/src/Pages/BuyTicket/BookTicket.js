import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";
import { useParams } from "react-router-dom";
import { movieSer } from "../../Services/movieService";
import { useDispatch } from "react-redux";
import { setLoadingOff, setLoadingOn } from "../../redux/actions/actionsSpiner";
import Table from "./Table";
export default function BookTicket() {
  let dispatch = useDispatch();
  let totalMoney = useSelector((state) => {
    return state.dataBookReducer.total;
  });
  let newUser = useSelector((state) => {
    return state.userReducer.user;
  });
  const handleBuy = () => {
    if (newUser) {
      message.success("Chúc mừng bạn đặt vé thành công");
    } else {
      message.error("Bạn cần đăng nhập để mua vé");
    }
  };
  const { id } = useParams();
  const [infoTicket, setInfoTicket] = useState([]);
  useEffect(() => {
    dispatch(setLoadingOn());
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

    return (
      <>
        <p>Ghế chọn {tenGheChon}</p>
        <p>Tổng tiền thanh toán {moneyTotal}</p>
        <button onClick={handleBuy} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Thanh toán</button>
      </>
    );
  };
  let renderContent = () => {
    if (infoTicket == "") {
      return <></>;
    } else {
      let { hinhAnh, tenCumRap, diaChi, tenPhim, ngayChieu, gioChieu } =
        infoTicket.thongTinPhim;

      return (
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={hinhAnh}
                alt="image"
              />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {tenPhim}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <section className="flex">
            <table>
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
