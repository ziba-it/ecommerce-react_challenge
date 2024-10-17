import { HeartIcon } from "../icons";
import { Clothing } from "../../types";

export const ClothingCard = ({
  title,
  description,
  price,
  images,
}: Clothing) => {
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
        <button>
          <HeartIcon pathClassName="fill-complementary-600" />
        </button>
      </div>
    </div>
  );
};
