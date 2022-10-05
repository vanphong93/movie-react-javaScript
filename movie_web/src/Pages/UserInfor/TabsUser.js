import React from "react";
import { Tabs } from "antd";
export default function TabsUser({ renderContent,renderUser }) {
  return (
    <Tabs
      defaultActiveKey="1"
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
          children: <div>{renderUser()}</div>,
        },
      ]}
    />
  );
}


// let {email,hoTen,matKhau,soDienThoai,taiKhoan}=dataTicket 
// console.log('email: ', email);
// return <></>