"use client";
import AnimatedHeading from "../AnimatedHeading";
import BlockPattern from "../BlockPattern";
import SectionTitle from "../SectionTitle";
import LargeContainer from "../LargeContainer";
import gradientRectangle from "/public/websites/unifi/aboutUs/gradientRectangle.png";
import VerticalLines from "../VerticalLines";
import Image from "next/image";
import arrow from "/public/websites/unifi/challengingStandards/arrow.svg";
import Card from "./Card";
import scrollbarGradient from "/public/websites/unifi/aboutUs/scrollbar-gradient.jpg";

import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const AboutUs = () => {
  const cards = [
    {
      heading: "Unifi Protocol is a community-founded organization.",
      para1:
        "We have the drive, passion, fortitude, and ability to be disruptive in the most disruptive industry of our lifetimes.",
      para2:
        "We are a passionate bunch, and we welcome anyone who aligns with our core values and encourage them to join our team.",
    },
    {
      heading: "The future of blockchain is in our history.",
      para1:
        "We've been developing sustainable blockchain solutions since 2018, making us experts in re-thinking what a blockchain should be.",
      para2:
        "As leaders in developing sustainable & innovative solutions, our future vision is to make blockchain adoption the future of finance.",
    },
    {
      heading: "We believe blockchain technology has a crypto problem.",
      para1:
        "So we're looking to flip the table on the industry and build a blockchain without creating a native currency.",
      para2:
        "Now, our team is working together to create the next class of blockchain, built on the principle of economic sustainability.",
    },
    {
      heading: "Now it's time for a blockchain revolution.",
      para1:
        "Join us as we tear down core tenets of why gas tokens or network subsidies need to be inflationary currencies.",
      para2:
        "If you are all about doing things differently, breaking the norms and challenging the status quo, then reach out to our team.",
    },
    {
      heading: "Join our mission to build lasting and sustainable products.",
      para1:
        "Our values are at the heart of what we do and we are all about getting the job done while having a good time.",
      para2:
        "It is our intention to flip the table on the industry and build a blockchain without creating a native currency.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sticky scroll-based heading animation
  const stickyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start end", "end start"],
  });
  // Animate color change from 0 to 1 as user scrolls through the sticky section
  const colorChangeProgress = useTransform(
    scrollYProgress,
    [0.4, 0.62],
    [0, 1]
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative">
      <LargeContainer className="py-32 flex flex-col">
        {/* Sticky scrollable heading section */}
        <div className="relative h-[150vh]" ref={stickyRef}>
          <div className="sticky top-20 z-10 bg-white">
            <div className="max-lg:px-[6.9435vw]">
              <SectionTitle text="ABOUT US" className="text-[#272727] mb-8" />
              <AnimatedHeading
                className="text-[#272727] mb-11 w-full"
                text="We have the passion, fortitude, and ability to be disruptive."
                initialColor="#a4a4a4"
                overlayColor="#272727"
                scrollProgress={colorChangeProgress}
              />
              <BlockPattern gradientRectangle={gradientRectangle} />
            </div>
          </div>
        </div>
        <div className="flex max-lg:flex-col items-start justify-between w-full max-sm:h-fit h-[25rem] sm:aspect-[16/9] z-20 mt-32 mb-[5vw] max-lg:mb-4">
          <div className="flex lg:flex-col max-lg:justify-between max-lg:items-center max-lg:w-full z-30 lg:h-full">
            <p className="bg-white font-neue-bit pt-1.5 lg:pb-1 text-[1.875vw] max-lg:pl-[6.94vw] max-lg:text-[2.5vw] max-md:text-base text-[#636363]">
              <span className="text-[#272727]">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              /{String(cards.length).padStart(2, "0")}
            </p>
            <div className="flex lg:flex-col">
              <motion.button
                onClick={handlePrevious}
                className="h-[13vw] w-[16vw] max-lg:h-[10vw] max-lg:w-[13vw] p-[3.5vw] max-lg:p-[3vw] bg-white cursor-pointer select-none overflow-hidden"
                type="button"
                aria-label="Previous"
                whileHover="hover"
              >
                <motion.div
                  initial={{ x: 0 }}
                  variants={{
                    hover: {
                      x: "-15vw",
                      transition: { duration: 0.3, ease: "linear" },
                    },
                  }}
                  className="flex items-center"
                  style={{ gap: "6vw" }}
                >
                  <Image
                    src={arrow}
                    alt="Previous"
                    className="w-full h-full rotate-180 pointer-events-none"
                  />
                  <Image
                    src={arrow}
                    alt="Previous"
                    className="w-full h-full rotate-180 pointer-events-none"
                  />
                </motion.div>
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="h-[13vw] w-[16vw] max-lg:h-[10vw] max-lg:w-[13vw] p-[3.5vw] max-lg:p-[3vw] bg-[#e7e6e4] cursor-pointer select-none overflow-hidden"
                type="button"
                aria-label="Next"
                whileHover="hover"
              >
                <motion.div
                  initial={{ x: "-15vw" }}
                  variants={{
                    hover: {
                      x: 0,
                      transition: { duration: 0.3, ease: "linear" },
                    },
                  }}
                  className="flex items-center"
                  style={{ gap: "6vw" }}
                >
                  <Image
                    src={arrow}
                    alt="Next"
                    className="w-full h-full pointer-events-none"
                  />
                  <Image
                    src={arrow}
                    alt="Next"
                    className="w-full h-full pointer-events-none"
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
          <div className="w-full overflow-hidden h-[29.1rem] max-lg:h-full">
            <div
              className="flex w-full h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 flex-grow-0"
                >
                  <Card
                    heading={card.heading}
                    para1={card.para1}
                    para2={card.para2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center ml-[30%] mr-auto max-lg:mx-0">
          <div
            className="h-[1.7vw] max-lg:h-5 transition-all duration-1000 ease-in-out"
            style={{
              width: `${(currentIndex + 1) * 20}%`,
            }}
          >
            <Image
              src={scrollbarGradient}
              alt="scrollbar-gradient"
              className="w-full h-full"
            />
          </div>
          <span className="bg-[#38f997] w-[1.7vw] max-lg:w-5 h-[1.7vw] max-lg:h-5"></span>
        </div>
      </LargeContainer>
      <VerticalLines />
    </div>
  );
};

export default AboutUs;
