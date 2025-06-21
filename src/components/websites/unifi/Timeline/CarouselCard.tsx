import Image from "next/image";
import noiseBackground from "/public/websites/unifi/timeline/noise-background.jpg";

type CarouselCardProps = {
  year: string;
  work: string;
};

const CarouselCard = ({ year, work }: CarouselCardProps) => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full absolute inset-0">
        <Image
          src={noiseBackground}
          alt="noiseBackground"
          className="w-full h-full"
        />
      </div>
      <div className="absoulte inset-0 h-full flex flex-col justify-between text-[#272727] pt-10 pb-14 px-14 max-lg:p-7 ">
        <p className="relative font-neue-bit text-[7.5vw] max-lg:text-[10vw] max-md:text-[12vw] max-sm:text-[14vw]">
          {year}
        </p>
        <p className="relative text-[5.25vw] max-lg:text-[7.5vw] max-sm:text-[9vw] xl:pr-[10rem] font-neue-montreal leading-[1.1] font-medium">
          {work.split("").map((char, index) => (
            <span key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
