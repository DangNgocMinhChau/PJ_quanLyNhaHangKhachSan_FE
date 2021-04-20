import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Radio, DatePicker } from "antd";

function FormHotel({ onSave, form }) {
  //     const onFinish = (values) => {
  //         onSave(values)
  //   };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onSave}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Tên nhà hàng"
          name="restaurantName"
          // rules={[{ required: true, message: "Vui lòng nhập tên nhà hàng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tên chủ sở hữu"
          name="ownerName"
          // rules={[{ required: true, message: "Vui lòng nhập tên nhà hàng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phoneNumber"
          // rules={[{ required: true, message: "Vui lòng nhập tên nhà hàng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="gender" label="Giới tính">
          <Radio.Group>
            <Radio value="nam">Nam</Radio>
            <Radio value="nu">Nữ</Radio>
            <Radio value="khac">Khác</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Năm sinh" hasFeedback validateStatus="success">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="city"
          // rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
}

export default FormHotel;
