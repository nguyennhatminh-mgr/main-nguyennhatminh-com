import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import ContactMeItem from "./ContactMeItem";
import LinkedinIcon from "@/icons/LinkedinIcon";
import GithubIcon from "@/icons/GithubIcon";

const ContactMe = () => {
  return (
    <div className="mb-[100px]">
      <h1
        id="contact-me"
        className="text-primary text-2xl text-center mb-12 font-semibold"
      >
        Contact me
      </h1>

      <div className="xl:flex gap-3 justify-between">
        <ContactMeItem
          icon={<EnvelopeIcon className="w-7 h-7 text-primary" />}
          title="Email"
          value="nguyennhatminh12a1@gmail.com"
        >
          <div className="flex justify-center">
            <a
              href="mailto:nguyennhatminh12a1@gmail.com"
              className="text-primary"
            >
              Send a message
            </a>
          </div>
        </ContactMeItem>
        <ContactMeItem
          icon={<LinkedinIcon />}
          title="Linkedin"
          value="Nguyen Nhat Minh"
        >
          <div className="flex justify-center">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/nhatminhlt/"
              className="text-primary"
              target="_blank"
            >
              Send a message
            </a>
          </div>
        </ContactMeItem>
        <ContactMeItem
          icon={<GithubIcon />}
          title="Github"
          value="nguyennhatminh-mgr"
        >
          <div className="flex justify-center">
            <a
              rel="noreferrer"
              href="https://github.com/nguyennhatminh-mgr"
              className="text-primary"
              target="_blank"
            >
              Access github repositories
            </a>
          </div>
        </ContactMeItem>
      </div>
    </div>
  );
};

export default ContactMe;
