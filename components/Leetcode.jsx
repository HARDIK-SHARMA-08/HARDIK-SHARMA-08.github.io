import React, { useEffect, useState } from "react";

export const Leetcode = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/hardiksharma08")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const progressStop = data.totalSolved
    ? `${(data.totalSolved / data.totalQuestions) * 100}%`
    : "0%";

  const style = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: `conic-gradient(#facc15 0% ${progressStop}, #252527 ${progressStop} 100%)`,
  };

  return (
    <>
      <div className="flex flex-row justify-around items-center">
        <div
          className="h-24 w-24 rounded-full flex flex-col items-center justify-center"
          style={style}
        >
          <div className="flex flex-col items-center justify-center h-20 w-20 rounded-full bg-white dark:bg-neutral-900 ">
            <p className="text-gray-600 text-xs">All</p>
            <h1 className="text-2xl z-10">{data?.totalSolved}</h1>
            {/* <hr className="w-1/4 bg-gray-600 mb-1" />
            <p className="text-gray-600 text-xs ">{data?.totalQuestions}</p> */}
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="">
            <p className="text-green-400 ">Easy</p>
            <p className="text-yellow-400 ">Medium</p>{" "}
            <p className="text-red-400 ">Hard</p>
          </div>
          <div className="text-right text-black dark:text-white">
            <p className="">
              {" "}
              {data?.easySolved}
              {/* <span className="text-gray-600">/{data?.totalEasy}</span> */}
            </p>
            <p className="">
              {data?.mediumSolved}
              {/* <span className="text-gray-600">/{data?.totalMedium}</span> */}
            </p>
            <p className="">
              {data?.hardSolved}
              {/* <span className="text-gray-600">/{data?.totalHard}</span> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
