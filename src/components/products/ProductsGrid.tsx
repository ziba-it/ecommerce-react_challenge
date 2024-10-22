import { Button, StateMessage } from "../ui";
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
  const { data, isError, isFetching } = useProducts(
    searchTerm,
    sortBy,
    sortOrder,
    limit
  );

  const incrementLimit = (increment: number) => {
    setLimit((prev) => prev + increment);
  };

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    incrementLimit(6);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoadingMore(false);
  };

  if (isFetching && !isLoadingMore) {
    return <StateMessage>Loading...</StateMessage>;
  }
  if (isError) return <StateMessage>There was an error...</StateMessage>;
  if (!data?.length) return <StateMessage>No results found...</StateMessage>;

  return (
    <section className="flex flex-col items-center gap-8 px-8 pb-14">
      <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-16">
        {data?.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Button
        variant={isFetching ? "loading" : "primary"}
        onClick={handleLoadMore}
      >
        Load more
      </Button>
    </section>
  );
};
