import { SearchAndSortHeader } from "./components/header/SearchAndSortHeader";
import { ProductsGrid } from "./components/productsGrid/ProductsGrid";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useState } from "react";
import { useDebounce } from "./hooks";

function App() {
  const [state, setState] = useState({
    isSidebarOpen: false,
    searchTerm: "",
    label: "Sort by",
    sortBy: "",
    sortOrder: "",
    isSortModalOpen: false,
  });

  const { sortBy, sortOrder, label } = state;
  const debouncedSearchTerm = useDebounce(state.searchTerm, 500);

  const handleOpenSortModal = () => {
    setState((prev) => ({ ...prev, isSortModalOpen: !prev.isSortModalOpen }));
  };

  const handleOpenSidebar = () => {
    setState((prev) => ({ ...prev, isSidebarOpen: !prev.isSidebarOpen }));
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState((prev) => ({ ...prev, searchTerm: value }));
  };

  const handleChangeSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = event.currentTarget;

    if (name === sortBy) {
      setState((prev) => ({
        ...prev,
        label: "Sort by",
        sortBy: "",
        sortOrder: "",
      }));
    } else {
      let label = "";
      if (name === "favorites") {
        label = "Favorites";
      } else if (name === "price") {
        label = value === "asc" ? "Price: Low to High" : "Price: High to Low";
      } else if (name === "title") {
        label = value === "asc" ? "Title: A to Z" : "Title: Z to A";
      }

      setState((prev) => ({ ...prev, label, sortBy: name, sortOrder: value }));
    }

    setState((prev) => ({ ...prev, isSortModalOpen: false }));
  };

  return (
    <main className="flex flex-col min-h-screen w-full gap-8 bg-white ">
      <Sidebar
        handleOpenSidebar={handleOpenSidebar}
        isOpen={state.isSidebarOpen}
      />
      <SearchAndSortHeader
        handleOpenSidebar={handleOpenSidebar}
        handleChangeSearch={handleChangeSearch}
        handleChangeSort={handleChangeSort}
        sortValues={{ label, sortBy, sortOrder }}
        handleOpenSortModal={handleOpenSortModal}
        isSortModalOpen={state.isSortModalOpen}
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
