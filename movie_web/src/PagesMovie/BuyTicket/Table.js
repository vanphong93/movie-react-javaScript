import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemChair from "./ItemChair";

export default function Table() {
  const [infoBooking, setInfoBooking] = useState([]);
  let { data } = useSelector((state) => {
    return state.dataBookReducer;
  });
  useEffect(() => {
    setInfoBooking(data);
  }, []);

  let renderContent = () => {
    return infoBooking.map((item, i) => {
      return (
        <tr key={i}>
          <ItemChair data={item} />
        </tr>
      );
    });
  };
  return <>{renderContent()}</>;
}
