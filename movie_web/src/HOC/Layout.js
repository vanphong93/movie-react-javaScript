import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderThemes/Header";
import ScrollButton from "../Components/ScrollTop/ScrollBtn";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <ScrollButton/>
      <Footer/>
    </div>
  );
}
