import axios from "axios";

export const getProducts = async (
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
