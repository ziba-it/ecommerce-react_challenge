import { Button } from "../ui/Button";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types";
import { LoadingScreen } from "../ui/LoadingScreen";

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
  const { data, isLoading } = useProducts(searchTerm, sortBy, sortOrder);

  if (isLoading) return <LoadingScreen />;

  return (
    <section className="flex flex-col items-center gap-8 px-8 pb-14">
      <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-16 ">
        {data?.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Button variant="primary">Load more</Button>
    </section>
  );
};
