import React, { useEffect, useState } from "react";
import { userServ } from "../../Services/userService";

export default function QuanLyUserPage() {
  const [arrUser, setarrUser] = useState([]);
  useEffect(() => {
    userServ
      .getListUser()
      .then((res) => {
        let data = res.data.content.map((item) => {
          return { ...item, action: "hello" };
        });
        console.log("data", data);
        console.log("thành công");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return <div>QuanLyUserPage</div>;
}
