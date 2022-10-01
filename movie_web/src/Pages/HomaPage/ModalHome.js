import { Button, Modal, Rate } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const ModalHome = () => {
  // let dispatch=useDispatch()
  // dispatch({
  //   type:"open_modal",
  //   payload:showModal,
  // })
  const showModal = () => {
    setIsModalOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  // let { data,isOpen } = useSelector((state) => {
  //   return state.modalReducer;
  // });
  // if (data) {
  //   setIsModalOpen(true);
  // }
  // const renderModal = () => {
  //   return (
  //     <Modal
  //       style={{ top: 20 }}
  //       width={1000}
  //       footer={null}
  //       title="Trailer"
  //       open={isModalOpen}
  //       onCancel={() => {
  //         handleCancel(data.maPhim);
  //       }}
  //     >
  //       {data.baner ? (
  //         <iframe
  //           id={data.maPhim}
  //           allowFullScreen={true}
  //           title="myFrame"
  //           className="w-full"
  //           height={450}
  //           src={data.trailer}
  //         ></iframe>
  //       ) : (
  //         <div className="flex">
  //           <iframe
  //             id={data.maPhim}
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen={true}
  //             title="myFrame"
  //             className="w-1/2"
  //             height={450}
  //             frameBorder={0}
  //             src={data.trailer}
  //           ></iframe>
  //           <div className="w-1/2 p-3">
  //             <h1
  //               style={{ fontSize: "30px" }}
  //               className="text-center text-indigo-500"
  //             >
  //               {data.tenPhim}
  //             </h1>
  //             <p>{data.moTa}</p>
  //             {data.isSearch ? (
  //               ""
  //             ) : (
  //               <NavLink to={`/detail/${data.maPhim}`}>
  //                 {" "}
  //                 <button className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
  //                   Mua vé
  //                 </button>
  //               </NavLink>
  //             )}
  //             <h2>
  //               Điểm đánh giá:{" "}
  //               <Rate disabled allowHalf defaultValue={data.danhGia / 2} />
  //             </h2>
  //           </div>
  //         </div>
  //       )}
  //     </Modal>
  //   );
  // };
  const handleCancel = (id) => {
    let stopVideo = () => {
      var iframe = document.getElementById(id);

      iframe.src = iframe.src;
    };
    stopVideo();
    setIsModalOpen(false);
  };
  return (
    <>
      {/* {renderModal()} */}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}

        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
