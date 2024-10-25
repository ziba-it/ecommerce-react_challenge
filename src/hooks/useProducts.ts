import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";

export const useProducts = (
  searchTerm: string,
  sortBy: string,
  sortOrder: string,
  limit: number
) => {
  const { data, isError, isFetching } = useQuery({
    queryKey: ["products", { searchTerm, sortBy, sortOrder, limit }],
    queryFn: () => getProducts(searchTerm, sortBy, sortOrder, limit),
    placeholderData: keepPreviousData,
  });
  return {
    data,
    isError,
    isFetching,
  };
};
