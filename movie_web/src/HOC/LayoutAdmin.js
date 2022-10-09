import React from "react";
import AdminPage from "../Page/AdminPage";
import HeaderPage from "../Page/HeaderPage";

export default function LayoutAdmin({ Component }) {
  return (
    <div>
      <HeaderPage />
      <div className="flex">
        <AdminPage />
        <Component />
      </div>
    </div>
  );
}
