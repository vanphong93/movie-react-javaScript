import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemChair from "./ItemChair";

export default function Table() {
  const [infoBooking, setInfoBooking] = useState(null);
  let { data } = useSelector((state) => state.dataBookReducer);
  let {user}=useSelector((state) =>  state.userReducer )
  useEffect(() => {
    setInfoBooking(data);
  }, []);

  let renderContent = () =>
    infoBooking?.map((item, i) => (
      <tr key={i}>
        <ItemChair user={user} data={item} />
      </tr>
    ));

  return <>{renderContent()}</>;
}
