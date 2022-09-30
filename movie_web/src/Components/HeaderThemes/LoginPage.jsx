import { Button, Form, Input, message } from "antd";
import React from "react";
import Lottie from "lottie-react";
import login from "../../assets/login_animate.json";
// import { localServ } from "../../services/localService";
import { userServ } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/actions/actionUser";
// import { SET_USER } from "../../redux/constant/constantUser";
export const LoginPage = ({modal}) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    //   userServ
    // .postLogin(values)
    // .then((res) => {
    //   // localServ.user.set(res.data.content);
    //   // dispatch({
    //   //   type: SET_USER,
    //   //   payload: res.data.content,
    //   // });
    let onSuccess = () => {
      message.success("Đăng nhập thành công");
      modal(false)
      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);
    };
    // message.success("Đăng nhập thành công");
    // setTimeout(() => {
    //   navigate("/");
    // }, 2000);
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    let onFailed = () => {
      message.error("Đăng nhập thất bại");
    };
    // message.failed("Đăng nhập thất bại");
    // });
    dispatch(setLogin(values,onSuccess,onFailed));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    // <div className="container mx-auto h-screen w-screen flex items-center justify-center">
    //   <div className="w-1/2 h-full flex items-center justify-center">
    //     {" "}
        <Form
          className=" w-full"
          layout="vertical"
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
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
            label="Password"
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    //   </div>
    //   <div className="w-1/2 h-full">
    //     <Lottie animationData={login} />
    //   </div>
    // </div>
  );
};

export default LoginPage;
