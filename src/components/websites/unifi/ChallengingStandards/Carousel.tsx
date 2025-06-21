"use client";
import LargeContainer from "../LargeContainer";
import CarouselCard from "./CarouselCard";
import Image from "next/image";
import arrow from "/public/websites/unifi/challengingStandards/arrow.svg";
import { useState } from "react";
import SmallContainer from "../SmallContainer";
import { motion } from "motion/react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navItems = ["DEFI", "CROSS CHAIN", "GOVERNANCE", "GAS"];

  const carouselCards = [
    {
      heading: "Sustainable DeFi",
      para1:
        "Our DeFi Exchange operates on over 10 blockchains. Our liquidity provider reward token is a native backed token, unique to each blockchain our solution operates on.",
      para2:
        "This token becomes less speculative and provides value to becoming a liquidity provider.",
    },
    {
      heading: "Wrapperless Bridge",
      para1:
        "Our bridge is unique in that we do not wrap UNFI when it is bridged between our supported blockchains.",
      para2:
        "When you bridge UNFI to another blockchain, you receive the native UNFI on each chain.",
    },
    {
      heading: "MultiChain UNFI DAO",
      para1:
        "UNFI token holders are granted exclusive access to Proposals and Referendums",
      para2:
        "to propose or vote on Unifi governance actions across multiple blockchains.",
    },
    {
      heading: "Gas Fees are Broken",
      para1:
        "The future of blockchain technology will utilize stablecoins as their native tokens, finally putting an end to the misery that is gas tokens.",
      para2:
        "And not just any stablecoin, but one that is 100% backed by a proven and sustainable algorithm.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselCards.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === carouselCards.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative">
      <SmallContainer className="relative max-lg:hidden">
        <div className="text-[#252d29]  font-medium items-start space-y-11 mt-8 flex flex-col absolute top-0 left-auto z-20">
          {navItems.map((item, index) => (
            <div key={item} className="relative w-[11.5vw]">
              <button
                onClick={() => setCurrentIndex(index)}
                className={`transition-colors duration-200 cursor-pointer text-[1.2vw] max-lg:text-[1.5vw] max-sm:text-[4vw] ${
                  currentIndex === index ? "text-[#252d29]" : "text-[#252d2966]"
                }`}
              >
                {item}
              </button>
              {currentIndex === index && (
                <div className="mt-1">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-[#38f997]" />
                  <div className="absolute bottom-px right-0 w-5 h-5 bg-[#38f997]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </SmallContainer>
      <LargeContainer className="relative mt-11">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out relative"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselCards.map((carousel, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <CarouselCard
                  heading={carousel.heading}
                  para1={carousel.para1}
                  para2={carousel.para2}
                />
              </div>
            ))}
          </div>
          <div className="flex space-x-2 absolute top-2 left-2 lg:hidden z-30">
            {carouselCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3.5 h-3.5 transition-colors duration-200 cursor-pointer ${
                  currentIndex === index ? "bg-[#38f997]" : "bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex lg:flex-col absolute top-0 right-0 h-fit z-10">
            <motion.button
              onClick={handlePrevious}
              className="h-[13vw] w-[16vw] flex overflow-hidden max-lg:h-[10vw] max-lg:w-[13vw] p-[3.5vw] max-lg:p-[3vw] bg-white transition-colors cursor-pointer"
              type="button"
              aria-label="Previous slide"
              whileHover="hover"
            >
              <motion.div
                initial={{ x: 0 }}
                variants={{
                  hover: {
                    x: "-12vw",
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
              className="h-[13vw] w-[16vw] flex overflow-hidden max-lg:h-[10vw] max-lg:w-[13vw] p-[3.5vw] max-lg:p-[3vw] bg-[#e7e6e4] transition-colors cursor-pointer"
              type="button"
              aria-label="Next slide"
              whileHover="hover"
            >
              <motion.div
                initial={{ x: "-12vw" }}
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
      </LargeContainer>
    </div>
  );
};

export default Carousel;
