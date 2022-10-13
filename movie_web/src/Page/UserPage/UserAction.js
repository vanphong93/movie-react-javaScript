import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setListUser } from "../../Redux/actions/actionUser";
import { localServ } from "../../Services/localService";
import { userServ } from "../../Services/userService";

export default function UserAction({ item }) {
  let dispatch = useDispatch();
  return (
    <div>
      <NavLink
        to={`/admin/UserManage/EditUser/${localServ.user.get()?.maNhom}/${
          item.taiKhoan
        }`}
      >
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2">
          Sửa
        </button>
      </NavLink>
      <button
        onClick={() => {
          if (window.confirm(`Bạn có chắc muốn xoá User "${item.hoTen}"`)) {
            userServ
              .UserDelate(item.taiKhoan)
              .then((res) => {
                console.log("res", res);
                alert("Xoá User thành Công !!!(^-^)!!!");
                userServ
                  .getListUser()
                  .then((res) => {
                    let dataUser = res.data.content.map((item) => {
                      return { ...item, action: <UserAction item={item} /> };
                    });
                    console.log("data", dataUser);
                    dispatch(setListUser(dataUser));
                  })
                  .catch((err) => {
                    console.log("err", err);
                  });
              })
              .catch((err) => {
                console.log("err", err);
                alert(err.response.data.content);
              });
          }
        }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2"
      >
        Xoá
      </button>
    </div>
  );
}
