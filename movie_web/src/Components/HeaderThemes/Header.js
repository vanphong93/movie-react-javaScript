import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

import UserNav from "./UserNav";
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
export default function Header() {
  const location = useLocation();
  let checkLink = location.pathname;
  console.log("checkLink: ", checkLink);
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
              Log out
            </a>
          ),
          key: "4",
        },
      ]}
    />
  );

  // <header className="px-4 scr bg-opacity-5 duration-300 fixed z-20 w-full bg-slate-50 dark:text-gray-700 shadow hover:bg-opacity-80">

  return (
    <header className="px-4 scr bg-opacity-5 fixed z-20 w-full bg-slate-50 dark:text-gray-700 shadow">
      <div className="container opacity-10 duration-300 hover:opacity-100 flex justify-between h-12 mx-auto">
        <div className="flex opacity-80">
          <Link
            rel="noopener noreferrer"
            to={"/"}
            className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          {checkLink == "/" ? (
            <>
              <a
                rel="noopener noreferrer"
                href="#filmHot"
                className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#cinemax"
                className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </>
          ) : (
            ""
          )}
        </div>
        {/* <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
          </svg>
        </a> */}

        <ul className="items-center hidden space-x-3 lg:flex">
          <li className="flex">
            {/* // logo trang chu */}
            {/* <Link
              rel="noopener noreferrer"
              to={"/"}
              className="dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link> */}
          </li>
        </ul>
        <div className="items-center opacity-20 duration-300 hover:opacity-100 flex-shrink-0 hidden lg:flex">
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
                className="self-center mx-2 bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Đăng kí
              </button>
              <button
                onClick={handleLogin}
                className="self-center  bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Đăng nhập
              </button>
            </>
          )}
        </div>

        <button className="p-2 lg:hidden">
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
        </button>
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
