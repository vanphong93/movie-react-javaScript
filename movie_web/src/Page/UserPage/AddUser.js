import { Button, Form, Input, Radio, Select } from "antd";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { localServ } from "../../Services/localService";
import { userServ } from "../../Services/userService";

export default function AddUser() {
  const [componentSize, setComponentSize] = useState("default");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      maNhom: localServ.user.get()?.maNhom,
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);
      userServ
        .UserAdd(values)
        .then((res) => {
          console.log("Chờ Xử lý", res);
          alert("Thêm User thành công");
          navigate("/admin/UserManage");
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeLoaiNguoiDung = (value) => {
    formik.setFieldValue("maLoaiNguoiDung", value);
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <h3 className="text-xl mb-5">Thêm mới User</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Tài Khoản">
        <Input name="taiKhoan" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Mật Khẩu">
        <Input name="matKhau" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Họ và Tên">
        <Input name="hoTen" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Email">
        <Input type="email" name="email" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Số điện thoại">
        <Input name="soDT" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Loại người dùng">
        <Select
          options={[
            { label: "Khách hàng", value: "KhachHang" },
            { label: "Quản trị", value: "quanTri" },
          ]}
          onChange={handleChangeLoaiNguoiDung}
          placeholder="Xin vui lòng chọn Loại người dùng"
        />
      </Form.Item>

      <Form.Item label="Chức năng">
        <Button type="primary" htmlType="submit">
          Thêm User
        </Button>
      </Form.Item>
    </Form>
  );
}
