import React from "react";
import { Tabs } from "antd";
import { useLocation } from 'react-router-dom';
export default function TabsUser({ renderContent,renderUser }) {
  // const { id } = useParams();
  // console.log('id: ', id);
  let location=useLocation();
  // console.log('location: ', location);
  // console.log('history: ', history);
  return (
   <div className="card-container m-3">
     <Tabs centered type="card"
      defaultActiveKey={location.hash=="#info"?"2":"1"}  
      items={[
        {
          label: `Lịch sử đặt vé`,
          key: "1",
          children: (
            <div className="grid grid-cols-2 gap-10 mx-auto">
              {renderContent()}
            </div>
          ),
        },
        {
          label: `Thông tin người dùng`,
          key: "2",
          children: <div id="info">{renderUser()}</div>,
        },
      ]}
    />
   </div>
  );
}


// let {email,hoTen,matKhau,soDienThoai,taiKhoan}=dataTicket 
// console.log('email: ', email);
// return <></>