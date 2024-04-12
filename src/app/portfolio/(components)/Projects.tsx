import React from "react";
import ProjectItem from "./ProjectItem";
import PortfolioImage1 from "@/images/portfolio/portfolio1.jpg";
import PortfolioImage2 from "@/images/portfolio/portfolio2.jpg";
import PortfolioImage3 from "@/images/portfolio/portfolio3.jpg";
import PortfolioImage4 from "@/images/portfolio/portfolio4.jpg";
import PortfolioImage5 from "@/images/portfolio/portfolio5.png";
import PortfolioImage6 from "@/images/portfolio/portfolio6.jpg";

const Projects = () => {
  return (
    <div className="mb-[100px]">
      <h1
        id="projects"
        className="text-primary text-2xl text-center mb-12 font-semibold"
      >
        Projects
      </h1>

      <div className="xl:flex gap-3 mb-6">
        <ProjectItem
          imageSource={PortfolioImage1}
          text="Tamara - Static website"
        />
        <ProjectItem imageSource={PortfolioImage2} text="Financial" />
        <ProjectItem imageSource={PortfolioImage3} text="Telehealth" />
      </div>

      <div className="xl:flex gap-3">
        <ProjectItem imageSource={PortfolioImage4} text="Freights21" />
        <ProjectItem imageSource={PortfolioImage5} text="Faty" />
        <ProjectItem imageSource={PortfolioImage6} text="Boon" />
      </div>
    </div>
  );
};

export default Projects;
