import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import LinkItem from "./LinkItem";

const Header = () => {
  return (
    <header className="w-[1165px] mx-auto py-[42px] flex justify-between items-center">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="h-auto"
        />
        <p className="text-xl font-semibold">Minh&apos;s group</p>
      </Link>
      <div className="flex items-center gap-6">
        <LinkItem href="/home">Home</LinkItem>
        <LinkItem href="/home">About us</LinkItem>
        <LinkItem href="/home">Services</LinkItem>
        <LinkItem href="/portfolio">Portfolio</LinkItem>
      </div>
      <div className="flex items-center gap-8">
        <Button variant="no-border">Login</Button>
        <Button variant="outline">Sign up</Button>
      </div>
    </header>
  );
};

export default Header;
