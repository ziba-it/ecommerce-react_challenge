import { SearchHeader } from "./components/header/SearchHeader";
import { ClothingCardsGrid } from "./components/clothingGrid/ClothingCardsGrid";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <main className="flex flex-col gap-8 bg-white ">
      <Sidebar handleOpenSidebar={handleOpenSidebar} isOpen={isSidebarOpen} />
      <SearchHeader handleOpenSidebar={handleOpenSidebar} />
      <ClothingCardsGrid />
    </main>
  );
}

export default App;
