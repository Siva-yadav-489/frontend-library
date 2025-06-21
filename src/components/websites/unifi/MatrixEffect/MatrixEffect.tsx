"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SmallContainer from "../SmallContainer";
import BlockPattern from "../BlockPattern";
import gradientRectangle from "/public/websites/unifi/matrixEffect/gradientRectangle.png";
import SectionTitle from "../SectionTitle";
import AnimatedHeading from "../AnimatedHeading";

const MatrixEffect = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const borderColor = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    ["#38f997", "#97979739"]
  );
  const gridOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const padding = useTransform(scrollYProgress, [0.25, 0.45], ["6vw", "0rem"]);
  const textOpacity = useTransform(scrollYProgress, [0.67, 0.7], [0, 1]);
  const headingColorProgress = useTransform(
    scrollYProgress,
    [0.72, 0.85],
    [0, 1]
  );
  const GridFace = ({ className = "" }) => (
    <motion.div
      className={`grid grid-cols-[repeat(16,1fr)] grid-rows-[repeat(12,1fr)] w-full h-full ${className}`}
    >
      {Array.from({ length: 16 * 12 }).map((_, i) => (
        <motion.div
          style={{ borderColor, opacity: gridOpacity }}
          key={i}
          className="border border-[#38f997]"
        />
      ))}
    </motion.div>
  );

  return (
    <div className="relative h-[180vh]">
      <motion.div
        ref={containerRef}
        style={{ padding }}
        className="bg-[#e7e6e4] w-full flex sticky top-0 h-screen justify-center items-center group"
      >
        <div className="min-h-screen sticky top-0 w-full flex flex-col items-center overflow-hidden justify-center bg-[#272727]">
          <div
            className="relative"
            style={{
              width: `900px`,
              height: `600px`,
              perspective: "500px",
            }}
          >
            {/* 3D Room */}
            <div
              className="absolute inset-0"
              style={{
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Back wall */}
              <div
                className="absolute"
                style={{
                  width: `900px`,
                  height: `600px`,
                  transform: `translateZ(-300px)`,
                }}
              >
                <GridFace />
              </div>
              {/* Floor */}
              <div
                className="absolute"
                style={{
                  width: `890px`,
                  height: `600px`,
                  transform: `rotateX(-90deg) translateY(-15px) translateX(6px) translateZ(295px)`,
                }}
              >
                <GridFace />
              </div>
              {/* Ceiling */}
              <div
                className="absolute"
                style={{
                  width: `890px`,
                  height: `600px`,
                  transform: `rotateX(-90deg) translateY(-15px) translateX(6px) translateZ(-295px)`,
                }}
              >
                <GridFace />
              </div>
              {/* Left wall */}
              <div
                className="absolute"
                style={{
                  width: `900px`,
                  height: `710px`,
                  transform: `rotateY(-90deg) translateY(-55px) translateZ(${535}px)`,
                }}
              >
                <GridFace />
              </div>
              {/* Right wall */}
              <div
                className="absolute"
                style={{
                  width: `900px`,
                  height: `710px`,
                  transform: `rotateY(-90deg) translateY(-55px) translateZ(-${535}px)`,
                }}
              >
                <GridFace />
              </div>
            </div>
          </div>
        </div>
        <motion.div style={{ opacity: textOpacity }}>
          <SmallContainer className="w-full h-full absolute inset-x-0 top-20">
            <SectionTitle text="IN OUR HISTORY" className="text-white" />
            <AnimatedHeading
              text="As leaders in developing sustainable & innovative solutions, the future of blockchain is in our history."
              className="text-white lg:w-full lg:pr-[10rem]"
              initialColor="#767072"
              overlayColor="#ffffff"
              scrollProgress={headingColorProgress}
            />
            <BlockPattern gradientRectangle={gradientRectangle} />
          </SmallContainer>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MatrixEffect;
