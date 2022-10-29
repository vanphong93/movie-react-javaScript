import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderThemes/Header";
import ScrollButton from "../Components/ScrollTop/ScrollBtn";

export default function Layout({ children }) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
      setTheme(true);
    }
  }, []);
  let changeTheme = () => {
    if (!theme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    setTheme(!theme);
    return setTheme(!theme);
  };
  return (
    <div className={theme ? "dark" : ""}>
      <Header changeTheme={changeTheme} />
      {children}
      <ScrollButton />
      <Footer />
    </div>
  );
}
