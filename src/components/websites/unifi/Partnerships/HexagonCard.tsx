"use client";
import Image, { StaticImageData } from "next/image";
import noiseBackground from "/public/websites/unifi/partnerships/noise-background.jpg";
import { motion, MotionValue } from "motion/react";

type HexagonCardProps = {
  cryptoImage: StaticImageData;
  scale: MotionValue<number>;
};

const HexagonCard = ({ cryptoImage, scale }: HexagonCardProps) => {
  return (
    <div className="w-[20.125vw] h-[23vw] max-lg:w-[34vw] max-lg:h-[39vw] relative">
      <motion.div style={{ scale }} className="w-full h-full">
        <Image
          src={noiseBackground}
          alt="nioseBackground"
          className="w-full h-full object-cover"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        />
      </motion.div>
      <div className="w-[8vw] h-[10vw] max-lg:w-[12vw] max-lg:h-[15vw] max-sm:w-[16vw] max-sm:h-[20vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src={cryptoImage} alt="cryptoImage" className="w-full h-full" />
      </div>
    </div>
  );
};

export default HexagonCard;
