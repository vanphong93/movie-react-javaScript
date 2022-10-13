import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber, Cascader } from "antd";
import { DatePicker, Space, Select } from "antd";
import { useFormik } from "formik";
import { phimServ } from "../../Services/phimService";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

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

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 12,
      }}
      initialValues={{
        remember: true,
      }}
      onSubmitCapture={formik.handleSubmit}
    >
      <h3 className="text-xl mb-5">Tạo Lịch Chiếu Film</h3>
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
      </Form.Item>

      <Form.Item label="Ngày chiếu giờ chiếu">
        <DatePicker
          format="DD/MM/YYYY hh:mm:ss"
          showTime
          onChange={handleChangeDate}
          onOk={onOk}
        />
      </Form.Item>

      <Form.Item label="Giá vé">
        <InputNumber
          min={75000}
          max={150000}
          onChange={handleChangleInputNumber}
        />
      </Form.Item>
      <Form.Item label="Chức năng">
        <Button type="primary" htmlType="submit">
          Tạo Lịch Chiếu
        </Button>
      </Form.Item>
    </Form>
  );
}
