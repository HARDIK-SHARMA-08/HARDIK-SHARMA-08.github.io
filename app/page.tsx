"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  MarqueeComponent,
  About,
  Stories,
  Leetcode,
  Footer,
  ProjectCard,
  Education,
  Experience,
  ContactModal,
} from "@/components";
import Slider from "react-slick";
import data from "@/app/ProjectData.json";
import {
  LeftArrowIcon,
  RightArrowIcon,
  SkillIcon,
  LinkIcon,
  LinkIcon2,
  ResumeIcon,
  MailIcon,
  EducationIcon,
} from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";

interface ProjectData {
  Project1: Object;
  Project2: Object;
}

export default function Home() {
  //Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentSlide, setCurrentSlide] = useState(0);

  //Project
  const [projectDetails, setProjectDetails] = useState<ProjectData | null>(
    null
  );
  useEffect(() => {
    setProjectDetails(data);
  }, []);

  if (!projectDetails) {
    return null; // or a loading state
  }

  //Slider
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : Object.keys(projectDetails).length - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < Object.keys(projectDetails).length - 1 ? prevSlide + 1 : 0
    );
  };

  const renderCurrentProjectCard = () => {
    const projectKeys = Object.keys(projectDetails);
    const currentProjectKey = projectKeys[currentSlide];
    const currentProjectData =
      projectDetails[currentProjectKey as keyof ProjectData];

    return <ProjectCard data={currentProjectData} />;
  };

  return (
    <div className="max-w-screen p-8 pb-0 sm:p-14 sm:pb-0">
      <div className="grid grid-cols-12 gap-5 sm:gap-10">
        {/* Image Card */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Card className="rounded-3xl h-[300px] md:h-[350px] lg:h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="w-full h-full object-cover"
              src="/Photo.jpg"
            />
            <CardFooter className="p-0 backdrop-filter backdrop-blur-lg bg-opacity-30 before:bg-white/10 border-white/20 border-1 py-2 absolute rounded-full bottom-2 w-11/12 place-self-center shadow-small z-10">
              <div className="w-full flex flex-row justify-evenly items-center">
                <Button
                  color="primary"
                  radius="full"
                  startContent={<MailIcon />}
                  onPress={onOpen}
                >
                  Contact
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ContactModal />
                      </>
                    )}
                  </ModalContent>
                </Modal>
                <a
                  href="https://drive.google.com/file/d/1omEgF8azJFpf8YmfVwD23B8LdpzqKPzA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-xs inline-flex gap-2 items-center font-bold uppercase">
                    <Button
                      color="primary"
                      radius="full"
                      startContent={<ResumeIcon />}
                    >
                      Resume
                    </Button>
                  </div>
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* About Card */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <Card className="rounded-3xl h-full lg:h-full">
            <About />
          </Card>
        </div>

        {/* Stories Card */}
        <div className="hidden lg:block lg:col-span-4">
          <Card className="rounded-3xl h-[375px] items-center">
            <Stories />
          </Card>
        </div>

        {/* Mobile Education Card */}
        <div className="inline-block col-span-12 md:col-span-12 lg:hidden ">
          <Card className="rounded-3xl h-full items-center justify-center pt-4">
            <CardHeader className="flex-col items-center top-0 absolute left-0 items-start ml-2 pt-0">
              <p className="text-tiny bg-opacity-50 text-white bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-1 px-6 uppercase font-bold inline-flex gap-2">
                <EducationIcon /> Education
              </p>
            </CardHeader>
            <Education />
          </Card>
        </div>

        {/* Project Card */}
        <div className="col-span-12 lg:col-span-7">
          <Card className="rounded-3xl w-full justify-center">
            {renderCurrentProjectCard()}

            <div className="flex flex-row items-center justify-center gap-3">
              <button className="button" onClick={goToPrevSlide}>
                <LeftArrowIcon />
              </button>
              <button className="button" onClick={goToNextSlide}>
                <RightArrowIcon />
              </button>
            </div>
            <br />
          </Card>
        </div>

        {/* Experience Card */}
        <div className="col-span-12 lg:col-span-5">
          <Card className="rounded-3xl h-full p-6 justify-between">
            <Experience />
          </Card>
        </div>

        {/* Skills Card */}
        <div className="col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-8 lg:col-start-1">
          <Card className="rounded-3xl pt-12 pb-6 h-fit sm:h-full">
            <CardHeader className="flex-col items-center top-0 absolute items-start ml-2 pt-0">
              <p className="relative text-tiny bg-opacity-50 text-white bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-1 px-6 uppercase font-bold inline-flex gap-2">
                <SkillIcon /> Skills
              </p>
            </CardHeader>
            <MarqueeComponent />
          </Card>
        </div>

        {/* Leetcode Card */}
        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 lg:col-start-9 ">
          <Card className="rounded-3xl h-full w-full justify-center px-8 pb-4 pt-10">
            <CardHeader className="absolute flex flex-row gap-4 top-0 right-0 w-1/2 pl-8 pr-0 pt-0">
              <a
                href="https://leetcode.com/hardiksharma08/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon2 />{" "}
              </a>
              <Image
                src="/leetcode.png"
                className="w-28 lg:w-48 rounded-none rounded-bl-xl lg:rounded-bl-2xl bg-white"
                alt="Picture of the author"
              />
            </CardHeader>
            <Leetcode />
          </Card>
        </div>

        {/* Footer Card */}
        <div className="col-span-12 ">
          <Card className="rounded-t-3xl rounded-b-none h-full p-10">
            <Footer />
          </Card>
        </div>
      </div>
    </div>
  );
}
