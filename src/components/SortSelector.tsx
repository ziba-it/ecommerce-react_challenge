import { ArrowIcon } from "./icons";

export default function SortSelector() {
  return (
    <div className="relative hidden w-full lg:flex lg:max-w-40">
      <select className="appearance-none w-full px-4 py-3 border border-primary-100 shadow-sm rounded-md text-primary-300 placeholder:font-manrope placeholder:font-medium bg-primary-50">
        <option>Sort by</option>
      </select>
      <div className="flex items-center absolute inset-y-0 right-0 pr-4">
        <ArrowIcon pathClassName="fill-primary-300" />
      </div>
    </div>
  );
}
