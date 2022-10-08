import React from "react";
import HeaderPage from "../Page/HeaderPage";

export default function Layout({ Component }) {
  return (
    <div>
      <HeaderPage />
      <Component />
    </div>
  );
}
