import React,{useState} from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderThemes/Header";
import ScrollButton from "../Components/ScrollTop/ScrollBtn";

export default function Layout({ children }) {
  const [theme, setTheme] = useState(false);
  let changeTheme = () => {
    setTheme(!theme);
    return setTheme(!theme)
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
