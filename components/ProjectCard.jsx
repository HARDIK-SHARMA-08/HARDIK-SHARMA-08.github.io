import React, { useState } from "react";
import { Chip } from "@nextui-org/chip";
import { GithubIcon } from "./icons";

export const ProjectCard = (props) => {
  return (
    <>
      <div className="flex flex-col h-full w-full items-center">
        <div className="h-28 w-full rounded-3xl bg-white flex justify-center items-center">
          <div className="absolute w-fit bg-green-400 top-0 left-0 p-2 px-3 lg:p-4 rounded-tl-3xl rounded-br-3xl">
            <a
              href={props.data.link}
              className="duration-200 flex flex-row gap-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>

              <div className="font-bold text-black">Live Link</div>
            </a>
          </div>

          <h4 className="font-bold text-3xl lg:text-5xl text-black">
            uncommon<span className="text-red-500 text-4xl lg:text-6xl">.</span>{" "}
          </h4>
        </div>
        <div>
          <h2 className="uppercase font-bold text-center my-4 flex flex-row flex-wrap items-center justify-center gap-4">
            {props.data.name}{" "}
            <a
              href={props.data.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon> Repo </GithubIcon>
            </a>
          </h2>
          <p className="text-justify lg:text-left">{props.data.about}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {props.data.techStack.map((Tech, index) => (
              <Chip key={index}>{Tech}</Chip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
