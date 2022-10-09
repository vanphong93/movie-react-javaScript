import { Card, Modal, Rate } from "antd";

import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { MediaCardIcon } from "../../../Utilities/Icon";
import { OPEN_MODAL } from "../../../redux/constant/constantModal";
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
