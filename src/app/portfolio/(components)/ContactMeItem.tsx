import React, { ReactNode } from "react";

interface IContactMeItemProps {
  icon: ReactNode;
  title: string;
  value: string;
  children: ReactNode;
}

const ContactMeItem: React.FC<IContactMeItemProps> = (props) => {
  const { icon, title, value, children } = props;

  return (
    <div className="p-4 rounded-2xl bg-jacarta w-full mb-6 xl:mb-0">
      <div className="flex justify-center mb-2">{icon}</div>
      <h5 className="text-white text-base text-center mb-2">{title}</h5>
      <p className="text-white text-sm text-center mb-2">{value}</p>
      {children}
    </div>
  );
};

export default ContactMeItem;
