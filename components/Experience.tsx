import React from "react";
import { Image } from "@nextui-org/image";
import { CalendarIcon, LinkIcon, LocationIcon } from "./icons";

export const Experience = () => {
  return (
    <div>
      <div className="h-20 w-full rounded-2xl p-4 sm:p-10 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500 dark:bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex justify-center items-center relative">
        <div>
          <Image
            src="work.png"
            className="w-22 sm:w-12 md:w-20 lg:w-22"
            alt="Picture of the author"
          />
        </div>
        <h4 className="font-extrabold text-3xl lg:text-4xl text-black dark:text-white opacity-50 uppercase">
          Experience
        </h4>
      </div>
      <div className="flex justify-center flex-col h-fit lg:h-full pt-4 pb-0 px-4 lg:pb-4  ">
        <ul
          role="list"
          className="marker:text-neutral-700 marker:text-3xl marker:font-extrabold list-decimal pl-5 space-y-3"
        >
          <li className="flex flex-col">
            <li>
              <div className="uppercase font-bold text-md inline-flex items-center gap-2 lg:text-xl hover:underline">
                Software Developer <LinkIcon />
              </div>

              <div className="text-sm text-gray-500">
                Skinthirst-Vyomaga Skincare Pvt. Ltd.{" "}
              </div>
              <div className="text-sm text-gray-500 inline-flex gap-2 items-center">
                <CalendarIcon /> July 2023 - August 2023{" "}
              </div>
              <br />
              <div className="text-sm text-gray-500 inline-flex gap-2 items-center">
                <LocationIcon /> Mumbai, India{" "}
              </div>
            </li>
          </li>
          <li className="flex flex-col">
            <li>
              <div className="uppercase font-bold text-md inline-flex items-center gap-2 lg:text-xl hover:underline">
                Software Developer <LinkIcon />
              </div>
              <div className="text-sm text-gray-500">
                Airdrive Smart Solutions{" "}
              </div>
              <div className="text-sm text-gray-500 inline-flex gap-2 items-center">
                <CalendarIcon /> May 2023 - June 2023{" "}
              </div>
              <br />
              <div className="text-sm text-gray-500 inline-flex gap-2 items-center">
                <LocationIcon /> Hyderabad, India{" "}
              </div>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
};
