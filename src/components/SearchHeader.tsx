import { MouseEventHandler, useState } from "react";
import { MobileMenuIcon, SortVerticalIcon } from "./icons";
import SearchInput from "./SearchInput";
import SortModal from "./SortModal";

type SearchHeaderProps = {
  handleOpen: MouseEventHandler<HTMLButtonElement>;
};

export default function SearchHeader({ handleOpen }: SearchHeaderProps) {
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  const handleOpenSortModal = () => {
    setIsSortModalOpen(!isSortModalOpen);
  };

  return (
    <div className="flex flex-col items-center gap-8 pt-14 px-8">
      <div className="w-full flex items-center justify-between gap-2">
        <button onClick={handleOpen}>
          <MobileMenuIcon pathClassName="fill-complementary-600" />
        </button>
        <h1 className="text-3xl font-medium">Find what you need</h1>
        <div className="relative">
          <button onClick={handleOpenSortModal}>
            <SortVerticalIcon pathClassName="fill-complementary-600" />
          </button>
          <SortModal isSortModalOpen={isSortModalOpen} />
        </div>
      </div>
      <div className="w-full px-5">
        <SearchInput />
      </div>
    </div>
  );
}
