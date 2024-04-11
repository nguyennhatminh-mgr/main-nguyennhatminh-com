import React from "react";
import { ISvg } from "./type";

const UserIcon: React.FC<ISvg> = (props) => {
  const { color = "#C06EF3" } = props;

  return (
    <svg
      width="56"
      height="64"
      viewBox="0 0 56 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.2324 29.0579C44.448 28.5352 46.9237 25.3459 46.9306 21.4819C46.9306 17.6739 44.531 14.5165 41.3846 13.9192"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.4746 38.0012C48.5888 38.5399 50.7624 39.8012 50.7624 42.4012C50.7624 44.1906 49.739 45.3532 48.0839 46.0839"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.4 39.1035C19.9915 39.1035 13.6641 40.4022 13.6641 45.5889C13.6641 50.7729 19.9523 52.1089 27.4 52.1089C34.8085 52.1089 41.1336 50.8235 41.1336 45.6342C41.1336 40.4448 34.8477 39.1035 27.4 39.1035Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.3988 31.7013C32.2602 31.7013 36.2019 27.1439 36.2019 21.5173C36.2019 15.8933 32.2602 11.3333 27.3988 11.3333C22.5374 11.3333 18.5958 15.8933 18.5958 21.5173C18.5773 27.1226 22.489 31.6826 27.3343 31.7013H27.3988Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5653 29.0579C10.3474 28.5352 7.8741 25.3459 7.86719 21.4819C7.86719 17.6739 10.2668 14.5165 13.4132 13.9192"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.32104 38.0012C6.20689 38.5399 4.0332 39.8012 4.0332 42.4012C4.0332 44.1906 5.05666 45.3532 6.7117 46.0839"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
