import { Product } from "../types";

export const getFavorites = (): Product[] => {
  const favorites = localStorage.getItem("favorites");
  const favoritesArray = favorites ? JSON.parse(favorites) : [];
  return favoritesArray;
};
