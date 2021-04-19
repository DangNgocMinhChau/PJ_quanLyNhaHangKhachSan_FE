import React, { useState } from "react";
import { Modal, Button } from "antd";

function ModalCommon(isVisible, handleCancel) {
  console.log(isVisible);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ModalCommon;
