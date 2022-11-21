import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import { useRoutes } from "react-router-dom";
import LayoutLogin from "./HOC/LayoutLogin";
import LayoutAdmin from "./HOC/LayoutAdmin";
import SecureView from "./HOC/SecureView";
import LoginPage from "./PagesAdmin/LoginPage/LoginPage";
import QuanLyPhimPage from "./PagesAdmin/MoviePage/QuanLyPhimPage";
import AddFilm from "./PagesAdmin/MoviePage/AddFilm";
import EditFilm from "./PagesAdmin/MoviePage/EditFilm";
import ShowTimeFilm from "./PagesAdmin/MoviePage/ShowTimeFilm";
import QuanLyUserPage from "./PagesAdmin/UserPage/QuanLyUserPage";
import AddUser from "./PagesAdmin/UserPage/AddUser";
import EditUser from "./PagesAdmin/UserPage/EditUser";
import Detail from "./PagesMovie/DetailMovies/Detail";
import HomePage from "./PagesMovie/HomePage/HomePage";
import Layout from "./HOC/Layout";
import BookTicket from "./PagesMovie/BuyTicket/BookTicket";
import UserInfo from "./PagesMovie/UserInfor/UserInfo";
import Page404 from "./Components/404/Page404";
function App() {
  let routers = [
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/detail/:id",
      element: (
        <Layout>
          <Detail />
        </Layout>
      ),
    },
    {
      path: "/book/:id",
      element: (
        <Layout>
          <BookTicket />
        </Layout>
      ),
    },
    {
      path: "/user",
      element: (
        <Layout>
          <UserInfo />
        </Layout>
      ),
    },
    {
      path: "/admin/FilmsManage/ShowTimeFilm/:id/:ten",
      element: (
        <SecureView>
          <LayoutAdmin Component={ShowTimeFilm} />
        </SecureView>
      ),
    },
    {
      path: "/admin/FilmsManage/EditFilm/:id",
      element: (
        <SecureView>
          <LayoutAdmin Component={EditFilm} />
        </SecureView>
      ),
    },
    {
      path: "/admin/FilmsManage/AddFilm",
      element: (
        <SecureView>
          <LayoutAdmin Component={AddFilm} />
        </SecureView>
      ),
    },
    {
      path: "/admin/FilmsManage",
      element: (
        <SecureView>
          <LayoutAdmin Component={QuanLyPhimPage} />
        </SecureView>
      ),
    },
    {
      path: "/admin/UserManage/EditUser/:id/:ten",
      element: (
        <SecureView>
          <LayoutAdmin Component={EditUser} />
        </SecureView>
      ),
    },
    {
      path: "/admin/UserManage/AddUser",
      element: (
        <SecureView>
          <LayoutAdmin Component={AddUser} />
        </SecureView>
      ),
    },
    {
      path: "/admin/UserManage",
      element: (
        <SecureView>
          <LayoutAdmin Component={QuanLyUserPage} />
        </SecureView>
      ),
    },
    {
      path: "/admin",
      element: (
        <SecureView>
          <LayoutAdmin Component={QuanLyUserPage} />
        </SecureView>
      ),
    },
    {
      path: "/login",
      element: <LayoutLogin Component={LoginPage} />,
    },
    {
      path: "*",
      element: <Page404/>,
    },
  ];
  let element = useRoutes(routers);
  return <>{element}</>;
}

export default App;
