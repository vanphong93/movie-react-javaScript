import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutLogin from "./HOC/LayoutLogin";
import LayoutAdmin from "./HOC/LayoutAdmin";
import SecureView from "./HOC/SecureView";
import "antd/dist/antd.css";
import LoginPage from "./Page/LoginPage/LoginPage";
import QuanLyUserPage from "./Page/MoviePage/QuanLyUserPage";
import QuanLyPhimPage from "./Page/MoviePage/QuanLyPhimPage";
import AddFilm from "./Page/MoviePage/AddFilm";
import EditFilm from "./Page/MoviePage/EditFilm";
import ShowTimeFilm from "./Page/MoviePage/ShowTimeFilm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            exact
            element={<LayoutLogin Component={LoginPage} />}
          />

          <Route
            path="/admin"
            element={
              <SecureView>
                <LayoutAdmin Component={QuanLyUserPage} />
              </SecureView>
            }
          />
          <Route
            path="/admin/UserManage"
            element={
              <SecureView>
                <LayoutAdmin Component={QuanLyUserPage} />
              </SecureView>
            }
          />
          <Route
            path="/admin/FilmsManage"
            element={
              <SecureView>
                <LayoutAdmin Component={QuanLyPhimPage} />
              </SecureView>
            }
          />

          <Route
            path="/admin/FilmsManage/AddFilm"
            element={
              <SecureView>
                <LayoutAdmin Component={AddFilm} />
              </SecureView>
            }
          />
          <Route
            path="/admin/FilmsManage/EditFilm/:id"
            element={
              <SecureView>
                <LayoutAdmin Component={EditFilm} />
              </SecureView>
            }
          />
          <Route
            path="/admin/FilmsManage/ShowTimeFilm/:id/:ten"
            element={
              <SecureView>
                <LayoutAdmin Component={ShowTimeFilm} />
              </SecureView>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
