"use client";
import { Chip } from "@nextui-org/chip";
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
        <div className="h-full w-full px-4">
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

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            />{" "}
            <div className="text-md pt-2 text-gray-500">Java</div>
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

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/html5/"
            />
            <div className="text-md pt-2 text-gray-500">HTML5</div>
          </div>
        </div>

        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/css3/"
            />
            <div className="text-md pt-2 text-gray-500">CSS3</div>
          </div>
        </div>

        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/tailwindcss/"
            />
            <div className="text-md pt-2 text-gray-500">Tailwind</div>
          </div>
        </div>

        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/bootstrap/"
            />
            <div className="text-md pt-2 text-gray-500">Bootstrap</div>
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
              src="https://cdn.simpleicons.org/reactrouter"
            />
            <div className="text-md pt-2 text-gray-500">ReactRouter</div>
          </div>
        </div>

        <div className="h-full w-full px-4 ">
          <div className="flex flex-col items-center justify-center">
            <Image
              removeWrapper
              alt="Card background"
              className="h-16 lg:h-20 object-scale-down"
              src="https://cdn.simpleicons.org/redux"
            />
            <div className="text-md pt-2 text-gray-500">Redux</div>
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

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                removeWrapper
                alt="Card background"
                className="h-16 lg:h-20 object-scale-down"
                src="https://cdn.simpleicons.org/postgresql/"
              />
            </div>
            <div className="text-md pt-2 text-gray-500">PostgresSQL</div>
          </div>
        </div>

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                removeWrapper
                alt="Card background"
                className="h-16 lg:h-20 object-scale-down"
                src="https://cdn.simpleicons.org/mysql/"
              />
            </div>
            <div className="text-md pt-2 text-gray-500">MySQL</div>
          </div>
        </div>

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                removeWrapper
                alt="Card background"
                className="h-16 lg:h-20 object-scale-down"
                src="https://cdn.simpleicons.org/adobephotoshop/"
              />
            </div>
            <div className="text-md pt-2 text-gray-500">Photoshop</div>
          </div>
        </div>

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                removeWrapper
                alt="Card background"
                className="h-16 lg:h-20 object-scale-down"
                src="https://cdn.simpleicons.org/adobepremierepro/"
              />
            </div>
            <div className="text-md pt-2 text-gray-500">PremierePro</div>
          </div>
        </div>

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                removeWrapper
                alt="Card background"
                className="h-16 lg:h-20 object-scale-down"
                src="https://cdn.simpleicons.org/adobeillustrator/"
              />
            </div>
            <div className="text-md pt-2 text-gray-500">Illustrator</div>
          </div>
        </div>

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                removeWrapper
                alt="Card background"
                className="h-16 lg:h-20 object-scale-down"
                src="https://cdn.simpleicons.org/figma/"
              />
            </div>
            <div className="text-md pt-2 text-gray-500">Figma</div>
          </div>
        </div>

        <div className="h-full w-full px-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                removeWrapper
                alt="Card background"
                className="h-16 lg:h-20 object-scale-down"
                src="https://cdn.simpleicons.org/git/"
              />
            </div>
            <div className="text-md pt-2 text-gray-500">Git</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
