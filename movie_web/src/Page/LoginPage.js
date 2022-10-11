import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import bg_animate from "../assets/bg_Login.json";
import { userServ } from "../Services/userService";
import { setUserLogin } from "../Redux/actions/actionUser";
import { localServ } from "../Services/localService";

const LoginPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    console.log("Hello");
  });

  const onFinish = (values) => {
    userServ
      .postLogin(values)
      .then((res) => {
        console.log("TC Dữ liệu Axios trả về", res);
        dispatch(setUserLogin(res.data.content));
        localServ.user.set(res.data.content);
        message.success(res.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        message.error(err.response.data.content);
        console.log("Lỗi", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo.response.data.content);
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto h-screen w-screen flex items-center justify-center  ">
      <div className="w-1/2 h-full">
        <Lottie animationData={bg_animate} />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center ">
        <Form
          className=" w-full "
          layout="vertical"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật Khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Đăng Nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
