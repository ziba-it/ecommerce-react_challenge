import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProducts = async (
  searchTerm: string,
  sortBy: string,
  sortOrder: string,
  limit: number
) => {
  if (sortBy === "favorites") {
    const response = localStorage.getItem("favorites");
    const data = response ? JSON.parse(response) : [];
    return data;
  }
  const response = await axios(
    `https://dummyjson.com/products/search?limit=${limit}&q=${searchTerm}&sortBy=${sortBy}&order=${sortOrder}`
  );

  if (response.status !== 200) {
    throw new Error("Unable to fetch data");
  }

  return response.data.products;
};

export const useProducts = (
  searchTerm: string,
  sortBy: string,
  sortOrder: string,
  limit: number
) => {
  const query = useQuery({
    queryKey: ["products", { searchTerm, sortBy, sortOrder, limit }],
    queryFn: () => getProducts(searchTerm, sortBy, sortOrder, limit),
    placeholderData: keepPreviousData,
  });
  return query;
};
