import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import React, { useState } from "react";
import { useFormik } from "formik";
import moment from "moment";

export default function AddFilm() {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setimgSrc] = useState("");

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });

  const handleChangeDataPicker = (values) => {
    let ngayKhoiChieu = moment(values).format("DD/MM/YYYY");
    console.log("ngayKhoiChieu: ", ngayKhoiChieu);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    let fileimg = e.target.files[0];
    if (
      fileimg.type === "image/png" ||
      fileimg.type === "image/jpeg" ||
      fileimg.type === "image/jpg" ||
      fileimg.type === "image/gif"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(fileimg);
      reader.onload = (e) => {
        setimgSrc(e.target.result);
      };
      formik.setFieldValue("hinhAnh", fileimg);
    } else {
      alert("Dữ liệu không phù hợp");
    }
    console.log("fileimg: ", fileimg);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
      <h3 className="text-xl mb-5">Thêm mới Fimls</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Tên phim">
        <Input name="tenPhim" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Trailer phim">
        <Input name="trailer" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Mô tả phim">
        <Input name="moTa" onChange={formik.handleChange} />
      </Form.Item>

      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDataPicker} />
      </Form.Item>

      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("dangChieu")} />
      </Form.Item>

      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("sapChieu")} />
      </Form.Item>

      <Form.Item label="Hot" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("hot")} />
      </Form.Item>

      <Form.Item label="Đánh giá sao">
        <InputNumber
          onChange={handleChangeInputNumber("danhGia")}
          min={0}
          max={10}
        />
      </Form.Item>

      <Form.Item label="Hình ảnh">
        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg, image/gif"
        />
        <br />
        <img style={{ width: 200, height: 200 }} src={imgSrc} alt="..." />
      </Form.Item>

      <Form.Item label="Tác vụ">
        <Button type="primary" htmlType="submit">
          Thêm Phim
        </Button>
      </Form.Item>
    </Form>
  );
}
