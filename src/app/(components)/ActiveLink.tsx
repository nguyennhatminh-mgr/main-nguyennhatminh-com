"use client";

import Link, { LinkProps } from "next/link";
import React, { ReactElement } from "react";

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
  href: string;
  as: string;
  className?: string;
};

const ActiveLink = ({
  children,
  href,
  className = "",
  as,
}: ActiveLinkProps) => {
  return (
    <Link className={`cursor-pointer ${className}`} href={href} as={as}>
      {children}
    </Link>
  );
};

export default ActiveLink;
