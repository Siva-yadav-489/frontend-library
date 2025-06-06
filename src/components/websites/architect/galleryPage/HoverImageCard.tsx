import Image from "next/image";

type HoverImageCardProps = {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
};

const HoverImageCard = ({
  image1,
  image2,
  image3,
  image4,
}: HoverImageCardProps) => {
  return (
    <div className="bg-[#f7f2e9] p-2 rounded-sm w-full">
      <section className="flex justify-between items-start mt-2 mb-5 mx-2.5">
        <p className="text-lg font-medium">Dreamy Modern Villas</p>
        <p className="text-sm font-medium px-1.5 py-1 bg-[#fffbf5] rounded-sm">
          Residential
        </p>
      </section>
      <section className="grid grid-cols-4 gap-1 aspect-[1.7/1]">
        <div className="col-span-2 row-span-2 relative">
          <Image
            src={image1}
            alt="image"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="relative">
          <Image
            src={image2}
            alt="image"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="relative">
          <Image
            src={image3}
            alt="image"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="col-span-2 relative">
          <Image
            src={image4}
            alt="image"
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </section>
    </div>
  );
};

export default HoverImageCard;
