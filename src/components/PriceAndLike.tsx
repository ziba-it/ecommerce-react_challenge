import { HeartIcon } from "./icons";

type PriceAndLikeProps = {
  price: number;
};

export default function PriceAndLike({ price }: PriceAndLikeProps) {
  return (
    <div className="w-full flex justify-between px-16">
      <p className="font-manrope font-normal text-primary-600">€ {price}</p>
      <button>
        <HeartIcon pathClassName="fill-complementary-600" />
      </button>
    </div>
  );
}
