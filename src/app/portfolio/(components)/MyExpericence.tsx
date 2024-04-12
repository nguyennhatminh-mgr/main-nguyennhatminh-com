import React from "react";
import ExperienceItem from "./ExperienceItem";

const MyExpericence = () => {
  return (
    <div className="mb-[100px]">
      <h1
        id="my-experience"
        className="text-primary text-2xl text-center mb-12 font-semibold"
      >
        My Experience
      </h1>
      <div className="xl:flex gap-10">
        <div className="xl:w-1/2 px-4 py-6 xl:px-12 xl:py-8 mb-6 xl:mb-0 rounded-2xl bg-jacarta">
          <h2 className="text-xl text-center text-primary mb-8">
            Frontend Development
          </h2>
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <ExperienceItem title="HTML/CSS" description="Advanced" />
            </div>
            <div className="w-1/2">
              <ExperienceItem title="JavaScript" description="Advanced" />
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <ExperienceItem title="TypeScript" description="Advanced" />
            </div>
            <div className="w-1/2">
              <ExperienceItem title="React" description="Advanced" />
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <ExperienceItem title="NextJs" description="Advanced" />
            </div>
            <div className="w-1/2">
              <ExperienceItem title="TailwindCSS" description="Advanced" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <ExperienceItem
                title="Jest/React Testing"
                description="Advanced"
              />
            </div>
            <div className="w-1/2">
              <ExperienceItem title="Vue" description="Basic" />
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 px-4 py-6 xl:px-12 xl:py-8 rounded-2xl bg-jacarta">
          <h2 className="text-xl text-center text-primary mb-8">
            Backend Development
          </h2>
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <ExperienceItem title="NodeJs" description="Experienced" />
            </div>
            <div className="w-1/2">
              <ExperienceItem title="NestJs" description="Experienced" />
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <ExperienceItem title="PostgreSQL" description="Experienced" />
            </div>
            <div className="w-1/2">
              <ExperienceItem title="Sequelize" description="Experienced" />
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <ExperienceItem title="Jest" description="Experienced" />
            </div>
            <div className="w-1/2">
              <ExperienceItem title="Python" description="Basic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExpericence;
