import React from "react";
import Image from "next/image";
import work from "../public/work.png";

export const Experience = () => {
  return (
    <div>
      <div className="h-20 w-full rounded-2xl p-4 sm:p-10 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500 dark:bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex justify-center items-center relative">
        <div>
          <Image src={work} className="w-22" alt="Picture of the author" />
        </div>
        <h4 className="font-extrabold text-3xl lg:text-4xl text-black dark:text-white opacity-50 uppercase">
          Experiences
        </h4>
      </div>
      <div className="p-8">
        <ul
          role="list"
          className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400"
        >
          <li className="font-bold">Software Developer</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
      </div>
    </div>
  );
};
