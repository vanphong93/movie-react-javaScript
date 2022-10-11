import React, { useEffect } from "react";
import { localServ } from "../Services/localService";

export default function SecureView({ children }) {
  let userLocal = localServ.user.get();
  useEffect(() => {
    if (!userLocal) {
      window.location.href = "/login";
      alert("Bạn chưa đăng nhập!!!");
    } else {
      let maloaiND = userLocal.maLoaiNguoiDung;
      if (maloaiND == "KhachHang") {
        window.location.href = "/login";
        alert("Bạn không đủ quyền truy cập. Xin hãy chọn tài khoản khác!!!");
      }
    }
  }, []);

  return <div>{children}</div>;
}
