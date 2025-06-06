import Image from "next/image";

const ImageCard = ({ image }: { image: string }) => {
  return (
    <div className="bg-[#f7f2e9] p-2 rounded-sm">
      <section className="flex justify-between items-start mt-2 mb-5 mx-2.5">
        <p className="text-lg font-medium">Dreamy Modern Villas</p>
        <p className="text-sm font-medium px-1.5 py-1 bg-[#fffbf5] rounded-sm">
          Residential
        </p>
      </section>
      <section className="w-full aspect-[1.7/1] relative">
        <Image
          src={image}
          alt="image"
          fill
          className="object-cover rounded-sm"
        />
      </section>
    </div>
  );
};

export default ImageCard;
