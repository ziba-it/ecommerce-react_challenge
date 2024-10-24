import { SearchAndSortHeader } from "./components/header/SearchAndSortHeader";
import { ProductsGrid } from "./components/products/ProductsGrid";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useState } from "react";
import { useDebounce } from "./hooks";
import { getSortLabel } from "./utils/getSortLabel";

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
    setState((prevState) => ({
      ...prevState,
      isSortModalOpen: !prevState.isSortModalOpen,
    }));
  };

  const handleOpenSidebar = () => {
    setState((prevState) => ({
      ...prevState,
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState((prevState) => ({ ...prevState, searchTerm: value }));
  };

  const handleChangeSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value, name } = event.currentTarget;

    if (name === sortBy) {
      setState((prevState) => ({
        ...prevState,
        label: "Sort by",
        sortBy: "",
        sortOrder: "",
      }));
    } else {
      const label = getSortLabel(name, value);

      setState((prevState) => ({
        ...prevState,
        label,
        sortBy: name,
        sortOrder: value,
      }));
    }

    setState((prevState) => ({ ...prevState, isSortModalOpen: false }));
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
