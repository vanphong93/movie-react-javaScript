import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderThemes/Header";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
