import React, { useState, useEffect } from "react";
import { Chip } from "@nextui-org/chip";
import { GithubIcon2, LinkIcon } from "./icons";

export const ProjectCard = (props: {
  data: {
    img: any;
    link: string | undefined;
    project:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
    github: string | undefined;
    about:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | React.PromiseLikeOfReactNode
      | null
      | undefined;
    techStack: any[];
  };
}) => {
  return (
    <>
      <div className="flex flex-col w-full justify-between">
        <div
          className={`h-28 lg:h-52 w-full rounded-t-3xl bg-cover bg-top flex justify-center items-center relative`}
          style={{ backgroundImage: `url(${props.data.img})` }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur">
            <div className="absolute w-fit bg-[#0070f0] top-0 left-0 p-2 px-3 lg:p-4 rounded-tl-3xl rounded-br-3xl">
              <a
                href={props.data.link}
                className="duration-200 flex flex-row gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                <div className="text-white hover:underline">Live Preview</div>
              </a>
            </div>

            <h4 className="font-bold text-3xl lg:text-5xl text-black">
              {props.data.project}
            </h4>
          </div>
        </div>
        <div className="p-6 pb-6">
          <h2 className="uppercase font-bold text-center flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 pb-4">
            {props.data.name}{" "}
            <a
              href={props.data.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Chip
                variant="shadow"
                color="primary"
                startContent={<GithubIcon2 />}
                className="normal-case"
              >
                Know more
              </Chip>{" "}
            </a>
          </h2>
          <p className="text-justify">{props.data.about}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {props.data.techStack.map((Tech, index) => (
              <Chip variant="flat" color="primary" key={index}>
                {" "}
                <div className="font-bold">{Tech}</div>
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
