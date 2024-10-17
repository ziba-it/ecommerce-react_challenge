import { SearchHeader } from "./components/header/SearchHeader";
import { ClothingCardsGrid } from "./components/clothingGrid/ClothingCardsGrid";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const getData = async () => {
    const url = "https://dummyjson.com/products";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.products);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <main className="flex flex-col gap-8 bg-white ">
      <Sidebar handleOpenSidebar={handleOpenSidebar} isOpen={isSidebarOpen} />
      <SearchHeader handleOpenSidebar={handleOpenSidebar} />
      <ClothingCardsGrid data={data} />
    </main>
  );
}

export default App;
