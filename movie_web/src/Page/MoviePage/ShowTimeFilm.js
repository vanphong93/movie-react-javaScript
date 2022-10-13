import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber, Cascader } from "antd";
import { DatePicker, Space, Select } from "antd";
import { useFormik } from "formik";
import { phimServ } from "../../Services/phimService";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { localServ } from "../../Services/localService";
import * as Yup from "yup";

export default function ShowTimeFilm() {
  let { id } = useParams();
  const maphim = id;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      maPhim: maphim,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    validationSchema: Yup.object({
      ngayChieuGioChieu: Yup.string().required("không được để trống ngày giờ"),
      maRap: Yup.string().required("không được để trống cụm rạp"),
      giaVe: Yup.string().required("Không được để trống giá vé"),
    }),
    onSubmit: (value) => {
      console.log("value", value);
      phimServ
        .TaoLichChieuPhim(value)
        .then((res) => {
          console.log("res", res);
          alert("Thêm lịch chiếu thành công");
          navigate("/admin/FilmsManage");
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  });

  const [heThongRap, setheThongRap] = useState([]);
  const [CumRap, setCumRap] = useState([]);

  useEffect(() => {
    phimServ
      .laythongtinHeThongRap()
      .then((res) => {
        let datahtr = res.data.content;
        console.log("htr", datahtr);
        setheThongRap(datahtr);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const handleChangeHeThongRap = (value) => {
    console.log("value", value);
    phimServ
      .laythongtinCumRap(value)
      .then((res) => {
        let datacumrap = res.data.content;
        console.log("Cum rap", datacumrap);
        setCumRap(datacumrap);
      })
      .catch((err) => {
        console.log("err", err);
        alert(err.response.data.message);
      });
  };
  const handleChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };
  const handleChangeDate = (value) => {
    console.log("value", value);
  };
  const onOk = (value) => {
    console.log("value: ", moment(value).format("DD/MM/YYYY hh:mm:ss"));
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const handleChangleInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  const convertHTR = () => {
    return heThongRap?.map((htr, inedx) => {
      return { label: htr.tenHeThongRap, value: htr.tenHeThongRap };
    });
  };
  const convertCumRap = () => {
    return CumRap?.map((cr, inedx) => {
      return { label: cr.tenCumRap, value: cr.maCumRap };
    });
  };
  let imgFilm = localServ.film.get().hinhAnh;
  let tenFilm = localServ.film.get().tenPhim;
  let bidanhFilm = localServ.film.get().biDanh;
  let danhgiaFilm = localServ.film.get().danhGia;
  let motaFilm = localServ.film.get().moTa;

  return (
    <div className="container">
      <h3 className="text-xl mb-5">Tạo Lịch Chiếu Film</h3>

      <div className="ml-40 mb-10 flex">
        <img src={imgFilm} alt="img film" width={250} height={250} />
        <div className="ml-10">
          <h2 className="text-xl">
            <span className="text-red-600 mr-2">Tên phim:</span>
            {tenFilm}
          </h2>
          <h2 className="text-xl">
            <span className="text-red-600 mr-2">Bí danh:</span> {bidanhFilm}
          </h2>
          <h2 className="text-xl">
            <span className="text-red-600 mr-2">Đánh giá:</span> {danhgiaFilm}
          </h2>
          <h2 className="text-xl">
            <span className="text-red-600 mr-2">Mô tả:</span> {motaFilm}
          </h2>
        </div>
      </div>
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onSubmitCapture={formik.handleSubmit}
      >
        <Form.Item label="Hệ thống rạp">
          <Select
            options={convertHTR()}
            onChange={handleChangeHeThongRap}
            placeholder="Xin chọn hệ thống rạp"
          />
        </Form.Item>

        <Form.Item label="Cụm rạp">
          <Select
            options={convertCumRap()}
            onChange={handleChangeCumRap}
            placeholder="Xin chọn cụm rạp"
          />
          {formik.errors.maRap && (
            <p className="text-red-500">{formik.errors.maRap}</p>
          )}
        </Form.Item>

        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={handleChangeDate}
            onOk={onOk}
          />
          {formik.errors.ngayChieuGioChieu && (
            <p className="text-red-500">{formik.errors.ngayChieuGioChieu}</p>
          )}
        </Form.Item>

        <Form.Item label="Giá vé">
          <InputNumber
            min={75000}
            max={150000}
            onChange={handleChangleInputNumber}
          />
          {formik.errors.giaVe && (
            <p className="text-red-500">{formik.errors.giaVe}</p>
          )}
        </Form.Item>
        <Form.Item label="Chức năng">
          <Button type="primary" htmlType="submit">
            Tạo Lịch Chiếu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
