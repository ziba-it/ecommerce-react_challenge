import { Button } from "../ui/Button";
import { ClothingCard } from "./ClothingCard";
import test from "../../assets/test.jpg";

const data = [
  {
    id: 1,
    title: "Polo Ralph Lauren",
    description: "Impeccably tailored in Italy from lightweight navy wool.",
    price: 300,
    image: test,
  },
  {
    id: 2,
    title: "Classic White Shirt",
    description:
      "A versatile addition to your wardrobe, made from premium cotton.",
    price: 150,
    image: test,
  },
  {
    id: 3,
    title: "Denim Jacket",
    description:
      "Stylish denim jacket with a modern fit, perfect for layering.",
    price: 120,
    image: test,
  },
  {
    id: 4,
    title: "Summer Dress",
    description: "Light and breezy summer dress, ideal for warm days.",
    price: 80,
    image: test,
  },
  {
    id: 5,
    title: "Leather Sneakers",
    description: "Comfortable leather sneakers for everyday wear.",
    price: 90,
    image: test,
  },
];

export const ClothingCardsGrid = () => {
  return (
    <section className="flex flex-col items-center gap-8 px-8 pb-14">
      <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-16 ">
        {data.map((piece) => (
          <ClothingCard key={piece.id} {...piece} />
        ))}
      </div>
      <Button variant="primary">Load more</Button>
    </section>
  );
};
