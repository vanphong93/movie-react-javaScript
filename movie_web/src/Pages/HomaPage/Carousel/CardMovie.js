import { Card, Modal, Rate } from "antd";

import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { MediaCardIcon } from "../../../Utilities/Icon";
import { OPEN_MODAL } from "../../../redux/constant/constantModal";

const { Meta } = Card;

export default function Movie({ data, showModal }) {
  let dispatch = useDispatch();

  let openModal = () => {
    // console.log(123);
    dispatch({
      type: OPEN_MODAL,
      payload: data,
    });
    showModal();
  };

  return (
    <Card
      className="hover:shadow-md duration-300 transition ease-in-out hover:-translate-y-1 hover:scale-105 "
      style={{
        border: "none",
      }}
      cover={
        <img
          className="h-64 object-fill rounded"
          alt="example"
          src={data.hinhAnh}
        />
      }
    >
      <Meta title={<p className="text-red-500 truncate">{data.tenPhim}</p>} />
      <div className="flex justify-between">
        <MediaCardIcon openModal={openModal} />
        {/* <svg
          onClick={openModal}
          className="w-10 hover:animate-spin hover:cursor-pointer"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg> */}
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
