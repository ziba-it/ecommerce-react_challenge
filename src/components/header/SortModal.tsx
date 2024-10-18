import { HeartIcon } from "../icons";
import { cn } from "../../utils/cn";
import { SortModalOption } from "./SortModalOption";

type SortModalProps = {
  isOpen: boolean;
  handleChangeSort: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sortValues: { sortBy: string; sortOrder: string };
};

const sortOptions = [
  { icon: HeartIcon, label: "My favorites", sortBy: "", sortOrder: "" },
  { label: "Price - from low to high", sortBy: "price", sortOrder: "asc" },
  { label: "Price - from high to low", sortBy: "price", sortOrder: "desc" },
  { label: "Alphabetical - from A to Z", sortBy: "title", sortOrder: "asc" },
  { label: "Alphabetical - from Z to A", sortBy: "title", sortOrder: "desc" },
];

export const SortModal = ({
  isOpen,
  handleChangeSort,
  sortValues,
}: SortModalProps) => {
  return (
    <div
      className={cn(
        "opacity-0 pointer-events-none max-h-0 overflow-hidden absolute right-8 md:right-10 top-28 md:top-24 lg:top-32 bg-white py-5 px-3 font-manrope text-sm lg:text-base z-20 w-52 lg:w-60 shadow-md rounded-md font-medium transition-all duration-300",
        {
          "opacity-100 pointer-events-auto max-h-60": isOpen,
        }
      )}
    >
      <ul className="flex flex-col">
        {sortOptions.map(({ icon, label, sortBy, sortOrder }) => (
          <SortModalOption
            icon={icon}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onClick={handleChangeSort}
            sortValues={sortValues}
          >
            {label}
          </SortModalOption>
        ))}
      </ul>
    </div>
  );
};
