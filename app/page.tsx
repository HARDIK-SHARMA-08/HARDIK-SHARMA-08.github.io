"use client";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { MarqueeComponent } from "@/components/marquee";
import { About } from "@/components/about";
import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { Stories } from "@/components/stories";

export default function Home() {
  return (
    <div className="max-w-screen p-8 sm:p-14">
      <div className="grid grid-cols-12 grid-rows-1 gap-5 sm:gap-10 sm:grid-rows-2">
        <div className="col-span-12 sm:col-span-3">
          <Card className="rounded-3xl h-[300px]">
            <Image
              removeWrapper
              alt="Card background"
              className="w-full h-full object-cover"
              src="/Photo.jpg"
            />
            <CardFooter className="p-0 backdrop-filter backdrop-blur-lg bg-opacity-30 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-3xl rounded-3xl bottom-1 w-11/12 place-self-center shadow-small  z-10">
              <Switch
                defaultSelected
                size="lg"
                color="success"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
              />
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-5">
          <Card className="rounded-3xl h-[300px]">
            <About />
          </Card>
        </div>

        <div className="col-span-12 row-span-1 sm:col-span-4 sm:row-span-2">
          <Card className="rounded-3xl h-full sm:h-full">
            <Stories />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-8 sm:col-start-1">
          <Card className="rounded-3xl h-[175px] sm:h-full">
            <CardHeader className="flex-col items-center absolute sm:absolute items-start ml-2 pt-0">
              <p className="backdrop-filter backdrop-blur-lg bg-opacity-50 text-tiny text-black bg-white rounded-b-xl bottom-1 w-fit shadow-small p-2 px-4 uppercase font-bold">
                💻 Languages & Technologies
              </p>
            </CardHeader>
            <MarqueeComponent />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-5">
          <Card className="rounded-3xl h-[300px]" isFooterBlurred>
            <CardHeader className="rounded-3xl flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="w-full h-full object-cover"
              src="/images/card-example-6.jpeg"
            />
            <CardFooter className="bg-white/30 border-t-1 border-zinc-100/50 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-7">
          <Card className="rounded-3xl h-[300px]" isFooterBlurred>
            <CardHeader className="flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="w-full h-full object-cover"
              src="/images/card-example-5.jpeg"
            />
            <CardFooter className="bg-black/40 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good nights sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
