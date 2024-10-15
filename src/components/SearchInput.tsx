import { MagnifierIcon } from "./icons";

export default function SearchInput() {
  return (
    <div className="relative">
      <input
        className="w-full px-4 py-3 border border-primary-200 shadow-sm rounded-md placeholder:text-primary-300 placeholder:font-manrope placeholder:font-medium"
        placeholder="Search"
      />
      <div className="flex items-center absolute inset-y-0 right-0 pr-4">
        <MagnifierIcon />
      </div>
    </div>
  );
}