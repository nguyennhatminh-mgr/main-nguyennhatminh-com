import React from "react";
import {
  HomeIcon,
  UserIcon,
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import ActiveLink from "@/app/(components)/ActiveLink";

const HeaderBar = () => {
  return (
    <div className="bg-mirageLight fixed bottom-4 p-3 left-1/2 transform -translate-x-1/2 rounded-2xl z-20">
      <div className="flex gap-6 items-center">
        <ActiveLink href="#" as="#">
          <HomeIcon className="w-6 h-6 text-primary" />
        </ActiveLink>
        <ActiveLink href="#about-me" as="#about-me">
          <UserIcon className="w-6 h-6 text-primary" />
        </ActiveLink>
        <ActiveLink href="#my-experience" as="#my-experience">
          <AcademicCapIcon className="w-6 h-6 text-primary" />
        </ActiveLink>
        <ActiveLink href="#projects" as="#projects">
          <HeartIcon className="w-6 h-6 text-primary" />
        </ActiveLink>
        <ActiveLink href="#contact-me" as="#contact-me">
          <AdjustmentsHorizontalIcon className="w-6 h-6 text-primary" />
        </ActiveLink>
      </div>
    </div>
  );
};

export default HeaderBar;
