"use client";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  MarqueeComponent,
  ThemeSwitch,
  About,
  Stories,
  Leetcode,
  Footer,
  ProjectCard,
  Education,
} from "@/components";
import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import data from "@/app/ProjectData.json";

interface ProjectData {
  Project1: Object;
  Project2: Object;
}

export default function Home() {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    pauseOnHover: true,
    fade: true,
  };

  const [projectDetails, setProjectDetails] = useState<ProjectData | null>(
    null
  );
  useEffect(() => {
    setProjectDetails(data);
  }, []);

  if (!projectDetails) {
    return null; // or a loading state
  }

  return (
    <div className="max-w-screen p-8 pb-0 sm:p-14 sm:pb-0">
      <div className="grid grid-cols-12 grid-rows-1 gap-5 sm:gap-10 sm:grid-rows-2">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Card className="rounded-3xl h-[300px] md:h-[350px] lg:h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="w-full h-full object-cover"
              src="/Photo.jpg"
            />
            <CardFooter className="p-0 backdrop-filter backdrop-blur-lg bg-opacity-30 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-3xl rounded-3xl bottom-1 w-11/12 place-self-center shadow-small  z-10">
              <ThemeSwitch />
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <Card className="rounded-3xl h-fit lg:h-full">
            <About />
          </Card>
        </div>

        <div className="hidden lg:block lg:col-span-4 lg:row-span-1">
          <Card className="rounded-3xl h-[400px] items-center">
            <Stories />
          </Card>
        </div>

        <div className="block col-span-12 md:col-span-12 lg:hidden lg:col-span-4 ">
          <Card className="rounded-3xl h-fit items-center pt-4">
          <CardHeader className="flex-col items-center top-0 absolute left-0 items-start ml-2 pt-0">
              <p className="text-tiny bg-opacity-50 text-white/60 bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-1 px-6 uppercase font-bold">
                Education
              </p>
            </CardHeader>
            <Education />
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Card className="rounded-3xl h-full p-8 lg:p-12 justify-center h-[500px] lg:h-full">
            <CardHeader className="flex-col items-center top-0 absolute left-0 items-start ml-2 pt-0">
              <p className="text-tiny bg-opacity-50 text-white/60 bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-1 px-6 uppercase font-bold">
                Projects
              </p>
            </CardHeader>
            <Slider {...settings} className="px-1 sm:px-4">
              <ProjectCard data={projectDetails.Project1} />
            </Slider>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <Card className="rounded-3xl h-full p-8 lg:p-12 justify-center h-[500px] lg:h-full">
            <CardHeader className="flex-col items-center top-0 absolute left-0 items-start ml-2 pt-0">
              <p className="text-tiny bg-opacity-50 text-white/60 bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-1 px-6 uppercase font-bold">
                Experiences
              </p>
            </CardHeader>
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-8 lg:col-start-1">
          <Card className="rounded-3xl pt-12 pb-6 h-fit sm:h-full">
            <CardHeader className="flex-col items-center top-0 absolute sm:absolute items-start ml-2 pt-0">
              <p className="relative text-tiny bg-opacity-50 text-white/60 bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-1 px-6 uppercase font-bold">
                💻 Languages & Technologies
              </p>
            </CardHeader>
            <MarqueeComponent />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 lg:col-start-9 ">
          <Card className="rounded-3xl h-full justify-center px-8 pb-6 pt-10">
            <CardHeader className="flex-col items-center top-0 absolute sm:absolute">
              <p className="relative left-10 text-tiny bg-opacity-50 text-white/60 bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-lg w-fit shadow-small p-1 px-6 uppercase font-bold">
                LeetCode
              </p>
            </CardHeader>
            <Leetcode />
          </Card>
        </div>

        <div className="col-span-12">
          <Card className="rounded-t-3xl rounded-b-none h-full p-10">
            <Footer />
          </Card>
        </div>
      </div>
    </div>
  );
}
