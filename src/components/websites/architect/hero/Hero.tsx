import Button from "../Button";
import bgsky from "/public/websites/architect/hero/bg-sky.png";
import bghouse from "/public/websites/architect/hero/bg-house.avif";
import HeroCard from "./HeroCard";
import Image from "next/image";

const Hero = () => {
  const cards = [
    { count: "15+", desc: "Years of creating spaces" },
    { count: "90+", desc: "Amazing projects brought to life" },
    { count: "75+", desc: "Happy clients, happy spaces" },
    { count: "11", desc: "Designs that earn awards" },
  ];
  return (
    <div>
      <div className="relative w-full h-[98rem] max-xl:h-[80rem] max-lg:h-[68rem] max-md:h-[56rem] max-sm:h-[50rem] overflow-hidden">
        <Image
          src={bgsky}
          alt="Sky Background"
          className="absolute top-0 left-0 w-full h-[100rem] object-cover z-0"
        />
        <div className="absolute top-20 flex flex-col items-center left-1/5 right-1/5 z-10 text-center px-4">
          <div className="sm:text-nowrap max-sm:w-screen max-sm:px-6">
            <h1 className="text-[75px] font-medium max-xl:text-6xl max-md:text-[38px] text-[#21201b] mt-20 max-sm:mt-10 tracking-tighter xl:leading-[68px]">
              Architecture <br className="sm:hidden max-xs:hidden" />
              that connects <br className="max-xs:hidden" /> people and places
            </h1>
            <p className="text-[17px] max-xl:text-base tracking-tight font-medium text-[#21201b] my-7 leading-6">
              We design more than buildings—we create{" "}
              <br className="max-xs:hidden" />
              spaces that foster connection, creativity, and{" "}
              <br className="max-xs:hidden" />
              community
            </p>
            <div className="flex justify-center z-20">
              <Button buttonBg="black" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-20">
          <Image
            src={bghouse}
            alt="House Background"
            className="w-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full h-[22%] md:bg-gradient-to-t from-[#211f1a] via-[#211f1a80]  to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[8%] md:bg-gradient-to-t from-[#211f1a] via-[#211f1a] to-transparent"></div>
          <div className="absolute bottom-5 left-0 w-full h-[20%] md:bg-gradient-to-t from-[#211f1a5f]  to-transparent"></div>

          <div className="absolute bottom-5 left-0 right-0 flex max-md:hidden justify-between items-end space-x-[9px] px-12 max-[1200px]:px-5">
            {cards.map((card, index) => (
              <HeroCard key={index} count={card.count} desc={card.desc} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:hidden bg-[#21201dfc] gap-3 pt-11 pb-20 px-12 max-[1200px]:px-5">
        {cards.map((card, index) => (
          <HeroCard key={index} count={card.count} desc={card.desc} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
