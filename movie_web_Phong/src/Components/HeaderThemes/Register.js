import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRegister } from "../../redux/actions/actionUser";
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

const Register = ({ modal }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    let onSuccess = () => {
      message.success("Đăng kí thành công");
      modal(false);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 2000);
    };
    let onFailed = () => {
      message.error("Đăng kí thất bại, tài khoản hoặc email đã tồn tại");
    };
    dispatch(setRegister(values, onSuccess, onFailed));
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
              message: "Không hợp lệ",
            },
            {
              required: true,
              message: "Xin nhập Email",
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
              message: "Hãy nhập pass",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Xin nhập lại pass",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("matKhau") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("Pass nhập lại không giống"));
              },
            }),
          ]}
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
              message: "Không bỏ trống",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="hoTen"
          label="Full name"
          rules={[
            {
              required: true,
              message: "Không bỏ trống",
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
              message: "Không bỏ trống",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Xin chấp nhận điều khoản")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Tôi đã đọc và <a href="">chấp nhận các điều khoản</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Đăng Kí
          </Button>
        </Form.Item>
      </Form>{" "}
    </div>
  );
};

export default Register;
