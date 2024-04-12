import React from "react";

import BackgroundImage from "@/images/portfolio/banner-bg.png";
import Introduction from "./Introduction";
import HeaderBar from "./HeaderBar";
import AboutMe from "./AboutMe";
import MyExpericence from "./MyExpericence";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
      className="min-h-screen"
    >
      <div className="xl:w-[1200px] mx-auto pt-8 px-3 lg:px-12 xl:px-0">
        <HeaderBar />
        <Introduction />
        <AboutMe />
        <MyExpericence />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
