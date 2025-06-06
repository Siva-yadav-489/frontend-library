"use client";

import React, { useState } from "react";
import GlowButton from "./GlowButton";
import downArrow from "/public/websites/health/beyondGenericTraining/downArrow.svg";
import yellowArrow from "/public/websites/health/beyondGenericTraining/yellowArrow.svg";
import purpleArrow from "/public/websites/health/beyondGenericTraining/purpleArrow.svg";
import greenArrow from "/public/websites/health/beyondGenericTraining/greenArrow.svg";
import performance from "/public/websites/health/beyondGenericTraining/performance.avif";
import testing from "/public/websites/health/beyondGenericTraining/testing.webp";
import optimization from "/public/websites/health/beyondGenericTraining/optimization.avif";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
const BeyondGenericTraining = () => {
  const pathElememts = [
    {
      desc: "UNLOCK YOUR FULL POTENTIAL THROUGH ADVANCED TRAINING PROTOCOLS",
      heading: "01 PERFORMANCE",
      bgColor: "#f4fb8c",
      arrow: yellowArrow,
      content: {
        title1: "ELITE TRAINING",
        list1: [
          "AI-OPTIMIZED TRAINING PLANS",
          "RECOVERY MONITORING",
          "RACE PREPARATION",
          "PEAK PERFORMANCE TIMING",
        ],
        title2: "METABOLIC HEALTH",
        list2: [
          "SUBSTRATE UTILIZATION",
          "ENERGY SYSTEM DEVELOPMENT",
          "METABOLIC FLEXIBILITY",
          "NUTRITION TIMING",
        ],
        title3: "RECOVERY",
        list3: [
          "SLEEP OPTIMIZATION",
          "STRESS MANAGEMENT",
          "INJURY PREVENTION",
          "LONGEVITY PROTOCOLS",
        ],
        image: performance,
      },
    },
    {
      desc: "UNLOCK YOUR FULL POTENTIAL THROUGH ADVANCED TRAINING PROTOCOLS",
      heading: "02 TESTING",
      bgColor: "#9091fb",
      arrow: purpleArrow,
      content: {
        title1: "PERFORMANCE METRICS",
        list1: ["VO2 MAX", "LACTATE THRESHOLD", "POWER OUTPUT", "FATIGUE"],
        title2: "BIOMARKERS",
        list2: [
          "HORMONAL PROFILING",
          "INFLAMMATORY MARKERS",
          "NUTRIENT STATUS",
          "RECOVERY INDICATORS",
        ],
        title3: "RECOVERY",
        list3: [
          "HEART RATE VARIABILITY",
          "SLEEP ANALYSIS",
          "STRESS RESPONSE",
          "RECOVERY CAPACITY",
        ],
        image: testing,
      },
    },
    {
      desc: "UNLOCK YOUR FULL POTENTIAL THROUGH ADVANCED TRAINING PROTOCOLS",
      heading: "03 OPTIMIZATION",
      bgColor: "#62d598",
      arrow: greenArrow,
      content: {
        title1: "CONCIERGE CARE",
        list1: [
          "PROGRESS TRACKING",
          "PROTOCOL ADJUSTMENTS",
          "PRIORITY SUPPORT",
        ],
        image: optimization,
      },
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="mx-32 max-xl:mx-16 max-lg:mx-8 max-md:mx-4 mb-32">
      <div className="flex max-md:flex-col-reverse md:space-x-5 items-baseline font-sans mt-5">
        <section className="w-full md:w-1/2">
          <GlowButton adjustStyle="w-full max-md:mb-10 bg-[rgb(244,251,140)] hover:drop-shadow-[rgb(244,251,140)] drop-shadow-[#f4fb8c]/80 drop-shadow-2xl drop-shadow-xl/40 hover:drop-shadow-2xl/50" />
        </section>
        <section className="md:flex-1/2">
          <h1 className="text-[58px] max-lg:text-4xl lg:leading-[58px] tracking-tighter font-bold text-white mb-5">
            <span className="text-[#f4fb8c]">BEYOND GENERIC TRAINING –</span>
            YOUR PERSONAL PATH TO PEAK OPTIMZIATION
          </h1>
          <p className="text-lg font-medium tracking-tight text-white">
            Whether you're chasing your first sub-3 marathon or aiming to
            shatter power records, we've built the ultimate performance
            optimization system for endurance athletes.
          </p>
        </section>
      </div>
      <div className="flex-1 text-white">
        {pathElememts.map((item, index) => (
          <div key={index} className="py-8 border-b border-b-[#676767]">
            <section
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center xs:items-end cursor-pointer"
            >
              <div>
                <p className="text-[11px] mb-2 text-[#c6c6c6]">{item.desc}</p>
                <h1
                  className="text-[58px] max-md:text-4xl leading-[58px] tracking-tighter font-bold font-sans"
                  style={{
                    color: openIndex === index ? item.bgColor : "white",
                  }}
                >
                  {item.heading}
                </h1>
              </div>
              <div className="h-[65px] max-xs:h-11 overflow-hidden flex flex-col cursor-pointer">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: openIndex === index ? -57 : 0 }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="flex flex-col"
                >
                  <Image
                    src={downArrow}
                    alt="downarrow"
                    className="max-xs:mb-2"
                  />
                  <Image src={item.arrow} alt="coloredarrow" />
                </motion.div>
              </div>
            </section>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-5"
                >
                  <div
                    className="flex max-md:flex-col justify-between h-fit p-1 rounded-4xl"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-y-3 place-content-between tracking-tighter max-md:px-4 px-9 py-10 w-full">
                      <section>
                        <h1 className="text-[11px] text-[#73764d]">
                          {item.content.title1}
                        </h1>
                        <ul className="text-black font-sans font-semibold mt-2 text-[22px] leading-tight">
                          {item.content.list1.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h1 className="text-[11px] text-[#73764d]">
                          {item.content.title2}
                        </h1>
                        <ul className="text-black font-sans font-semibold mt-2 text-[22px] leading-tight">
                          {item.content.list2?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </section>
                      <section>
                        <h1 className="text-[11px] text-[#73764d]">
                          {item.content.title3}
                        </h1>
                        <ul className="text-black font-sans font-semibold mt-2 text-[22px] leading-tight">
                          {item.content.list3?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    </div>
                    <div className="lg:max-w-[300px] xl:max-w-[400px] lg:max-h-fit">
                      <Image
                        src={item.content.image}
                        alt={item.heading}
                        className="lg:max-h-[450px] h-full rounded-4xl object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeyondGenericTraining;
