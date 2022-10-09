import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./HOC/Layout";
import "antd/dist/antd.css";
import LoginPage from "./Page/LoginPage";
import LayoutAdmin from "./HOC/LayoutAdmin";
import QuanLyUserPage from "./Page/QuanLyUserPage";
import QuanLyPhimPage from "./Page/QuanLyPhimPage";
import QuanLyShowTimePage from "./Page/QuanLyShowTimePage";
import AdminPage from "./Page/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            exact
            element={<Layout Component={LoginPage} />}
          />
          <Route
            path="/admin"
            element={<LayoutAdmin Component={QuanLyUserPage} />}
          />
          <Route
            path="/admin/UserManage"
            element={<LayoutAdmin Component={QuanLyUserPage} />}
          />
          <Route
            path="/admin/FilmsManage"
            element={<LayoutAdmin Component={QuanLyPhimPage} />}
          />
          <Route
            path="/admin/ShowTimeManage"
            element={<LayoutAdmin Component={QuanLyShowTimePage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
