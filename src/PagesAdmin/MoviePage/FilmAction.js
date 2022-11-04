import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setFilm } from "../../Redux/actions/actionFilm";
import { localServ } from "../../Services/localService";
import { phimServ } from "../../Services/adminMovieService";

export default function FilmAction({ item }) {
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to={`/admin/FilmsManage/EditFilm/${item.maPhim}`}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2">
          Sửa
        </button>
      </NavLink>
      <button
        onClick={() => {
          if (window.confirm(`Bạn có chắc muốn xoá phim "${item.tenPhim}"`)) {
            phimServ
              .xoaPhim(item.maPhim)
              .then((res) => {
                // console.log("res", res);
                alert("Xoá thành công");
                phimServ
                  .getListPhim()
                  .then((res) => {
                    // console.log("res", res.data.content);
                    let data = res.data.content.map((item) => {
                      return { ...item, action: <FilmAction item={item} /> };
                    });
                    dispatch(setFilm(data));
                  })
                  .catch((err) => {
                    // console.log("err", err);
                  });
              })
              .catch((err) => {
                // console.log("err", err);
              });
          }
        }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2"
      >
        Xoá
      </button>
      <NavLink
        to={`/admin/FilmsManage/ShowTimeFilm/${item.maPhim}/${item.tenPhim}`}
        onClick={() => {
          localServ.film.set(item);
        }}
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 ">
          Tạo Lịch
        </button>
      </NavLink>
    </div>
  );
}
