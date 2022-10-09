import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import QuanLyUserPage from "./QuanLyUserPage";
const { Content, Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("Files", "3", <FileOutlined />),
// ];

// const LoginPage = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   console.log("collapsed: ", collapsed);
//   return (
//     <Layout
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//       >
//         <div className="logo" />
//         <Menu
//           theme="dark"
//           defaultSelectedKeys={["2"]}
//           mode="inline"
//           items={items}
//         />
//       </Sider>

//       <Layout className="site-layout">
//         <Content
//           style={{
//             margin: "0 16px",
//           }}
//         >
//           <div
//             className="site-layout-background"
//             style={{
//               padding: 24,
//               minHeight: 360,
//             }}
//           >
//             <QuanLyUserPage />
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default LoginPage;

export default function AdminPage() {
  const navigate = useNavigate();
  return (
    <div className="flex row-auto">
      <div>
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          items={[
            { label: "User", key: "/admin/UserManage", icon: <HomeOutlined /> },
            {
              label: "Films",
              key: "/admin/FilmsManage",
              icon: <DesktopOutlined />,
            },
            {
              label: "ShowTime",
              key: "/admin/ShowTimeManage",
              icon: <FileOutlined />,
            },
          ]}
        ></Menu>
      </div>
    </div>
  );
}
