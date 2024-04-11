import Link from "next/link";
import React from "react";

type LinkItemProps = {
  children: React.ReactNode;
  href: string;
};

const LinkItem: React.FC<LinkItemProps> = (props) => {
  const { children, href } = props;

  return (
    <Link href={href} className="hover:text-primary">
      {children}
    </Link>
  );
};

export default LinkItem;
