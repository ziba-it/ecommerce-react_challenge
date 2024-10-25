export const getSortLabel = (name: string, value: string): string => {
  switch (name) {
    case "favorites":
      return "Favorites";
    case "price":
      return value === "asc" ? "Price: Low to High" : "Price: High to Low";
    case "title":
      return value === "asc" ? "Title: A to Z" : "Title: Z to A";
    default:
      return "Sort by";
  }
};
