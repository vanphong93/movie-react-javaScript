import React from "react";
import { NavLink } from "react-router-dom";

export default function FilmAction({ item }) {
  return (
    <div>
      <NavLink to={`/admin/FilmsManage/EditFilm/${item.maPhim}`}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 mr-4">
          Sửa
        </button>
      </NavLink>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2">
        Xoá
      </button>
    </div>
  );
}
