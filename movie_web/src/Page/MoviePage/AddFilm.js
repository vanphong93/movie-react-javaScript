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

export default function AddFilm() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
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
        <Input name="tenPhim" />
      </Form.Item>

      <Form.Item label="Trailer phim">
        <Input name="trailer" />
      </Form.Item>

      <Form.Item label="Mô tả phim">
        <Input name="moTa" />
      </Form.Item>

      <Form.Item label="Ngày khởi chiếu">
        <DatePicker />
      </Form.Item>

      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="Hot" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="Đánh giá sao">
        <InputNumber />
      </Form.Item>

      <Form.Item label="Hình ảnh">
        <input type="file" />
      </Form.Item>

      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
}
