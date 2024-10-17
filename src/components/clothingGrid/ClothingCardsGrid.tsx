import { Button } from "../ui/Button";
import { ClothingCard } from "./ClothingCard";
import { Clothing } from "../../types";

type ClothingCardsGridProps = {
  data: Clothing[];
};

export const ClothingCardsGrid = ({ data }: ClothingCardsGridProps) => {
  return (
    <section className="flex flex-col items-center gap-8 px-8 pb-14">
      <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-16 ">
        {data?.map((piece) => (
          <ClothingCard key={piece.id} {...piece} />
        ))}
      </div>
      <Button variant="primary">Load more</Button>
    </section>
  );
};
