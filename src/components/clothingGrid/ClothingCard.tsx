import { HeartIcon } from "../icons";

type CardProps = {
  title: string;
  description: string;
  price: number;
  image: string;
};

export const ClothingCard = ({
  title,
  description,
  price,
  image,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-4 items-center px-2 py-7 ">
      <img src={image} />
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
