import React, { useState, useEffect } from "react";
import { Chip } from "@nextui-org/chip";
import { GithubIcon2, LinkIcon, LiveLinkIcon } from "./icons";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";


export const ProjectCard = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Card className="rounded-3xl min-h-full w-full justify-center">
        <div
          className={`h-[500px] md:h-[400px] bg-white w-full rounded-t-3xl bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center relative`}
          style={{
            backgroundImage: `url(${props.data.img})`
          }}
        >
          <div className="w-full h-full flex flex-col justify-start items-center backdrop-blur">
            <h4 className="absolute top-20 font-bold text-3xl lg:text-5xl text-black">
              {props.data.project}
            </h4>
          </div>
          <div className="p-6 pb-6 absolute bg-white dark:bg-[#18181B] bottom-0 m-2 rounded-3xl min-h-5">
            <h2 className="uppercase font-bold text-center flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 pb-4">
              {props.data.name}{" "}
              <div className="flex flex-row gap-4">
                <a
                  href={props.data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Chip
                    variant="shadow"
                    color="primary"
                    startContent={<LiveLinkIcon />}
                    className="flex normal-case"
                  >
                    Live Preview
                  </Chip>{" "}
                </a>
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
                    Github
                  </Chip>{" "}
                </a>
              </div>
            </h2>

            <span className={`text-justify text-sm md:text-base ${clicked ? "line-clamp-4" : "line-clamp-3"}`} onClick={() => setClicked(!clicked)}>{props.data.about}</span>
            <div className="flex flex-wrap gap-2 mt-4">
              {props.data.techStack.map((item, index) => (
                <Chip variant="flat" color="primary" key={index}>
                  {" "}
                  <div className="font-bold">{item}</div>
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </Card >
    </>
  );
};
