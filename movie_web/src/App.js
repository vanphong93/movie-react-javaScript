import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./HOC/Layout";
import "antd/dist/antd.css";
import LoginPage from "./Page/LoginPage";
import AdminPage from "./Page/AdminPage";
import QuanLyPhimPage from "./Page/QuanLyPhimPage";
import QuanLyUserPage from "./Page/QuanLyUserPage";
import QuanLyShowTime from "./Page/QuanLyShowTime";

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
          <Route path="/admin" element={<Layout Component={AdminPage} />} />
          {/* <Route
            path="/admin/UserManage"
            element={
              <Layout
                Component={
                  <AdminPage>
                    <QuanLyUserPage />
                  </AdminPage>
                }
              />
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
