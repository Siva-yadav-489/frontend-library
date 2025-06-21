"use client";
import React, { useRef } from "react";
import HexagonCard from "./HexagonCard";
import binance from "/public/websites/unifi/partnerships/binance.svg";
import ethereum from "/public/websites/unifi/partnerships/ethereum.svg";
import polygon from "/public/websites/unifi/partnerships/polygon.svg";
import avax from "/public/websites/unifi/partnerships/avax.svg";
import harmonyOne from "/public/websites/unifi/partnerships/harmony-one.svg";
import gradientRectangle from "/public/websites/unifi/partnerships/gradientRectangle.png";
import SectionTitle from "../SectionTitle";
import SectionHeading from "../SectionHeading";
import BlockPattern from "../BlockPattern";
import VerticalLines from "../VerticalLines";
import { useScroll, useTransform } from "motion/react";

const Partnerships = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 0.7], [0.85, 1]);

  return (
    <div
      ref={containerRef}
      className="flex max-lg:flex-col-reverse items-center justify-between relative pb-24 overflow-x-hidden"
    >
      <VerticalLines />
      <div className="lg:basis-1/2 max-lg:px-[6.94vw] flex flex-col relative">
        <div className="-space-y-[5.8vw] max-lg:-space-y-[9.7vw]">
          {/* Row 1 */}
          <section className="flex items-center">
            <HexagonCard cryptoImage={binance} scale={backgroundScale} />
          </section>

          {/* Row 2 */}
          <section className="flex items-center">
            {/* Empty half hexagon space */}
            <div className="w-[10vw] max-lg:w-[17.2vw]"></div>

            <HexagonCard cryptoImage={ethereum} scale={backgroundScale} />
            <HexagonCard cryptoImage={polygon} scale={backgroundScale} />
          </section>

          {/* Row 3 */}
          <section className="flex items-center">
            <HexagonCard cryptoImage={avax} scale={backgroundScale} />
            <HexagonCard cryptoImage={harmonyOne} scale={backgroundScale} />
          </section>
        </div>
      </div>

      <div className="sm:basis-1/2 max-sm:w-full max-lg:w-2/3 flex flex-col max-lg:items-center max-sm:px-[6.94vw] px-24 pr-28">
        <SectionTitle
          text="PARTNERSHIPS"
          className="mb-11 max-lg:text-center"
        />
        <SectionHeading text={["Developing with the Best"]} className="mb-16" />
        <BlockPattern gradientRectangle={gradientRectangle} />
      </div>
    </div>
  );
};

export default Partnerships;
