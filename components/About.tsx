"use client";
import { Image } from "@nextui-org/image";
import { GithubIcon } from "./icons";

export const About = () => {
  return (
    <>
      {" "}
      <div className="rounded-lg shadow-xl bg-white text-sm sm:text-lg text-black dark:bg-gray-900 dark:text-white h-fit w-full sm:h-full">
        <div className="border-b border-gray-800 px-8 py-3">
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-700 dark:text-yellow-300" />
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
        </div>
        <div className="px-8 py-6">
          <p>
            <em className="text-blue-800 dark:text-blue-400">const</em>{" "}
            <span className="text-green-800 dark:text-green-400">aboutMe</span>{" "}
            <span className="text-pink-500">=</span>{" "}
            <em className="text-blue-800 dark:text-blue-400">function</em>( ){" "}
            {"{"}
          </p>
          <p>
            &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
            <span className="text-yellow-700 dark:text-yellow-300">
              {`'`}Hardik Sharma{`'`}
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
            <span className="text-yellow-700 dark:text-yellow-300">
              {`'`}fullstack-developer{`'`}
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;linkedin:{" "}
            <span className="text-yellow-700 dark:text-yellow-300">
              {`'`}
              <a
                href="https://www.linkedin.com/in/hardik-sharma8/"
                target="_blank"
                className="text-yellow-700 dark:text-yellow-300 underline hover:font-medium focus:border-none"
              >
                linkedin/hardik-sharma8/
              </a>
              {`'`}
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;github:{" "}
            <span className="text-yellow-700 dark:text-yellow-300">
              {`'`}
              <a
                href="https://github.com/HARDIK-SHARMA-08"
                target="_blank"
                className="text-yellow-700 dark:text-yellow-300 underline hover:font-medium focus:border-none"
              >
                github/HARDIK-SHARMA-08
              </a>
              {`'`}
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;twitter:{" "}
            <span className="text-yellow-700 dark:text-yellow-300">
              {`'`}
              <a
                href="https://twitter.com/Hardik602sharma"
                target="_blank"
                className="text-yellow-700 dark:text-yellow-300 underline hover:font-medium focus:border-none"
              >
                twitter/Hardik602sharma
              </a>
              {`'`}
            </span>
            ,
          </p>
          <p>&nbsp;&nbsp;{"}"}</p>
          <p>{"}"}</p>
        </div>
      </div>
    </>
  );
};
