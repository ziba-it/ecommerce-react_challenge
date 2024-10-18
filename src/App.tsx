import { SearchHeader } from "./components/header/SearchHeader";
import { ProductsGrid } from "./components/productsGrid/ProductsGrid";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortValues, setSortValues] = useState({
    sortBy: "",
    sortOrder: "",
  });
  const { sortBy, sortOrder } = sortValues;
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  const handleOpenSortModal = () => {
    setIsSortModalOpen((prev) => !prev);
  };

  const handleOpenSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleChangeSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = event.currentTarget;
    setSortValues({ sortBy: name, sortOrder: value });
    setIsSortModalOpen(false);
  };

  return (
    <main className="flex flex-col min-h-screen w-full gap-8 bg-white ">
      <Sidebar handleOpenSidebar={handleOpenSidebar} isOpen={isSidebarOpen} />
      <SearchHeader
        handleOpenSidebar={handleOpenSidebar}
        handleChangeSearch={handleChangeSearch}
        handleChangeSort={handleChangeSort}
        sortValues={sortValues}
        handleOpenSortModal={handleOpenSortModal}
        isSortModalOpen={isSortModalOpen}
      />
      <ProductsGrid
        searchTerm={debouncedSearchTerm}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </main>
  );
}

export default App;
