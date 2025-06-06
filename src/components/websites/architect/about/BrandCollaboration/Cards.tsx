import Image, { StaticImageData } from "next/image";

interface CardProps {
  logo: StaticImageData;
  image: StaticImageData;
  companyName?: string;
}

export const Cards = ({ logo, image, companyName = "Company" }: CardProps) => {
  return (
    <div className="flex flex-col gap-3 p-[10px] rounded-lg bg-[#f7f2e9] w-[270px] h-[385px]">
      <div className="rounded-md">
        <div className="bg-[#fffbf5] rounded-lg w-fit">
          <Image 
            src={logo} 
            alt={`${companyName} logo`} 
            className="w-[140px] h-[40px] object-fill"
          />
        </div>
      </div>

      <div className="rounded-lg h-full w-full">
        <Image 
          src={image} 
          alt={`${companyName} showcase`} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};