import React, { useMemo } from "react";

type ButtonProps = {
  variant?: "primary" | "outline" | "no-border";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "primary", children } = props;

  const buttonClassName = useMemo(() => {
    const defaultClassName = "cursor-pointer";
    if (variant === "outline") {
      return `${defaultClassName} border border-primary bg-white text-primary rounded-[15px] px-8 py-4`;
    }
    if (variant === "no-border") {
      return `${defaultClassName} border-none text-primary font-semibold`;
    }
    return `${defaultClassName} border-none bg-primary text-white rounded-[15px] px-8 py-4`;
  }, [variant]);

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
