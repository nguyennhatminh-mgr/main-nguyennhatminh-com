import Image from "next/image";
import React from "react";
import {
  AcademicCapIcon,
  FolderIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import ContactImage from "@/images/portfolio/contact-img.svg";

import style from "./portfolio.module.css";
import Button from "@/app/(components)/Button";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="mb-8 xl:mb-0">
      <h1
        id="about-me"
        className="text-primary text-2xl text-center mb-12 font-semibold"
      >
        About Me
      </h1>
      <div className="xl:flex gap-12 min-h-[440px]">
        <div className={style.wrapHeaderImage}>
          <Image
            src={ContactImage}
            alt="contact"
            className={style.headerImage}
          />
        </div>
        <div className="xl:w-7/12">
          <div className="xl:flex gap-4 mb-8">
            <div className="bg-jacarta rounded-2xl py-8 flex flex-col items-center xl:w-[200px] mb-6 xl:mb-0">
              <AcademicCapIcon width={24} className="text-primary" />
              <h3 className="text-white text-sm mt-2">Expericence</h3>
              <h3 className="text-gray-400 text-sm mt-2">4+ years working</h3>
            </div>
            <div className="bg-jacarta rounded-2xl py-8 flex flex-col items-center xl:w-[200px] mb-6 xl:mb-0">
              <UsersIcon width={24} className="text-primary" />
              <h3 className="text-white text-sm mt-2">Clients</h3>
              <h3 className="text-gray-400 text-sm mt-2">8+ Worldwide</h3>
            </div>
            <div className="bg-jacarta rounded-2xl py-8 flex flex-col items-center xl:w-[200px] mb-6 xl:mb-0">
              <FolderIcon width={24} className="text-primary" />
              <h3 className="text-white text-sm mt-2">Projects</h3>
              <h3 className="text-gray-400 text-sm mt-2">10+ Completed</h3>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Don&apos;t postpone until tomorrow what we can do today!
          </p>
          <div>
            <Link href="https://www.linkedin.com/in/nhatminhlt/">
              <Button>Let&apos;s start</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
