import BlockPattern from "../BlockPattern";
import SectionHeading from "../SectionHeading";
import SectionTitle from "../SectionTitle";
import SmallContainer from "../SmallContainer";
import gradientRectangle from "/public/websites/unifi/header/textBox/gradient-rectangle.png";
import * as motion from "motion/react-client";

const TextBox = () => {
  return (
    <SmallContainer className="flex flex-col mt-5 mb-9 max-sm:mb-14">
      <SectionTitle
        text="A BLOCKCHAIN REVOLUTION"
        className="mb-14 max-sm:mb-8"
      />
      <BlockPattern gradientRectangle={gradientRectangle} />
      <SectionHeading
        text={["Developing", "Sustainable & Innovative"]}
        className="text-[#767270] mt-10 max-sm:mt-8"
      />
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.05,
          }}
          className="text-[10.5vw] max-lg:text-[13vw] max-sm:text-[18.5vw] tracking-tight leading-[0.9] max-sm:leading-16 text-[#252D29] font-neue-bit"
        >
          {"Blockchain Solutions".split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block h-[10.5vw] max-lg:h-[13vw] max-sm:h-[18.5vw]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </SmallContainer>
  );
};

export default TextBox;
