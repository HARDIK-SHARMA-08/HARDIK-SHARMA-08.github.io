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

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="h-24 w-24 rounded-full border-black-800 dark:border-white-600 border-4 pt-2 text-center">
          <p className="text-gray-600 text-xs">All</p>
          <h1 className="text-2xl divide-y">{data?.totalSolved}</h1>
          <p className="text-gray-600 text-xs">{data?.totalQuestions}</p>
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
              <span className="text-gray-600">/{data?.totalEasy}</span>
            </p>
            <p className="">
              {data?.mediumSolved}
              <span className="text-gray-600">/{data?.totalMedium}</span>
            </p>
            <p className="">
              {data?.hardSolved}
              <span className="text-gray-600">/{data?.totalHard}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
