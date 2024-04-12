import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="xl:w-[1200px] mx-auto py-8 px-3 lg:px-12 xl:px-0">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
        </div>
        <div className="flex justify-center mb-12">
          <div className="xl:flex gap-6">
            <a className="text-jacarta block" href="#">
              Introduction
            </a>
            <a className="text-jacarta block" href="#about-me">
              About me
            </a>
            <a className="text-jacarta block" href="#my-experience">
              My Experience
            </a>
            <a className="text-jacarta block" href="#projects">
              Projects
            </a>
            <a className="text-jacarta block" href="#contact-me">
              Contact me
            </a>
          </div>
        </div>
        <p className="text-jacarta text-right">
          Copyright 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
