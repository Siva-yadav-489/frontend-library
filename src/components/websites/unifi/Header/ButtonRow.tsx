import * as motion from "motion/react-client";

const ButtonRow = () => {
  return (
    <div className="flex tracking-wide font-neue-bit text-[1.65vw] max-lg:text-[2vw] max-sm:text-[max(3.5vw,1.1rem)] max-xs:w-[100vw]">
      <motion.button
        className="py-2.5 px-[6.94vw] bg-[#38f997] text-nowrap max-xs:w-full relative group cursor-pointer"
        whileHover="hover"
        variants={{
          hover: { backgroundColor: "black", transition: { duration: 0.4 } },
        }}
      >
        {"GET IN TOUCH".split("").map((char, index) => (
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
      <motion.button
        whileHover="hover"
        variants={{
          hover: { backgroundColor: "black", transition: { duration: 0.4 } },
        }}
        className="py-2.5 px-[3.45vw] text-nowrap max-xs:w-full relative group cursor-pointer"
      >
        {"JOIN THE MOVEMENT".split("").map((char, index) => (
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
    </div>
  );
};

export default ButtonRow;
