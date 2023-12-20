import React from "react";
import { Image } from "@nextui-org/image";

export const Education = () => {
  return (
    <div className="flex flex-col divide-y divide-gray-500 h-full w-full">
      <div className="flex flex-row h-full w-full justify-center items-center gap-3 p-0 lg:px-4">
        <Image
          src="/College.png"
          className="w-28 md:w-44"
          alt="Picture of the author"
        />
        <div>
          <h4 className="font-bold md:text-2xl lg:text-xl">Bachelor of Technology</h4>
          <div className="flex flex-row justify-between">
            <h1 className="text-xs text-gray-500">2020-24</h1>
            <h1 className="text-xs text-gray-500">
              <a href="https://www.skit.ac.in/">SKIT, Jaipur</a>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-full w-full justify-center items-center gap-3 p-0 lg:px-4">
        <Image
          src="/school.png"
          className="w-28 md:w-44"
          alt="Picture of the author"
        />
        <div>
          <h4 className="font-bold md:text-2xl lg:text-xl">Senior Secondory School</h4>
          <div className="flex flex-row justify-between">
            <h1 className="text-xs text-gray-500">Passing Year- 2020</h1>
            <h1 className="text-xs text-gray-500">
              <a href="https://bikanerboysschool.ac.in/">BBS, Bikaner</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
