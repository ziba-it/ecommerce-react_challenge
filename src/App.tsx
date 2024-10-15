import SearchHeader from "./components/SearchHeader";
import ClothCardsGrid from "./components/ClothCardsGrid";

function App() {
  return (
    <main className="flex flex-col gap-8 bg-white py-14 px-8">
      <SearchHeader />
      <ClothCardsGrid />
    </main>
  );
}

export default App;
