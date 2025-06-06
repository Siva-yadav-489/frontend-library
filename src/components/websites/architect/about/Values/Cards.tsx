import Image, { StaticImageData } from "next/image";

export const Cards = ({
  title,
  description,
  image,
  icon
}: {
  title: string;
  description: string;
  image: StaticImageData | string;
  icon: StaticImageData | string;
}) => {
  return (
    <div className="p-1 rounded-md bg-[#ffffff0d] flex flex-col gap-2 h-[390px]">
      <div className="bg-[#30303080] flex gap-4 text-[#FFFBF5] font-medium text-xl p-[9px]">
        <Image src={icon} alt="icon" className="aspect-square w-[30px]"></Image>
        <h1>
          {title}
        </h1>
      </div>

      <div className="relative h-full w-full">
        <Image src={image} alt={title} className="absolute top-0 rounded-md w-full h-full object-cover object-center z-10" />
      </div>

      <div className="bg-[#f7f2e9] p-5 rounded-md">
        <h1 className="text-lg font-medium">{description}</h1>
      </div>
    </div>
  );
};