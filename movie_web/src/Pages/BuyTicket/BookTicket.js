import React from "react";
import { useSelector } from "react-redux";
import {message} from 'antd'
export default function BookTicket() {
  let newUser = useSelector((state) => {
    return state.userReducer.user;
  });
  const handleBuy=() => { 
    if (newUser) {
message.success("Chúc mừng bạn đặt vé thành công")
    }else {
      message.error("Bạn cần đăng nhập để mua vé")
    }
  
   }
  return (
    <div>
      <button onClick={handleBuy}
        type="button"
        className="text-gray-900 mt-16 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Red to Yellow
      </button>
    </div>
  );
}
