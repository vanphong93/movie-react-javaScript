import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { localServ } from "../../Services/localService";
export default function UserNav() {
  let newUser = useSelector((state) => {
    return state.userReducer.user;
  });
  console.log("newUser: ", newUser);
  let renderContent = () => {
    if (newUser) {
      return (
        <>
          <p>{newUser.hoTen}</p>
          <NavLink to="/login">
            <button
              onClick={handleLogout}
              className="border rounded border-red-400 px-5 py-1.5 hover:bg-orange-600"
            >
              Đăng xuất
            </button>
          </NavLink>
        </>
      );
    } else {
      return (
        <NavLink to="/login">
          <button className="border rounded border-red-400 mx-3 px-5 py-1.5 hover:bg-orange-600">
            Đăng nhập
          </button>
          <button
            onClick={handleRegister}
            className="border rounded border-red-400 px-5 py-1.5 hover:bg-orange-600"
          >
            Đăng kí
          </button>
        </NavLink>
      );
    }
  };
  let handleRegister = () => {
    window.location.href = "/register";
  };
  let handleLogout = () => {
    localServ.user.remove();
    window.location.href = "/";
  };
  return <div className="">
    {renderContent()}</div>;
}
