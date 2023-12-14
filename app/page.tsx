"use client";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  MarqueeComponent,
  ThemeSwitch,
  About,
  Stories,
  ProjectCard,
  Leetcode,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="max-w-screen p-8 pb-0 sm:p-14 sm:pb-0">
      <div className="grid grid-cols-12 grid-rows-1 gap-5 sm:gap-10 sm:grid-rows-2">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Card className="rounded-3xl h-fit lg:h-full">
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

        <div className="col-span-12  md:col-span-6 lg:col-span-5">
          <Card className="rounded-3xl h-fit lg:h-full">
            <About />
          </Card>
        </div>

        <div className="hidden lg:block lg:col-span-4 lg:row-span-2">
          <Card className="rounded-3xl h-full items-center sm:h-full">
            <Stories />
          </Card>
        </div>

        <div className="block col-span-12 lg:hidden lg:col-span-4 lg:row-span-2">
          <Card className="rounded-3xl h-fit items-center">
          Hello
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-8 sm:col-start-1 h-full">
          <Card className="rounded-3xl h-full justify-center" isFooterBlurred>
            <CardHeader className="flex-col items-center top-0 absolute sm:absolute items-start ml-2 pt-0">
              <p className="text-tiny bg-opacity-50 text-white/60 bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-2 px-6 uppercase font-bold">
                Projects
              </p>
            </CardHeader>
            <ProjectCard />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-8 lg:col-start-1">
          <Card className="rounded-3xl pt-12 pb-6 h-fit sm:h-full">
            <CardHeader className="flex-col items-center top-0 absolute sm:absolute items-start ml-2 pt-0">
              <p className="relative text-tiny bg-opacity-50 text-white/60 bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-2 px-6 uppercase font-bold">
                💻 Languages & Technologies
              </p>
            </CardHeader>
            <MarqueeComponent />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 lg:col-start-9 ">
          <Card className="rounded-3xl h-full justify-center p-8">
            <CardHeader className="flex-col items-center top-0 absolute sm:absolute pt-0">
              <p className="relative left-10 text-tiny bg-opacity-50 text-white/60 bg-black dark:text-black dark:bg-white dark:bg-opacity-50 rounded-b-xl w-fit shadow-small p-2 px-6 uppercase font-bold">
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
