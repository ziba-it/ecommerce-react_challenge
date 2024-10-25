import { ArrowIcon } from "../icons";
import { MouseEventHandler, PropsWithChildren } from "react";

type SortSelectorProps = {
  handleOpenSortModal: MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren;

export const SortSelector = ({
  handleOpenSortModal,
  children,
}: SortSelectorProps) => {
  return (
    <div className="relative hidden w-full lg:flex lg:max-w-48">
      <button
        onClick={handleOpenSortModal}
        className="flex items-center w-full border border-primary-100 shadow-sm rounded-md text-primary-300 bg-primary-50 pl-4"
      >
        {children}
      </button>
      <div className="flex items-center absolute inset-y-0 right-0 pr-4">
        <ArrowIcon pathClassName="fill-primary-300" />
      </div>
    </div>
  );
};
