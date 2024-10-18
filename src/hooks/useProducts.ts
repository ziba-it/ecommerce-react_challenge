import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProducts = async (
  searchTerm: string,
  sortBy: string,
  sortOrder: string
) => {
  const response = await axios(
    `https://dummyjson.com/products/search?q=${searchTerm}&sortBy=${sortBy}&order=${sortOrder}`
  );
  return response.data.products;
};

export const useProducts = (
  searchTerm: string,
  sortBy: string,
  sortOrder: string
) => {
  const query = useQuery({
    queryKey: ["products", { searchTerm, sortBy, sortOrder }],
    queryFn: () => getProducts(searchTerm, sortBy, sortOrder),
  });
  return query;
};
