import { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

type SortModalOptionProps = {
  icon?: React.ElementType;
  sortBy?: string;
  sortOrder?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  sortValues: { sortBy: string; sortOrder: string };
} & PropsWithChildren;

export const SortModalOption = ({
  icon: Icon,
  sortBy,
  sortOrder,
  children,
  onClick,
  sortValues,
}: SortModalOptionProps) => {
  const isActive =
    sortValues.sortBy === sortBy && sortValues.sortOrder === sortOrder;
  return (
    <li
      className={cn(
        "flex items-center gap-2 hover:bg-complementary-100 hover:font-semibold rounded-md p-2 transition-all duration-150",
        { "bg-complementary-100 font-semibold": isActive }
      )}
    >
      {Icon && <Icon pathClassName="fill-black" />}
      <button onClick={onClick} value={sortOrder} name={sortBy}>
        {children}
      </button>
    </li>
  );
};
