import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React from "react";

interface IExperienceItemProps {
  title: string;
  description: string;
}

const ExperienceItem: React.FC<IExperienceItemProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="flex gap-4 items-start">
      <CheckBadgeIcon width={24} className="text-primary" />
      <div>
        <h4 className="text-lg text-white mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
