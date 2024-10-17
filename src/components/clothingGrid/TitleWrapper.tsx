import { ReactNode } from "react";

type TitleWrapperProps = {
  children: ReactNode;
};

export default function TitleWrapper({ children }: TitleWrapperProps) {
  return (
    <h2 className="font-ubuntu font-normal text-2xl leading-7 text-primary-900">
      {children}
    </h2>
  );
}
