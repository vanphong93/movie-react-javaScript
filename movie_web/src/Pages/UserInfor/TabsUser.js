import React from "react";
import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
export default function TabsUser({ renderContent, renderUser }) {
  let location = useLocation();

  return (
    <div className="card-container m-3">
      <Tabs
        centered
        type="card"
        defaultActiveKey={location.hash == "#info" ? "2" : "1"}
        items={[
          {
            label: `Lịch sử đặt vé`,
            key: "1",
            children: (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
                {renderContent()}
              </div>
            ),
          },
          {
            label: `Thông tin người dùng`,
            key: "2",
            children: <div >{renderUser()}</div>,
          },
        ]}
      />
    </div>
  );
}
