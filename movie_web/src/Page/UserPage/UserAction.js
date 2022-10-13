import React from "react";

export default function UserAction() {
  return (
    <div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2">
        Sửa
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2">
        Xoá
      </button>
    </div>
  );
}
