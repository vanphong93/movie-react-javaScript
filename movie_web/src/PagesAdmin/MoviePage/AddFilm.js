import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
} from "antd";
import React, { useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import * as Yup from "yup";
import { localServ } from "../../Services/localService";
import { phimServ } from "../../Services/adminMovieService";
import { useNavigate } from "react-router-dom";

export default function AddFilm() {
  const [componentSize, setComponentSize] = useState("default");
  const navigate = useNavigate();
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
    validationSchema: Yup.object({
      tenPhim: Yup.string()
        .min(5, "tên không được ít hơn 5 kí tự")
        .max(50, "Tên không được dài hơn 50 kí tự")
        .required("không được để trống tên Phim"),
      trailer: Yup.string().required("không được để trống trailer phim"),
      moTa: Yup.string().required("Không được để trống Mô tả phim"),
      ngayKhoiChieu: Yup.string()
        .required("Không được để trống Ngày Khởi Chiếu")
        .matches(
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
          "Ngày không hợp lệ!!!"
        ),
      danhGia: Yup.string().required("Không được để trống đánh giá"),
      hinhAnh: Yup.string().required("Không được để trống hình ảnh"),
    }),
    onSubmit: (values) => {
      // console.log("values: ", values);
      // Tạo đối tượng formData
      values.maNhom = localServ.user.get().maNhom;
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      // console.log("FormData", formData.get("maNhom"));
      phimServ
        .themPhim(formData)
        .then((res) => {
          // console.log("Chờ xử lý", res.data.message);
          alert("Thêm phim thành công!!!");
          navigate("/admin/FilmsManage");
        })
        .catch((err) => {
          // console.log(err);
        });
    },
  });

  const handleChangeDataPicker = (values) => {
    let ngayKhoiChieu = moment(values).format("DD/MM/YYYY");

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
    // console.log("fileimg: ", fileimg);
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
      <h3 className="text-xl mb-5">Thêm mới Film</h3>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Tên phim"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input name="tenPhim" onChange={formik.handleChange} />
        {formik.errors.tenPhim && (
          <p className="text-red-500">{formik.errors.tenPhim}</p>
        )}
      </Form.Item>

      <Form.Item label="Trailer phim">
        <Input name="trailer" onChange={formik.handleChange} />
        {formik.errors.trailer && (
          <p className="text-red-500">{formik.errors.trailer}</p>
        )}
      </Form.Item>

      <Form.Item label="Mô tả phim">
        <Input name="moTa" onChange={formik.handleChange} />
        {formik.errors.moTa && (
          <p className="text-red-500">{formik.errors.moTa}</p>
        )}
      </Form.Item>

      <Form.Item label="Ngày khởi chiếu">
        <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDataPicker} />
        {formik.errors.ngayKhoiChieu && (
          <p className="text-red-500">{formik.errors.ngayKhoiChieu}</p>
        )}
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
          value={formik.values.danhGia}
        />
        {formik.errors.danhGia && (
          <p className="text-red-500">{formik.errors.danhGia}</p>
        )}
      </Form.Item>

      <Form.Item label="Hình ảnh">
        <input
          type="file"
          onChange={handleChangeFile}
          accept="image/png, image/jpeg, image/gif"
        />
        {formik.errors.hinhAnh && (
          <p className="text-red-500">Không được để trống hình ảnh</p>
        )}
        <br />
        <img style={{ width: 200, height: 200 }} src={imgSrc} alt="..." />
      </Form.Item>

      <Form.Item label="Chức năng">
        <Button type="primary" htmlType="submit">
          Thêm Phim
        </Button>
      </Form.Item>
    </Form>
  );
}
