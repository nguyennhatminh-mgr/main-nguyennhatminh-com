import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface IProjectItemProps {
  imageSource: string | StaticImageData;
  text: string;
}

const ProjectItem: React.FC<IProjectItemProps> = (props) => {
  const { imageSource, text } = props;

  return (
    <div className="bg-jacarta p-4 rounded-2xl mb-6 xl:mb-0">
      <div className="flex justify-center">
        <Image src={imageSource} alt="project item" />
      </div>
      <h4 className="text-base text-white my-4 text-center">{text}</h4>
    </div>
  );
};

export default ProjectItem;
