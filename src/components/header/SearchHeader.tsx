import { MouseEventHandler, useState } from "react";
import { SidebarIcon, SortVerticalIcon } from "../icons";
import { SearchInput } from "./SearchInput";
import { SortModal } from "./SortModal";
import { SortSelector } from "./SortSelector";

type SearchHeaderProps = {
  handleOpenSidebar: MouseEventHandler<HTMLButtonElement>;
  handleChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSort: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sortValues: { sortBy: string; sortOrder: string };
};

export const SearchHeader = ({
  handleOpenSidebar,
  handleChangeSearch,
  handleChangeSort,
  sortValues,
}: SearchHeaderProps) => {
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  const handleOpenSortModal = () => {
    setIsSortModalOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 pt-14 px-8 relative">
      <div className="w-full flex items-center justify-between gap-2">
        <button onClick={handleOpenSidebar}>
          <SidebarIcon
            pathClassName="fill-complementary-600"
            rectClassName="lg:stroke-complementary-600"
          />
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
        </div>
      </div>
      <div className="flex w-full gap-3 px-5 md:px-0  lg:justify-end">
        <SearchInput onChange={handleChangeSearch} />
        <SortSelector handleOpenSortModal={handleOpenSortModal} />
      </div>
      <SortModal
        isOpen={isSortModalOpen}
        handleChangeSort={handleChangeSort}
        sortValues={sortValues}
      />
    </div>
  );
};
