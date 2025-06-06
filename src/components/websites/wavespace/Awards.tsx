"use client";
import Image from "next/image";
import bgImage from "/public/websites/wavespace/awards/bgImage.webp";
import Container from "./Container";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import rightTopArrow from "/public/websites/wavespace/rightTopArrow.webp";

const Awards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftTextX = useTransform(scrollYProgress, [0, 0.35], ["-40vw", "0vw"]);
  const rightTextX = useTransform(scrollYProgress, [0, 0.35], ["40vw", "0vw"]);

  const points = [
    { number: "01", text: "500+ Happy clients" },
    { number: "02", text: "10+ Design awards" },
    { number: "03", text: "$600 M+ funding" },
    { number: "04", text: "x5 Growth of brand" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative h-[125vh] max-lg:h-[70vh] overflow-hidden"
    >
      <Image
        src={bgImage}
        alt="Awards Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative flex flex-col justify-between h-full  pb-14">
        <div className="overflow-x-hidden h-full flex flex-col justify-start mt-10 lg:px-10">
          <motion.h1
            style={{
              x: leftTextX,
            }}
            className="text-white font-extrabold text-[161px] max-lg:text-7xl max-sm:text-5xl text-start"
          >
            our award &
          </motion.h1>
          <motion.h1
            style={{
              x: rightTextX,
            }}
            className="text-white font-extrabold text-[161px] max-lg:text-7xl max-sm:text-5xl lg:leading-28 text-end"
          >
            achievements
          </motion.h1>
        </div>
        <Container className="flex max-lg:hidden">
          {points.map((point, index) => (
            <motion.section
              whileHover="hover"
              key={index}
              className="text-black group relative overflow-hidden bg-white px-8 border-r border-[#e8e7e7] py-10 h-[330px] flex flex-col justify-between items-start"
            >
              <motion.div
                initial={{ y: -100 }}
                variants={{
                  hover: { y: -10, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="bg-[#3f2fee] absolute right-7 flex items-center justify-center rounded-full w-[50px] h-[50px]"
              >
                <Image
                  src={rightTopArrow}
                  alt="rightTopArrow"
                  className="w-3 h-3 object-contain object-center"
                />
              </motion.div>
              <p className="text-[#b9b9b9] text-lg font-medium">
                {point.number}
              </p>
              <h3 className="text-[29px] leading-8 font-bold">{point.text}</h3>
            </motion.section>
          ))}
        </Container>
        <motion.div
          className="flex lg:hidden"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* First set of cards */}
          <div className="flex shrink-0">
            {points.map((point, index) => (
              <section
                key={index}
                className="text-black bg-white px-6 border-r border-[#e8e7e7] py-7 h-60 w-52 flex flex-col justify-between items-start shrink-0"
              >
                <p className="text-[#b9b9b9] text-base font-medium">
                  {point.number}
                </p>
                <h3 className="text-2xl font-bold">{point.text}</h3>
              </section>
            ))}
          </div>
          {/* Duplicate set of cards for seamless loop */}
          <div className="flex shrink-0">
            {points.map((point, index) => (
              <section
                key={index}
                className="text-black bg-white px-6 border-r border-[#e8e7e7] py-7 h-60 w-52 flex flex-col justify-between items-start shrink-0"
              >
                <p className="text-[#b9b9b9] text-base font-medium">
                  {point.number}
                </p>
                <h3 className="text-2xl font-bold">{point.text}</h3>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
