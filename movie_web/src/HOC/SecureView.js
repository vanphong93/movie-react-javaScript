import React, { useEffect } from "react";
import { localServ } from "../Services/localService";

export default function SecureView({ children }) {
  useEffect(() => {
    let userLocal = localServ.user.get();
    if (!userLocal) {
      window.location.href = "/login";
    }
  }, []);

  return <div>{children}</div>;
}
