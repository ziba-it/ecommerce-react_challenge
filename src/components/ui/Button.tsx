import { PropsWithChildren, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant: "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className="bg-complementary-600 font-manrope text-primary-50 font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-150">
      {children}
    </button>
  );
};
