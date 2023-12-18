import React from "react";
import {
  LinkedInIcon,
  InstagramIcon,
  GithubIcon,
  TwitterIcon,
  BehanceIcon,
} from "./icons";

export const Footer = () => {
  //Function to get current year
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }
  const currentYear = getCurrentYear();

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="flex flex-row space-x-8 items-center justify-between">
        <a href="https://www.linkedin.com/in/hardik-sharma8/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/HARDIK-SHARMA-08">
          <GithubIcon />
        </a>
        <a href="https://twitter.com/Hardik602sharma">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/_h.a.r.d.i.k">
          <InstagramIcon />
        </a>
        <a href="https://www.behance.net/hardiksharma7">
          <BehanceIcon />
        </a>
      </div>
      <hr className="block opacity-50 md:hidden"/>
      <div>
        <p className="w-full text-center text-gray-600">
          Copyright © {currentYear}
        </p>
      </div>
    </div>
  );
};
