import { HeartIcon } from "../icons";
import { Product } from "../../types";
import { useState, useEffect } from "react";
import { getFavorites } from "../../utils/getFavorites";

export const ProductCard = ({
  title,
  description,
  price,
  images,
  id,
}: Product) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favorites = getFavorites();
    if (!favorites) {
      setIsFav(false);
      return;
    }
    const productExists = favorites.find((item: Product) => item.id === id);
    setIsFav(!!productExists);
  }, [id]);

  const handleFav = () => {
    const product = { title, description, price, images, id };
    let favorites = getFavorites();

    const productExists = favorites.find((item: Product) => item.id === id);

    if (productExists) {
      favorites = favorites.filter((item: Product) => item.id !== id);
    } else {
      favorites.push(product);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFav((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4 items-center px-2 py-7 ">
      <img src={images[0]} alt={title} className="size-52" />
      <div className="flex flex-col gap-4 text-center px-12">
        <h2 className="font-ubuntu font-normal text-2xl leading-7 text-primary-900">
          {title}
        </h2>
        <p className="line-clamp-2 font-manrope text-primary-600 tracking-wide font-light leading-7 ">
          {description}
        </p>
      </div>
      <div className="w-full flex justify-between px-16">
        <p className="font-manrope font-normal text-primary-600">€ {price}</p>
        <button onClick={handleFav}>
          <HeartIcon pathClassName="fill-complementary-600" isFav={isFav} />
        </button>
      </div>
    </div>
  );
};
