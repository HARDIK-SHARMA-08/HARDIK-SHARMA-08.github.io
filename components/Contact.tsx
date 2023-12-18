import React from "react";
import { ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { useForm, ValidationError } from "@formspree/react";
import {
  MailIcon,
  LinkedInIcon,
  InstagramIcon,
  GithubIcon,
  TwitterIcon,
  BehanceIcon,
} from "./icons";

export const ContactModal = () => {
  const [state, handleSubmit] = useForm("xwkgelag");
  if (state.succeeded) {
    return (
      <>
        <div className="p-8">
          <p>Thanks for connecting!</p>
        </div>
      </>
    );
  }
  return (
    <div>
      {" "}
      <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">
        Lets Connect
      </ModalHeader>
      <ModalBody>
        <div className="flex flex-col gap-6">
          <a
            href="mailto:hardiksharma602@gmail.com"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <MailIcon /> hardiksharma602@gmail.com
          </a>
          <div className="flex flex-row space-x-8 items-center justify-start">
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
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            className="py-4"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Textarea
            id="message"
            name="message"
            label="Message"
            labelPlacement="outside"
            placeholder="Enter your Message"
            className="max-w-md pb-4"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />{" "}
          <Button type="submit" disabled={state.submitting} color="primary">
            Submit
          </Button>
        </form>
      </ModalBody>
      <ModalFooter> </ModalFooter>
    </div>
  );
};
