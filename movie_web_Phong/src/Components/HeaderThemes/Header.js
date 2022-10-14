import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { HashLink } from "react-router-hash-link";
import { Modal, message, Dropdown, Menu, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/actions/actionUser";
import LoginPage from "./Login";
import Register from "./Register";
import { localServ } from "../../Services/localService";
import SearchMovies from "./Search";
import { useLocation } from "react-router-dom";
import {
  CalendarIcon,
  HomeIcon,
  LoginIcon,
  LogOutIcon,
  NewsIcon,
  RegisterIcon,
  TheaterIcon,
} from "../../Utilities/Icon";
export default function Header() {
  const location = useLocation();
  let checkLink = location.pathname;

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


  let handleLogin = () => {
    setFromLogin(true);
    showModal();
  };
  let handleRegister = () => {
    setFromLogin(false);
    showModal();
  };

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

        {
          label: <Link to={"/user#info"}>Thông tin</Link>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <a className="font-semibold" onClick={handleLogout}>
              <LogOutIcon />
            </a>
          ),
          key: "2",
        },
      ]}
    />
  );

  return (
    <header className="px-4 scr bg-opacity-5 fixed z-20 w-full bg-slate-50  shadow">
      <div className="container opacity-10 duration-300 hover:opacity-100 flex justify-between h-12 mx-auto">
        <div className="flex">
          {checkLink == "/" ? (
            <>
              <HashLink
                rel="noopener noreferrer"
                smooth
                to={"#filmHot"}
                className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                <TheaterIcon />
              </HashLink>
              <HashLink
                smooth
                to={"#cinemax"}
                rel="noopener noreferrer"
                className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                <CalendarIcon />
              </HashLink>
              <HashLink
                rel="noopener noreferrer"
                smooth
                to={"#news"}
                className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
              >
                <NewsIcon />
              </HashLink>
            </>
          ) : (
            <Link
              rel="noopener noreferrer"
              to={"/"}
              className="flex items-center p-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              <HomeIcon />
            </Link>
          )}
        </div>

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
      </div>
      <Modal
        destroyOnClose={true}
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
