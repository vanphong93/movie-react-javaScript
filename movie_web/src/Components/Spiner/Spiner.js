import React from "react";
import { HashLoader
} from "react-spinners";
import { useSelector } from "react-redux";
export default function Spiner() {
  let { isLoading } = useSelector((state) => {
    return state.spinerReducer;
  });
  return isLoading?
  <div className="h-screen w-screen fixed left-0 top-0 bg-black flex justify-center items-center z-30">
  <HashLoader
size={100} color="#ffb703" />
</div>
  :<></>
}

