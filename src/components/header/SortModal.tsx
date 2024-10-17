import { HeartIcon } from "../icons";
import { cn } from "../../utils/cn";

type SortModalProps = {
  isOpen: boolean;
};

export default function SortModal({ isOpen }: SortModalProps) {
  return (
    <div
      className={cn(
        "opacity-0 pointer-events-none max-h-0 overflow-hidden absolute right-10 top-24 lg:top-28 bg-white py-5 px-3 font-manrope text-sm lg:text-base z-20 w-44 lg:w-52 shadow-md rounded-md font-medium transition-all duration-300",
        {
          "opacity-100 pointer-events-auto max-h-40": isOpen,
        }
      )}
    >
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-1">
          <HeartIcon className="size-4" pathClassName="fill-black" />
          <button>My favorites</button>
        </li>
        <li>
          <button>Price - from high to low</button>
        </li>
        <li>
          <button>Price - from low to high</button>
        </li>
        <li>
          <button>Alphabetical order</button>
        </li>
      </ul>
    </div>
  );
}
