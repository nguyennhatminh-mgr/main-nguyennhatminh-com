import React from "react";
import Image from "next/image";

import Button from "@/app/(components)/Button";
import HeaderImage from "@/images/portfolio/header-img.svg";
import LinkedinIcon from "@/icons/LinkedinIcon";
import GithubIcon from "@/icons/GithubIcon";

import style from "./portfolio.module.css";
import Link from "next/link";
import { relValue } from "@/constants/seo";

const Introduction = () => {
  return (
    <div className="xl:flex items-center justify-between gap-4 min-h-[500px] mb-8">
      <div className="xl:w-7/12">
        <h3 className="text-white text-xl mb-1">Hello I&apos;m</h3>
        <h1 className="text-white text-3xl mb-2">Nguyen Nhat Minh</h1>
        <h3 className="text-gray-400 text-xl mb-4">Full stack developer</h3>
        <div className="flex gap-3 mb-4">
          <Button>Download CV</Button>
          <Link
            href="https://www.linkedin.com/in/nhatminhlt/"
            target="_blank"
            rel={relValue}
          >
            <Button variant="outline">Let&apos;s talk</Button>
          </Link>
        </div>
        <p className="text-gray-400 my-4 xl:w-3/4">
          As a software developer, I am always improving and learning technology
          every day. During the product development process, I always put my
          enthusiasm, ability, and determination into the product, I always
          learn how to apply the best solutions, making the product the best it
          can be.
        </p>
        <div className="flex items-center gap-2">
          <a
            rel={relValue}
            href="https://www.linkedin.com/in/nhatminhlt/"
            className="text-primary"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
          <a
            rel={relValue}
            href="https://github.com/nguyennhatminh-mgr"
            className="text-primary"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className={style.wrapHeaderImage}>
        <Image src={HeaderImage} alt="header" className={style.headerImage} />
      </div>
    </div>
  );
};

export default Introduction;
