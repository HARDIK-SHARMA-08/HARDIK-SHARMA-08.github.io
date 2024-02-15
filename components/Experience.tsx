import React from "react";
import { Image } from "@nextui-org/image";
import { CalendarIcon, LinkIcon, LocationIcon } from "./icons";

export const Experience = () => {
  return (
    <div className="h-full">
      <div className="h-20 w-full flex justify-center items-center rounded-2xl p-4 sm:p-10 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500 dark:bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 ">
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

      <div className="flex flex-col h-5/6 justify-evenly gap-4 px-1 sm:px-6 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-around items-center">
            <Image
              src="vanshiv.png"
              className="w-12 sm:w-12 md:w-20 lg:w-22"
              alt="Picture of the author"
            />
            <div>
              <div className="uppercase font-bold text-md inline-flex items-center gap-2 lg:text-xl hover:underline">
                Software Developer <LinkIcon />
              </div>
              <div className="text-sm text-gray-500">
                Vanshiv Technologies - Intern
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <div className="text-sm text-gray-500 inline-flex gap-2 items-center">
              <CalendarIcon /> Febuary 2024 - Present{" "}
            </div>
            <div className="text-sm text-gray-500 inline-flex gap-2 items-center">
              <LocationIcon /> Jaipur, India{" "}
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-around items-center">
            <Image
              src="skinthirst.png"
              className="w-12 sm:w-12 md:w-20 lg:w-22"
              alt="Picture of the author"
            />

            <div>
              <div className="uppercase font-bold text-md inline-flex items-center gap-2 lg:text-xl hover:underline">
                Software Developer<LinkIcon />
              </div>
              <div className="text-sm text-gray-500">
                Skinthirst skincare Pvt. Ltd. - Intern
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <div className="text-sm text-gray-500 inline-flex gap-2 items-center">
              <CalendarIcon /> July 2023 - August 2023{" "}
            </div>
            <div className="text-sm text-gray-500 inline-flex gap-2 items-center">
              <LocationIcon /> Hyderabad, India{" "}
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};
