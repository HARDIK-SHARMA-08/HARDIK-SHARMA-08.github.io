"use client";
import { Image } from "@nextui-org/image";
import Marquee from "react-fast-marquee";

export const MarqueeComponent = () => {
  return (
    <Marquee pauseOnHover gradient gradientColor="black" className="h-full">
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="w-24 h-24 object-scale-down"
          src="https://cdn.simpleicons.org/cplusplus/"
        />
      </div>
      <div className="h-full w-full px-4">
        <Image
          removeWrapper
          alt="Card background"
          className="w-24 h-24 object-scale-down"
          src="https://cdn.simpleicons.org/python/"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="w-24 h-24 object-scale-down"
          src="https://cdn.simpleicons.org/javascript/"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="w-24 h-24 object-scale-down"
          src="https://cdn.simpleicons.org/react/"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="w-24 h-24 object-scale-down"
          src="https://cdn.simpleicons.org/nextdotjs/000/fff"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="w-24 h-24 object-scale-down"
          src="https://cdn.simpleicons.org/nodedotjs/"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="w-24 h-24 object-scale-down"
          src="https://cdn.simpleicons.org/express/fff"
        />
      </div>
      <div className="h-full w-full px-4 ">
        <Image
          removeWrapper
          alt="Card background"
          className="w-24 h-24 object-scale-down"
          src="https://cdn.simpleicons.org/mongodb/"
        />
      </div>
    </Marquee>
  );
};
