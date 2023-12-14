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
      </div>
      <div className="h-full w-full px-4">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/python/"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/javascript/"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/react/"
        />
      </div>
      <div className="h-full w-full px-4 hidden dark:block">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/nextdotjs/000/fff"
        />
      </div>
      <div className="h-full w-full px-4 block dark:hidden">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/nextdotjs/"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/nodedotjs/"
        />
      </div>
      <div className="h-full w-full px-4 hidden dark:block">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/express/fff"
        />
      </div>
      <div className="h-full w-full px-4 block dark:hidden">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/express/"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="h-16 lg:h-20 object-scale-down"
          src="https://cdn.simpleicons.org/mongodb/"
        />
      </div>
    </Marquee>
  );
};
