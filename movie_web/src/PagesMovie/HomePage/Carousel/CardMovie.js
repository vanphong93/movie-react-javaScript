import { Card } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MediaCardIcon } from "../../../Utilities/Icon";
import { OPEN_MODAL } from "../../../Redux/constant/constantModal";
import { FixUrl } from "../../../Utilities/FixUrlEmbed";

const { Meta } = Card;
export default function Movie({ data, showModal }) {
  let dispatch = useDispatch();
  let openModal = () => {
    let newData = { ...data, isSearch: true };
    dispatch({
      type: OPEN_MODAL,
      payload: FixUrl(newData),
    });
    showModal();
  };

  return (
    <Card
      className=" dark:shadow-white shadow-md  group duration-300 transition ease-in-out hover:-translate-y-1 hover:scale-105 "
      cover={
        <img
          className="h-52 w-28 object-fill sm:h-60 sm:w-32"
          alt="imageCard"
          src={data.hinhAnh}
        />
      }
    >
      <Meta title={<p className="text-red-500 truncate">{data.tenPhim}</p>} />
      <div className="flex  items-center  justify-between">
        <span className="text-purple-700 font-semibold">
          {`${data.danhGia}/10`}
        </span>
        <div className="">
          <MediaCardIcon openModal={openModal} />
        </div>
        <NavLink to={`/detail/${data.maPhim}`}>
          {" "}
          <button className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-1 xl:px-2 border border-yellow-500 hover:border-transparent rounded">
            Mua vé
          </button>
        </NavLink>
      </div>
    </Card>
  );
}
