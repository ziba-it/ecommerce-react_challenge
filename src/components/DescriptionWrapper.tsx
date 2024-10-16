import { ReactNode } from "react";

type DescriptionWrapperProps = {
  children: ReactNode;
};

export default function DescriptionWrapper({
  children,
}: DescriptionWrapperProps) {
  return (
    <p className="line-clamp-2 font-manrope text-primary-600 tracking-wide font-light leading-7 ">
      {children}
    </p>
  );
}
