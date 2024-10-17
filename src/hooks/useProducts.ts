import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getProducts = async () => {
  const response = await axios("https://dummyjson.com/products");
  return response.data.products;
};

export const useProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return query;
};
