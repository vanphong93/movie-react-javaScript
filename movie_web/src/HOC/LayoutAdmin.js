import {
  DesktopOutlined,
  UserOutlined,
  SettingOutlined,
  FolderAddOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../Page/HeaderPage/HeaderPage";
const { Content, Sider } = Layout;

function MenuSider({ Children }) {
  const navigate = useNavigate();
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu
            mode="inline"
            theme="dark"
            onClick={({ key }) => {
              navigate(key);
            }}
            items={[
              {
                label: "Quản lý User",
                icon: <UserOutlined />,
                children: [
                  {
                    label: "Users",
                    key: "/admin/UserManage",
                    icon: <UserSwitchOutlined />,
                  },
                  {
                    label: "Thêm User",
                    key: "/admin/UserManage/AddUser",
                    icon: <UserAddOutlined />,
                  },
                ],
              },
              {
                label: "Quản lý Films",
                icon: <SettingOutlined />,
                children: [
                  {
                    label: "Films",
                    key: "/admin/FilmsManage",
                    icon: <DesktopOutlined />,
                  },
                  {
                    label: "Thêm Films",
                    key: "/admin/FilmsManage/AddFilm",
                    icon: <FolderAddOutlined />,
                  },
                ],
              },
            ]}
          ></Menu>
        </Sider>

        <Layout className="site-layout">
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {Children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default function LayoutAdmin({ Component }) {
  return (
    <div>
      <HeaderPage />
      <MenuSider Children={<Component />} />
    </div>
  );
}
