import TitleWrapper from "./TitleWrapper";
import DescriptionWrapper from "./DescriptionWrapper";
import PriceAndLike from "./PriceAndLike";

type CardProps = {
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function ClothCard({
  title,
  description,
  price,
  image,
}: CardProps) {
  return (
    <div className="flex flex-col gap-4 items-center px-2 py-7">
      <div>
        <img src={image} />
      </div>
      <div className="flex flex-col gap-4 text-center px-12">
        <TitleWrapper>{title}</TitleWrapper>
        <DescriptionWrapper>{description}</DescriptionWrapper>
      </div>
      <PriceAndLike price={price} />
    </div>
  );
}
