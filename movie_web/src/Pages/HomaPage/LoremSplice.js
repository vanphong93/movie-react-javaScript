import React, { useState } from "react";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
export default function LoremSplice({ data }) {
  const [lorem, setLorem] = useState(250);

  const addRemoveLorem = (action) => {
    if (action == "add") {
      setLorem(data.split("").length);
    } else {
      setLorem(250);
    }
  };
  //   const removeLorem = () => {
  //     setLorem(250);
  //   };
  let arrayData = data.split("");
  return (
    <span>
      {arrayData.splice(0, lorem)}
      {lorem < data.split("").length ? (
        <span
          className="hover:text-red-300 hover:cursor-pointer"
          onClick={() => {
            addRemoveLorem("add");
          }}
        >
          ...
          <DoubleRightOutlined />
        </span>
      ) : data.split("").length > 250 ? (
        <span
          className="hover:text-red-300 hover:cursor-pointer"
          onClick={() => {
            addRemoveLorem("remove");
          }}
        >
          <br />
          <DoubleLeftOutlined />
        </span>
      ) : (
        ""
      )}
    </span>
  );
}
