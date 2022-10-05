import { Button, Checkbox, Form, Input,message } from "antd";
import React from "react";
import { userServ } from "../../Services/userService";

const App = ({ data }) => {
  // console.log('data: ', data);
  // let { email, hoTen, matKhau, soDT, taiKhoan } = data;

  const onFinish = (values) => {
    let newdata = { ...values, maLoaiNguoiDung: "KhachHang", maNhom: "GP00" };
    console.log('newdata: ', newdata);
    userServ
      .editUser(newdata)
      .then((res) => {
        console.log(res);
       message.success(res.message)
        window.location.reload();
      })
      .catch((err) => {
        console.log('err: ', err);
        message.error(err.message)
      });
  };
  const [form] = Form.useForm();
  if (data != undefined) {
    form.setFieldsValue({
      taiKhoan: data.taiKhoan,
      matKhau: data.matKhau,
      email: data.email,
      hoTen: data.hoTen,
      maLoaiNguoiDung: data.maLoaiNguoiDung,
      maNhom: "GP00",
      soDt: data.soDT,
    });
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <div className="p-9">
      {" "}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="matKhau"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("matKhau") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item> */}

        <Form.Item
          name="taiKhoan"
          label="Username"
          tooltip="Tên đăng nhập của bạn"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="hoTen"
          label="Full name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="soDt"
          label="Phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>{" "}
    </div>
  );
};

export default App;
