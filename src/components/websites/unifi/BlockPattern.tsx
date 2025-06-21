import { StaticImageData } from "next/image";
import * as motion from "motion/react-client";

const BlockPattern = ({
  gradientRectangle,
}: {
  gradientRectangle: StaticImageData;
}) => {
  return (
    <div className="flex items-start h-[2.8vw] max-lg:h-[3.6vw] max-sm:h-[8vw]">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-[#38f997] w-[1.4vw] h-[1.4vw] max-lg:w-[1.8vw] max-lg:h-[1.8vw] max-sm:w-[4vw] max-sm:h-[4vw]"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="bg-[#38f997] w-[1.4vw] h-[1.4vw] max-lg:w-[1.8vw] max-lg:h-[1.8vw] max-sm:w-[4vw] max-sm:h-[4vw] self-end"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        className="bg-[#38f997] w-[1.4vw] h-[1.4vw] max-lg:w-[1.8vw] max-lg:h-[1.8vw] max-sm:w-[4vw] max-sm:h-[4vw]"
      />
      <div className="inline-block h-[1.4vw] max-lg:h-[1.8vw] max-sm:h-[4vw]">
        <motion.img
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.6,
          }}
          src={gradientRectangle.src}
          alt="gradient-color"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default BlockPattern;
