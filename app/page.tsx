"use client";
import data from "@/app/ProjectData.json";
import { About } from "@/components/About";
import { ContactModal } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Leetcode } from "@/components/Leetcode";
import { MarqueeComponent } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { Stories } from "@/components/Stories";
import {
  EducationIcon,
  HandIcon,
  LinkIcon2,
  MailIcon,
  MouseIcon,
  MouseLeftIcon,
  MouseRightIcon,
  ResumeIcon,
  SkillIcon
} from "@/components/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { title } from "process";
import { useEffect, useState } from "react";



export default function Home() {
  //Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectDetails, setProjectDetails] = useState<any>(
    null
  );

  //Project
  useEffect(() => {
    setProjectDetails(data);
  }, []);


  return (
    <div className="max-w-screen p-8 pb-0 sm:p-14 sm:pb-0">
      <div className="grid grid-cols-12 gap-5 sm:gap-10">
        {/* Image Card */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3" id="here">
          <FollowerPointerCard
            title={
              <div className="bg-white w-fit h-fit text-black p-2 rounded-3xl absolute m-0">
                Hardik Sharma
              </div>
            }
          >
            <Card className="rounded-3xl h-[300px] md:h-[350px] lg:h-full">
              <Image
                removeWrapper
                alt="Card background"
                className="w-full h-full object-cover hidden lg:flex"
                src="/Photo.jpg"
              />
              <Image
                removeWrapper
                alt="Card background"
                className="w-full h-full object-cover flex lg:hidden"
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
          </FollowerPointerCard>
        </div>

        {/* About Card */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <Card className="rounded-3xl h-full lg:h-full">
            <About />
          </Card>
        </div>

        {/* Stories Card */}
        <div className="hidden lg:col-span-4">
          <Card className="rounded-3xl h-[375px] items-center">
            <Stories />
          </Card>
        </div>

        {/* Mobile Education Card */}
        <div className="col-span-12 md:col-span-12 lg:col-span-4 ">
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
        <div className="col-span-12 h-[500px] md:h-[400px] lg:col-span-7">
          <Carousel>
            <CarouselContent>
              {projectDetails?.map((data: any, index: any) => (
                <CarouselItem key={index}>
                  <ProjectCard data={data} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
            <CardHeader className="absolute flex flex-row items-center justify-between top-0 gap-6 items-start ml-2 pt-0">
              <div className="relative text-tiny bg-opacity-50 text-white bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-1 px-6 uppercase font-bold inline-flex gap-2">
                <SkillIcon /> Skills
              </div>
              <div className="relative flex flex-row gap-1 top-4 right-4 hidden lg:flex">
                <div className="animate-wiggleLeft">
                  <MouseLeftIcon />
                </div>
                <div className="animate-pulse">
                  <MouseIcon />
                </div>
                <div className="animate-wiggleRight">
                  <MouseRightIcon />
                </div>
              </div>
              <div className="relative flex flex-row gap-1 top-3 right-3 animate-wiggle flex lg:hidden">
                <div className="animate-wiggleLeft">
                  <MouseLeftIcon />
                </div>
                <div className="animate-pulse">
                  <HandIcon />
                </div>
                <div className="animate-wiggleRight">
                  <MouseRightIcon />
                </div>
              </div>
            </CardHeader>
            <MarqueeComponent />
          </Card>
        </div>

        {/* Leetcode Card */}
        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 lg:col-start-9 ">
          <Card className="rounded-3xl h-full w-full justify-between">
            <CardHeader className="aboslute flex flex-row-reverse gap-4 items-center justify-center top-0 w-full bg-white p-0">
              <a
                href="https://leetcode.com/hardiksharma08/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon2 />{" "}
              </a>
              <Image
                src="/leetcode.png"
                className="w-28 rounded-none rounded-bl-xl lg:rounded-bl-2xl"
                alt="Picture of the author"
              />
            </CardHeader>
            <div className="py-6">
              <Leetcode />
            </div>
          </Card>
        </div>

        {/* Footer Card */}
        <div className="col-span-12 ">
          <Card className="rounded-t-3xl rounded-b-none h-full p-10">
            <Footer />
          </Card>
        </div>
      </div>
    </div >
  );
}
