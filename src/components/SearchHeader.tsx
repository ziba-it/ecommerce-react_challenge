import { MobileMenuIcon, SortVerticalIcon } from "./icons";
import SearchInput from "./SearchInput";

export default function SearchHeader() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full flex items-center justify-between gap-2">
        <button>
          <MobileMenuIcon />
        </button>
        <h1 className="text-3xl font-medium">Find what you need</h1>
        <button>
          <SortVerticalIcon />
        </button>
      </div>
      <div className="w-full px-5">
        <SearchInput />
      </div>
    </div>
  );
}
