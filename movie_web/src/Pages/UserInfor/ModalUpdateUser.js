import React,{useState} from "react";
import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import App from "./FormUser";
export default function ModalUpdateUser({data}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

// console.log('data modal: ', dataModal);
// let dispatch=useDispatch()
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
Update
      </Button>
      <Modal
      footer={false}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <App data={data}/>
      </Modal>
    </>
  );
}
