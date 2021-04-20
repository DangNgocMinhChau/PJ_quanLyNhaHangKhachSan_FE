import React, { useState } from "react";
import { Modal, Button } from "antd";
import FormHotel from "./form";
import { useForm } from "antd/lib/form/Form";

function ModalCommon({ isVisible, handleCancel }) {
  const [isModalVisible, setIsModalVisible] = useState(isVisible);
  const [form] = useForm();

  function onSave(values) {
    console.log(values);
    handleCancel();
  }

  return (
    <>
      <Modal
        title="Thêm mới"
        visible={isVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        // onOk={() => form.submit()}
        footer={[
          <Button onClick={handleCancel}>Hủy</Button>,
          <Button onClick={() => form.submit()}>OK</Button>,
        ]}
      >
        <FormHotel onSave={onSave} form={form} />
      </Modal>
    </>
  );
}

export default ModalCommon;
