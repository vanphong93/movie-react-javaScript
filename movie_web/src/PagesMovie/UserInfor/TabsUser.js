import React from "react";
import { Tabs } from "antd";
export default function TabsUser({ renderContent, renderUser }) {
  return (
    <div className="card-container m-3">
      <Tabs
        centered
        type="card"
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
            children: <div>{renderUser()}</div>,
          },
        ]}
      />
    </div>
  );
}
