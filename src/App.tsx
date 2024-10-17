import { SearchHeader } from "./components/header/SearchHeader";
import { ProductsGrid } from "./components/productsGrid/ProductsGrid";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <main className="flex flex-col min-h-screen w-full gap-8 bg-white ">
      <Sidebar handleOpenSidebar={handleOpenSidebar} isOpen={isSidebarOpen} />
      <SearchHeader handleOpenSidebar={handleOpenSidebar} />
      <ProductsGrid />
    </main>
  );
}

export default App;
