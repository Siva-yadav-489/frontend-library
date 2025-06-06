// "use client";
// import { motion, useScroll, useTransform } from "motion/react";
// import { useRef } from "react";

// type AnimatedHeadingProps = {
//   text: string[];
//   line1Style?: string;
//   line2Style?: string;
// };

// const AnimatedHeading = ({
//   text,
//   line1Style,
//   line2Style,
// }: AnimatedHeadingProps) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const width = useTransform(scrollYProgress, [0, 0.65], ["0%", "100%"]);
//   return (
//     <div className="relative">
//       <motion.div
//         style={{ width }}
//         ref={containerRef}
//         className={`absolute inset-0  bg-red-500`}
//       ></motion.div>
//       <h1
//         className={`relative text-black text-[50px] max-xl:text-[44px] max-lg:text-[38px] max-md:text-4xl max-xl:leading-14 max-lg:leading-12 ${line1Style} font-extrabold leading-16`}
//       >
//         {text[0]} <br className="max-xs:hidden" />
//         <span className={`text-[#29242469] max-md:text-black ${line2Style}`}>
//           {text[1]}
//         </span>
//       </h1>
//     </div>
//   );
// };

// export default AnimatedHeading;
"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type AnimatedHeadingProps = {
  text: string[];
  line1Style?: string;
  initialColor1?: string;
  targetColor1?: string;
  initialColor2?: string;
  targetColor2?: string;
};

const AnimatedHeading = ({
  text,
  line1Style,
  initialColor1,
  targetColor1,
  initialColor2,
  targetColor2,
}: AnimatedHeadingProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0%", "-100%"]
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <h1
        className={`relative text-[50px] max-xl:text-[44px] max-lg:text-[38px] max-md:text-[30px] max-md:leading-10 max-xl:leading-14 max-lg:leading-12 ${line1Style} font-extrabold leading-16`}
      >
        {/* First line of text */}
        <motion.span
          className="inline-block bg-transparent text-transparent bg-clip-text"
          style={{
            // display: "inline-block", // Crucial for background-clip: text
            backgroundImage: `linear-gradient(to right, ${initialColor1},${targetColor1})`,
            backgroundSize: "200% 100%", // Twice the width to allow full reveal
            backgroundPosition: backgroundPosition,
          }}
        >
          {text[0]}
        </motion.span>{" "}
        <br className="max-xs:hidden" />
        {/* Second line of text */}
        <motion.span
          className={`inline-block bg-transparent text-transparent bg-clip-text`}
          style={{
            // display: "inline-block",
            backgroundImage: `linear-gradient(to right, ${initialColor2},${targetColor2})`,
            backgroundSize: "200% 100%",
            backgroundPosition: backgroundPosition,
          }}
        >
          {text[1]}
        </motion.span>
      </h1>
    </div>
  );
};

export default AnimatedHeading;
