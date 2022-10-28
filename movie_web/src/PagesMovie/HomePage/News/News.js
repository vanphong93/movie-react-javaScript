import React, { useState, memo } from "react";
import { dataZing } from "../../../assets/dataZing";
import { BackIcon, NextIcon } from "../../../Utilities/Icon";
function News() {
  const [item, setItem] = useState(0);
  let newData = dataZing.slice(item, item + 4);
  let handleNext = () => {
    let newNumber = item + 4;
    setItem(newNumber);
  };
  let handleBack = () => {
    let newNumber = item - 4;
    setItem(newNumber);
  };
  let renderContent = () => {
    return newData.map((item, i) => {
      return (
        <section
          key={i}
          className="flex h-36 hover:-translate-y-1 duration-300 dark:text-gray-200 rounded-lg dark:shadow-white shadow"
        >
          <img
            className="w-1/4 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={item.img}
            alt="image"
          />
          <div className="px-3  py-2">
            <h1 className="dark:text-gray-200">{item.title}</h1>
            <p className="text-xs sm:text-sm">
              {item.detail}...
              <a
                target={"_blank"}
                href={item.url}
                className="mx-2 hover:text-violet-500"
              >
                Chi tiết
              </a>
            </p>
          </div>
        </section>
      );
    });
  };

  return (
    <div className="space-y-10 mt-20">
      <h1 className="text-center dark:text-purple-400 text-purple-500 text-6xl mb-12 hover:animate-pulse ">
        Tin Hot
      </h1>
      <div className="grid lg:grid-cols-2 gap-10">{renderContent()}</div>
      <section className="text-right">
        {item < 4 ? (
          <button className="bg-white  opacity-50 cursor-not-allowed  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <BackIcon />
          </button>
        ) : (
          <button
            onClick={handleBack}
            className="bg-white hover:bg-gray-100  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            <BackIcon />
          </button>
        )}
        {item + 4 >= dataZing.length ? (
          <button className="bg-white opacity-50 cursor-not-allowed ml-1 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <NextIcon />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-white  hover:bg-gray-100 ml-1 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            <NextIcon />
          </button>
        )}
      </section>
      <br />
    </div>
  );
}
export default memo(News);
