import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./Pages/DetailMovies/Detail";
import HomePage from "./Pages/HomaPage/HomePage";
// import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Layout/Layout";
import Spiner from "./Components/Spiner/Spiner";
import Register from "./Components/HeaderThemes/Register";
import BookTicket from "./Pages/BuyTicket/BookTicket";
function App() {
  return (
    <div>
      <Spiner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route
           exact path="/detail/:id" 
          //  element={<Detail/>}
          
            element={
              <Layout>
              <Detail />
               </Layout>
            }
          />
          <Route
           exact path="/book/:id" element={<Layout><BookTicket/></Layout>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
