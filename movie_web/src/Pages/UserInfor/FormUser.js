import { Button, Form, Input, message } from "antd";
import React from "react";
import { userServ } from "../../Services/userService";
import { useNavigate } from "react-router-dom";
const App = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    let newdata = { ...values, maLoaiNguoiDung: "KhachHang", maNhom: "GP00" };
    userServ
      .editUser(newdata)
      .then((res) => {
        console.log(res);
        message.success("Tài khoản đã được cập nhật");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        console.log("err: ", err);
        message.error(err.message);
      });
  };
  const [form] = Form.useForm();

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
              message: "Email không hợp lệ",
            },
            {
              required: true,
              message: "Nhập mail của bạn",
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
              message: "Không để trống",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="taiKhoan"
          label="Username"
          tooltip="Tên đăng nhập của bạn"
          rules={[
            {
              required: true,
              message: "Không để trống",
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
              message: "Không để trống",
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
              message: "Không để trống",
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
