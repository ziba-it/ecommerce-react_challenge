import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { Loader } from "../icons";
import { cn } from "../../utils/cn";

type ButtonProps = {
  variant: "primary" | "loading";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  onClick,
  variant,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-complementary-600 font-manrope text-primary-50 font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-150 active:brightness-90"
    >
      {children}

      <Loader
        circleClassName="stroke-primary-50"
        pathClassName="fill-complementary-600"
        className={cn("size-0 animate-spin transition-all duration-300", {
          "size-6": variant === "loading",
        })}
      />
    </button>
  );
};
