import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderThemes/Header";
import ScrollButton from "../Components/ScrollTop/ScrollBtn";
export default function Layout({ children }) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    currentTheme == "dark" && setTheme(true);
  }, []);
  let changeTheme = () => {
    theme
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
    setTheme(!theme);
    return setTheme(!theme);
  };
  return (
    <div className={theme ? "dark bg-neutral-900 " : "light"}>
      <Header changeTheme={changeTheme} />
      {children}
      <ScrollButton />
      <Footer />
    </div>
  );
}
