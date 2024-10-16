import { MouseEventHandler, useState } from "react";
import { MobileMenuIcon, SortVerticalIcon } from "./icons";
import SearchInput from "./SearchInput";
import SortModal from "./SortModal";
import SortSelector from "./SortSelector";

type SearchHeaderProps = {
  handleOpenSidebar: MouseEventHandler<HTMLButtonElement>;
};

export default function SearchHeader({ handleOpenSidebar }: SearchHeaderProps) {
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  const handleOpenSortModal = () => {
    setIsSortModalOpen(!isSortModalOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 pt-14 px-8">
      <div className="w-full flex items-center justify-between gap-2">
        <button onClick={handleOpenSidebar}>
          <MobileMenuIcon pathClassName="fill-complementary-600" />
        </button>
        <div className="w-full flex justify-center md:justify-start md:pl-2">
          <h1 className="text-3xl md:text-4xl font-medium">
            Find what you need
          </h1>
        </div>
        <div className="relative lg:hidden">
          <button onClick={handleOpenSortModal}>
            <SortVerticalIcon pathClassName="fill-complementary-600" />
          </button>
          <SortModal isSortModalOpen={isSortModalOpen} />
        </div>
      </div>
      <div className="flex w-full gap-3 px-5 md:px-0  lg:justify-end">
        <SearchInput />
        <SortSelector />
      </div>
    </div>
  );
}
