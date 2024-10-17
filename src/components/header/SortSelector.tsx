import { ArrowIcon } from "../icons";
import { MouseEventHandler } from "react";

type SortSelectorProps = {
  handleOpenSortModal: MouseEventHandler<HTMLButtonElement>;
};

export default function SortSelector({
  handleOpenSortModal,
}: SortSelectorProps) {
  return (
    <div className="relative hidden w-full lg:flex lg:max-w-40">
      <button
        onClick={handleOpenSortModal}
        className="flex items-center w-full border border-primary-100 shadow-sm rounded-md text-primary-300 bg-primary-50 pl-4"
      >
        <p>Sort by</p>
      </button>
      <div className="flex items-center absolute inset-y-0 right-0 pr-4">
        <ArrowIcon pathClassName="fill-primary-300" />
      </div>
    </div>
  );
}
