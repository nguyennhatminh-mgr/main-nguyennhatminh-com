import React from "react";
import { ISvg } from "./type";

const DownloadIcon: React.FC<ISvg> = (props) => {
  const { color = "#FDBA09" } = props;

  return (
    <svg
      width="56"
      height="64"
      viewBox="0 0 56 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.9432 41.1628L27.9432 9.05347"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.666 33.3555L27.9444 41.1635L21.2228 33.3555"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.6231 21.6746H40.7737C45.4646 21.6746 49.2656 26.0719 49.2656 31.5012L49.2656 44.5252C49.2656 49.9386 45.4738 54.3252 40.7945 54.3252L15.1159 54.3252C10.4251 54.3252 6.62174 49.9252 6.62174 44.4986L6.62174 31.4719C6.62174 26.0612 10.4159 21.6746 15.0929 21.6746H17.2643"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
