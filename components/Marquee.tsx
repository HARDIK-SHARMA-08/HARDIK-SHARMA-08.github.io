"use client";
import { Image } from "@nextui-org/image";
import Slider from "react-slick";

export const MarqueeComponent = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 7,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <div className="cursor-ew-resize">
      <Slider {...settings}>
        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/cplusplus/"
            />{" "}
            <div className="text-md pt-2 text-gray-500">C++</div>
          </div>
        </div>
        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/python/"
            />
            <div className="text-md pt-2 text-gray-500">Phyton</div>
          </div>
        </div>
        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/javascript/"
            />
            <div className="text-md pt-2 text-gray-500">Javascript</div>
          </div>
        </div>
        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/react/"
            />
            <div className="text-md pt-2 text-gray-500">ReactJS</div>
          </div>
        </div>
        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/nextdotjs/000/fff"
            />
            <div className="text-md pt-2 text-gray-500">NextJS</div>
          </div>
        </div>
        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/nodedotjs/"
            />
            <div className="text-md pt-2 text-gray-500 ">NodeJS</div>
          </div>
        </div>
        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/express/000/fff"
            />
            <div className="text-md pt-2 text-gray-500 ">ExpressJS</div>
          </div>
        </div>
        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                removeWrapper
                alt="Card background"
                className="h-16 lg:h-20 object-scale-down"
                src="https://cdn.simpleicons.org/mongodb/"
              />
            </div>
            <div className="text-md pt-2 text-gray-500">MongoDB</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
