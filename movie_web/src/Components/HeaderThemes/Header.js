import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";


import {
  Button,
  Modal,
  Form,
  message,
  Input,
  Dropdown,
  Menu,
  Space,
} from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/actions/actionUser";
import LoginPage from "./Login";
import Register from "./Register";
import { localServ } from "../../Services/localService";
import Search from "antd/lib/transfer/search";
import SearchMovies from "./Search";
import { useLocation } from "react-router-dom";
import {
  CalendarIcon,
  HomeIcon,
  LoginIcon,
  LogOutIcon,
  RegisterIcon,
  TheaterIcon,
} from "../../Utilities/Icon";
export default function Header() {
  const location = useLocation();
  let checkLink = location.pathname;

  // console.log("location",location);
  let newUser = useSelector((state) => {
    return state.userReducer.user;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromLogin, setFromLogin] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    let onSuccess = () => {
      message.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };

    let onFailed = () => {
      message.error("Đăng nhập thất bại");
    };

    dispatch(setLogin(values, onSuccess, onFailed));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  let handleLogin = () => {
    setFromLogin(true);
    showModal();
  };
  let handleRegister = () => {
    setFromLogin(false);
    showModal();
  };
  // let handleUpdate = () => {
  //   setFromLogin(false);
  //   showModal();
  // };
  let handleLogout = () => {
    localServ.user.remove();
    window.location.href = "/";
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <Link to={"/"}>
              <span className="font-semibold text-emerald-500">
                Xin chào {newUser?.hoTen}
              </span>
            </Link>
          ),
          key: "0",
        },
        // {
        //   label: checkLink=='/'?<a href="/#filmHot">Phim hot</a>:"",
        //   key: "1",
        // },
        // {
        //   label: checkLink=='/'?<Link to={"/#cinemax"}>Rạp cinemax </Link>:"",
        //   key: "2",
        // },
        {
          label: <NavLink to={"/user#info"}>Thông tin</NavLink>,
          key: "3",
        },
        {
          type: "divider",
        },
        {
          label: (
            <a className="font-semibold" onClick={handleLogout}>
            <LogOutIcon/>
            </a>
          ),
          key: "4",
        },
      ]}
    />
  );

  // <header className="px-4 scr bg-opacity-5 duration-300 fixed z-20 w-full bg-slate-50 dark:text-gray-700 shadow hover:bg-opacity-80">

  return (
    <header className="px-4 scr bg-opacity-5 fixed z-20 w-full bg-slate-50  shadow">
      <div className="container opacity-10 duration-300 hover:opacity-100 flex justify-between h-12 mx-auto">
        <div className="flex">
          <Link
            rel="noopener noreferrer"
            to={"/"}
            className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
          >
            <HomeIcon />
          </Link>
          {checkLink == "/" ? (
            <>
              <a
                rel="noopener noreferrer"
                href="#filmHot"
                className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                <TheaterIcon />
              </a>
              <a
                rel="noopener noreferrer"
                href="#cinemax"
                className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                <CalendarIcon />
              </a>
            </>
          ) : (
            ""
          )}
        </div>

        {/* <ul className="items-center hidden space-x-3 lg:flex">
          <li className="flex">
          </li>
        </ul> */}
        <div className="items-center flex-shrink-0 flex">
          <SearchMovies />
          {newUser ? (
            <>
              <Dropdown trigger={["hover"]} overlay={menu}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <img
                      className="w-10 h-12 rounded-full"
                      src="https://i.pravatar.cc/100"
                      alt="avatar"
                    />
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              {/* <button
                onClick={handleLogout}
                className="self-center bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Đăng xuất
              </button> */}
            </>
          ) : (
            <>
              {" "}
              <button
                onClick={handleRegister}
                className="self-center mx-2 bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded duration-300"
              >
                <RegisterIcon />
              </button>
              <button
                onClick={handleLogin}
                className="self-center duration-300  bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <LoginIcon />
              </button>
            </>
          )}
        </div>

        {/* <button className="p-2 lg:hidden">
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
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}
      </div>
      <Modal
        title="Đăng nhập"
        style={{ top: 20 }}
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        {fromLogin ? (
          <LoginPage modal={setIsModalOpen} />
        ) : (
          <Register modal={setIsModalOpen} />
        )}
      </Modal>
    </header>
  );
}
