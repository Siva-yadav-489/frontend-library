import Image from "next/image";
import noiseBackground from "/public/websites/unifi/aboutUs/noise-background.jpg";

type CardProps = {
  heading: string;
  para1: string;
  para2: string;
};

const Card = ({ heading, para1, para2 }: CardProps) => {
  return (
    <div className="relative">
      <div className="w-full h-full">
        <Image
          src={noiseBackground}
          alt="noiseBackground"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col lg:justify-between p-[2.75vw] pt-[3.5vw] max-lg:p-[9vw] max-sm:p-10 max-xs:p-6 max-sm:space-y-4 max-xs:space-y-2 max-lg:space-y-3 absolute inset-0">
        <p className="relative font-medium text-[2.75vw] max-lg:text-[3.5vw] max-md:text-[4.5vw] max-xs:text-sm text-[#272727] leading-[1.1]">
          {heading}
        </p>
        <div className="flex max-sm:flex-col items-start max-sm:space-y-4 max-xs:space-y-2 max-sm:text-xs max-xs:text-xs font-medium space-x-[1.25vw] max-lg:space-x-[2vw] text-[1.5vw] max-md:text-base text-[#272727]">
          <p className="relative">{para1}</p>
          <p className="relative">{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
