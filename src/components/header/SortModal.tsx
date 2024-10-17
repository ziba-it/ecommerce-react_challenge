import { HeartIcon } from "../icons";

type SortModalProps = {
  isSortModalOpen: boolean;
};

export default function SortModal({ isSortModalOpen }: SortModalProps) {
  return (
    <div
      className={`absolute right-10 top-24 lg:top-28 bg-white py-5 px-3 font-manrope text-sm lg:text-base z-40 w-44 lg:w-52 shadow-md rounded-md font-medium transition-all duration-300  ${
        isSortModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
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
