import noiseBackground from "/public/websites/unifi/challengingStandards/noise-background.jpg";
import Image from "next/image";
import * as motion from "motion/react-client";

type CarouselCardProps = {
  heading: string;
  para1: string;
  para2: string;
};

const CarouselCard = ({ heading, para1, para2 }: CarouselCardProps) => {
  return (
    <div className="relative max-h-[43rem] max-xs:h-[60vh] sm:aspect-[3.5/2.3]">
      <div className="w-full h-full">
        <Image
          src={noiseBackground}
          alt="noiseBackground"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col p-[3.5vw] max-lg:py-[10vw] max-lg:px-[6vw] max-sm:py-[18vw] max-sm:px-[10vw] max-sm:justify-center max-sm:space-y-8 justify-between">
        <>
          <h1 className="text-[#252d29] text-[7vw] max-lg:text-[10vw] leading-[1.1] font-medium max-w-[60%]">
            {heading}
          </h1>
        </>
        <>
          <div className="flex justify-between items-end max-sm:hidden">
            <div className="flex gap-6 max-w-[75%] max-lg:max-w-full text-[#252d29] text-xl max-xl:text-base font-medium">
              <p className="basis-[52%]">{para1}</p>
              <p className="basis-[48%]">{para2}</p>
            </div>
          </div>
          <div className="sm:hidden">
            <p className="max-w-full text-[#252d29] text-xl max-xl:text-base font-medium">
              {para1}
              {para2}
            </p>
          </div>
        </>
      </div>
      <>
        <motion.button
          className="py-2.5 max-lg:py-3 px-[4vw] bg-[#38f997] absolute bottom-0 right-0 max-lg:inset-x-0 text-nowrap tracking-wide font-neue-bit text-[1.65vw] max-lg:text-[2vw] max-sm:text-[max(3.5vw,1.1rem)] group cursor-pointer"
          whileHover="hover"
          variants={{
            hover: {
              backgroundColor: "black",
              transition: { duration: 0.4 },
            },
          }}
        >
          {"LEARN MORE".split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={{
                hover: {
                  opacity: [0, 1],
                  color: "white",
                  transition: {
                    duration: 0.4,
                    delay: index * 0.03,
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.button>
      </>
    </div>
  );
};

export default CarouselCard;
