import {
  Button,
  LoadingMessage,
  ErrorMessage,
  HasNoResultsMessage,
} from "../ui";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../../hooks";
import { Product } from "../../types";
import { useState } from "react";

type ProductsGridProps = {
  searchTerm: string;
  sortBy: string;
  sortOrder: string;
};

export const ProductsGrid = ({
  searchTerm,
  sortBy,
  sortOrder,
}: ProductsGridProps) => {
  const [limit, setLimit] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const {
    data = [],
    isLoading,
    isError,
  } = useProducts(searchTerm, sortBy, sortOrder, limit);

  const hasResults = data.length > 0;

  const incrementLimit = (increment: number) => {
    setLimit((prev) => prev + increment);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // I implemented a 500 ms delay to enhance user experience by providing a loading state to the button.
    // This delay gives users feedback that their action is acknowledged and helps
    // prevent abrupt UI changes.
    setTimeout(() => {
      incrementLimit(6);
      setIsLoadingMore(false);
    }, 500);
  };

  if (isLoading) return <LoadingMessage />;
  if (isError) return <ErrorMessage />;
  if (!hasResults) return <HasNoResultsMessage />;

  return (
    <section className="flex flex-col items-center gap-8 px-8 pb-14">
      <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-16">
        {data?.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Button
        variant={isLoadingMore ? "loading" : "primary"}
        onClick={handleLoadMore}
      >
        Load more
      </Button>
    </section>
  );
};
