import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutLogin from "./HOC/LayoutLogin";
import LayoutAdmin from "./HOC/LayoutAdmin";
import SecureView from "./HOC/SecureView";
import "antd/dist/antd.css";
import LoginPage from "./Page/LoginPage/LoginPage";
import QuanLyPhimPage from "./Page/MoviePage/QuanLyPhimPage";
import AddFilm from "./Page/MoviePage/AddFilm";
import EditFilm from "./Page/MoviePage/EditFilm";
import ShowTimeFilm from "./Page/MoviePage/ShowTimeFilm";
import QuanLyUserPage from "./Page/UserPage/QuanLyUserPage";
import AddUser from "./Page/UserPage/AddUser";
import EditUser from "./Page/UserPage/EditUser";
import Detail from "./Pages/DetailMovies/Detail";
import HomePage from "./Pages/HomaPage/HomePage";
import Layout from "./HOC/Layout";
import Spiner from "./Components/Spiner/Spiner";
import BookTicket from "./Pages/BuyTicket/BookTicket";
import UserInfo from "./Pages/UserInfor/UserInfo";
function App() {
  return (
    <div>
      <Spiner />
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
            path="/admin/UserManage/AddUser"
            element={
              <SecureView>
                <LayoutAdmin Component={AddUser} />
              </SecureView>
            }
          />
          <Route
            path="/admin/UserManage/EditUser/:id/:ten"
            element={
              <SecureView>
                <LayoutAdmin Component={EditUser} />
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
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            exact
            path="/detail/:id"
            element={
              <Layout>
                <Detail />
              </Layout>
            }
          />
          <Route
            exact
            path="/book/:id"
            element={
              <Layout>
                <BookTicket />
              </Layout>
            }
          />
          <Route
            exact
            path="/user"
            element={
              <Layout>
                <UserInfo />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
