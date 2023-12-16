"use client";
import { Image } from "@nextui-org/image";
import Marquee from "react-fast-marquee";

export const MarqueeComponent = () => {
  return (
    <Marquee pauseOnHover className="h-full">
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/cplusplus/"
        />
        <div className="text-center text-md pt-2 text-gray-500">C++</div>
      </div>
      <div className="h-full w-full px-4">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/python/"
        />
        <div className="text-center text-md pt-2 text-gray-500">Phyton</div>
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/javascript/"
        />
        <div className="text-center text-md pt-2 text-gray-500">Javascript</div>
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/react/"
        />
        <div className="text-center text-md pt-2 text-gray-500">ReactJS</div>
      </div>
      <div className="h-full w-full px-4 hidden dark:block">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/nextdotjs/000/fff"
        />
        <div className="text-center text-md pt-2 text-gray-500">NextJS</div>
      </div>
      <div className="h-full w-full px-4 block dark:hidden">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/nextdotjs/"
        />
        <div className="text-center text-md pt-2 text-gray-500">NextJS</div>
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/nodedotjs/"
        />
        <div className="text-center text-md pt-2 text-gray-500">NodeJS</div>
      </div>
      <div className="h-full w-full px-4 hidden dark:block">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/express/fff"
        />
        <div className="text-center text-md pt-2 text-gray-500">Express</div>
      </div>
      <div className="h-full w-full px-4 block dark:hidden">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/express/"
        />
        <div className="text-center text-md pt-2 text-gray-500">Express</div>
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/mongodb/"
        />
        <div className="text-center text-md pt-2 text-gray-500">MongoDB</div>
      </div>
    </Marquee>
  );
};
