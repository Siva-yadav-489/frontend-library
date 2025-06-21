"use client";
import noiseBackground from "/websites/unifi/WeAreOnline/noise-background.jpg";
import SectionTitle from "./SectionTitle";
import VerticalLines from "./VerticalLines";
import SocialLinks from "./SocialLinks";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const WeAreOnline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex justify-center items-center relative pt-10 pb-28 overflow-hidden"
    >
      <VerticalLines />
      <motion.div
        style={{
          backgroundImage: `url(${noiseBackground})`,
          scale: backgroundScale,
        }}
        className="bg-cover w-[55rem] h-[55rem] max-lg:w-[85vw] max-lg:h-[85vw] max-xs:scale-125 mx-auto rounded-full flex flex-col justify-center items-center z-10"
      >
        <SectionTitle
          text="WE'RE ONLINE"
          className="text-center text-[#272727] mb-5"
        />
        <h1 className="text-center text-[#272727] text-[7vw] font-medium leading-[1.1]">
          Join the Conversation
        </h1>

        <SocialLinks size="w-11 max-md:w-6 max-xs:w-8 mt-5" />
      </motion.div>
    </div>
  );
};

export default WeAreOnline;
