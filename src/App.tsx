import SearchHeader from "./components/SearchHeader";
import ClothCardsGrid from "./components/ClothCardsGrid";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex flex-col gap-8 bg-white ">
      <Sidebar
        handleOpenSidebar={handleOpenSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <SearchHeader handleOpenSidebar={handleOpenSidebar} />
      <ClothCardsGrid />
    </main>
  );
}

export default App;
