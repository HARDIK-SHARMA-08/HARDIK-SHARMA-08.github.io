import Image from "next/image";
import React from "react";
import College from "../public/College.png";
import School from "../public/School.png";

export const Education = () => {
  return (
    <div className="flex flex-col divide-y divide-gray-500 w-full">
      <div className="flex flex-row w-full justify-center items-center gap-3">
        <Image src={College} className="w-28" alt="Picture of the author" />
        <div>
          <h4 className="font-bold">Bachelor of Technology</h4>
          <div className="flex flex-row justify-between">
            <h1 className="text-xs text-gray-500 ">2020-24</h1>
            <h1 className="text-xs text-gray-500 ">
              <a href="https://www.skit.ac.in/">SKIT, Jaipur</a>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-center gap-3">
        <Image src={School} className="w-28" alt="Picture of the author" />
        <div>
          <h4 className="font-bold">Senior Secondory School</h4>
          <div className="flex flex-row justify-between">
            <h1 className="text-xs text-gray-500 ">Passing Year- 2020</h1>
            <h1 className="text-xs text-gray-500 ">
              <a href="https://bikanerboysschool.ac.in/">BBS, Bikaner</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
