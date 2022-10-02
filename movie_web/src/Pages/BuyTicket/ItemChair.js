import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
export default function ItemChair({ data }) {
  console.log("render state chair");
  let dispatch = useDispatch();
  const [selectChair, setSelectChair] = useState([]);
  useEffect(() => {
    setSelectChair(data);
  }, []);
  let renderContent = () => {
    if (selectChair == "") {
      return;
    } else {
      return (
        <>
          {selectChair.map((item, i) => {
            let handleSelect = (props, i) => {
              let cloneData = [...selectChair];
              if (props.isSelect) {
                cloneData[i] = { ...props, isSelect: false };
              } else {
                cloneData[i] = { ...props, isSelect: true };
              }
              setSelectChair(cloneData);
              dispatch({
                type:"total_money",
                payload:props
              })
            };
            return (
              <td key={i}>
                {item.daDat ? (
                  <button className="bg-red-700 font-semibold text-white m-1  p-1 rounded opacity-50 cursor-not-allowed">
                    X
                  </button>
                ) : item.isSelect ? (
                  <button
                    onClick={() => {
                      handleSelect(item, i);
                    }}
                    className="bg-blue-500 text-white  p-1 rounded opacity-50"
                  >
                    {item.tenGhe}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleSelect(item, i);
                    }}
                    className={
                      item.loaiGhe == "Vip"
                        ? "bg-transparent hover:bg-yellow-500 m-1 text-yellow-700 font-semibold hover:text-white p-1 border border-yellow-500 hover:border-transparent rounded"
                        : "bg-transparent hover:bg-blue-500 m-1 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded"
                    }
                  >
                    {item.tenGhe}
                  </button>
                )}
              </td>
            );
          })}
        </>
      );
    }
  };
  return <>{renderContent()}</>;
}
