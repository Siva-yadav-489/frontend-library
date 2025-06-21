"use client";
import SmallContainer from "../SmallContainer";
import slider from "/public/websites/unifi/timeline/slider-drag.jpg";
import gradientRectangle from "/public/websites/unifi/timeline/gradientRectangle.png";
import CarouselCard from "./CarouselCard";
import { useState, useRef } from "react";
import VerticalLines from "../VerticalLines";
import SectionTitle from "../SectionTitle";
import AnimatedHeading from "../AnimatedHeading";
import BlockPattern from "../BlockPattern";
import { useScroll, useTransform } from "motion/react";

const Timeline = () => {
  const [currentYear, setCurrentYear] = useState(2018);
  // Set up scroll tracking for the sticky section
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  // Animate color change from 0 to 1 as user scrolls through the 150vh section
  const colorChangeProgress = useTransform(
    scrollYProgress,
    [0.4, 0.66],
    [0, 1]
  );

  const cards = [
    {
      year: "2018",
      work: "A staking community based on a collateralized derivative token",
    },
    {
      year: "2019",
      work: "Deployed a bridge and dex to support our multi-chain staking token",
    },
    {
      year: "2020",
      work: "Unifi Protocol launches AMM with sustainable UP rewards",
    },
    {
      year: "2021",
      work: "More blockchain partners and UNFI DAO participates in governance",
    },
    {
      year: "2022",
      work: "Advanced DeFi strategies and decentralized arbitrage solutions",
    },
  ];
  return (
    <div className="relative bg-[#272727]">
      <div className="max-lg:hidden">
        <VerticalLines lineCount={15} />
      </div>
      <div className="lg:hidden">
        <VerticalLines lineCount={6} />
      </div>
      <SmallContainer className="pt-28 pb-36 h-full w-full max-lg:px-0 pr-60">
        <div className="flex items-center md:space-x-10 aspect-3/4 w-full max-sm:max-h-[25rem] max-h-[35rem] lg:aspect-[70/35] xl:max-h-[40rem] xl:aspect-[70/40] mb-32">
          <div className="flex max-lg:flex-row-reverse h-full max-lg:w-[11rem] justify-between xl:space-x-8">
            <div className="flex flex-col justify-between h-full z-10">
              {cards.map((card) => (
                <button
                  key={card.year}
                  onClick={() => {
                    setCurrentYear(parseInt(card.year));
                  }}
                  className={`cursor-pointer text-[1.875vw] max-lg:text-[2.5vw] max-sm:text-lg font-neue-bit ${
                    currentYear === parseInt(card.year)
                      ? "text-[#38f997]"
                      : "text-white"
                  } transition-colors`}
                >
                  {card.year}
                </button>
              ))}
            </div>
            {/* slider */}
            <div className="relative h-full">
              <div className="absolute left-[0.875vw] max-md:left-[0.75rem] top-0 h-full w-px bg-[#38f997]"></div>
              <div
                className="absolute left-0 w-[1.75vw] h-[7vw] max-lg:h-[12vw] max-md:w-[1.5rem] max-md:h-[20vw] transition-all duration-1000 ease-in-out"
                style={{
                  top: `${
                    cards.findIndex(
                      (card) => parseInt(card.year) === currentYear
                    ) * 20.6
                  }%`,
                }}
              >
                <img src={slider.src} alt="slider" className="w-full h-full" />
              </div>
            </div>
          </div>
          {/* cards */}
          <div className="overflow-hidden h-full">
            <div
              className="h-full transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateY(-${
                  cards.findIndex(
                    (card) => parseInt(card.year) === currentYear
                  ) * 100
                }%)`,
              }}
            >
              {cards.map((card) => (
                <div key={card.year} className="h-full">
                  <CarouselCard year={card.year} work={card.work} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative h-[150vh]" ref={containerRef}>
          <div className="sticky top-24">
            <div className="relative max-lg:pl-[6.9439vw] max-md:px-[6.94]">
              <SectionTitle
                text="OUR FUTURE VISION"
                className="text-white mb-8"
              />
              <AnimatedHeading
                className="text-white mb-11"
                text="We're making blockchain adoption the future of finance."
                initialColor="#767270"
                overlayColor="#ffffff"
                scrollProgress={colorChangeProgress}
              />
              <BlockPattern gradientRectangle={gradientRectangle} />
            </div>
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default Timeline;
