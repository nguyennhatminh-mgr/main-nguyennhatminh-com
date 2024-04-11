import React from "react";

type MetricItemProps = {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
};

const MetricItem: React.FC<MetricItemProps> = (props) => {
  const { icon, color, title, description } = props;

  return (
    <div className="flex items-center gap-8 w-[294px]">
      <div
        style={{ backgroundColor: color }}
        className="w-32 h-32 rounded-[40px] flex items-center justify-center"
      >
        {icon}
      </div>
      <div>
        <h2 className="font-semibold text-[48px]">{title}</h2>
        <p className="text-[#5E587A] text-lg">{description}</p>
      </div>
    </div>
  );
};

export default MetricItem;
