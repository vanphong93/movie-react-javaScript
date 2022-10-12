import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localServ } from "../../Services/localService";

export default function HeaderPage() {
  let users = useSelector((state) => {
    return state.userReducer.user;
  });

  let headerPages = () => {
    return (
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              className="w-20 h-20 rounded-2xl"
              src="https://images.all-free-download.com/images/graphicwebp/film_design_elements_filmstrip_glasses_popcorn_icons_6837866.webp"
              alt="Icon Movie"
            />
          </a>

          {menuChinh()}

          <button
            onClick={() => {
              menuSider();
            }}
            className="mobile-menu-button p-4 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {menuAn()}
      </header>
    );
  };
  let menuChinh = () => {
    if (users) {
      let { hoTen } = users;
      return (
        <>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <span className="self-center px-8 py-3 rounded text-white underline">
              Xin Chào {hoTen}
            </span>
            <button
              onClick={handleLogout}
              className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Đăng Xuất
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <NavLink to="/login">
              <button className="self-center px-8 py-3 rounded text-white">
                Đăng Nhập
              </button>
            </NavLink>
            <button
              onClick={handleLogout}
              className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Đăng Xuất
            </button>
          </div>
        </>
      );
    }
  };
  let menuAn = () => {
    if (users) {
      let { hoTen } = users;
      return (
        <>
          <div className="mobile-menu hidden text-right lg:hidden">
            <div className="block mb-5">
              <span className=" px-8 py-3 rounded text-white underline ">
                Xin Chào {hoTen}
              </span>
            </div>
            <div className="block">
              <button
                onClick={handleLogout}
                className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Đăng Xuất
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="mobile-menu hidden text-right lg:hidden">
            <div className="block">
              <NavLink to="/login">
                <button className="self-center px-8 py-3 rounded text-white">
                  Đăng Nhập
                </button>
              </NavLink>
            </div>
            <div className="block">
              <button
                onClick={handleLogout}
                className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Đăng Xuất
              </button>
            </div>
          </div>
        </>
      );
    }
  };
  function menuSider() {
    const menu = document.querySelector("div.mobile-menu");
    menu.classList.toggle("hidden");
  }
  let handleLogout = () => {
    localServ.user.remove();
    window.location.href = "/login";
  };

  return <div>{headerPages()}</div>;
}
