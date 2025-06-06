"use client";
import girlingym from "/public/websites/health/unlockYourPotential/girlingym.webp";
import { motion, useSpring, useInView } from "motion/react";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const UnlockYourPotential = () => {
  const { scrollY } = useScroll();
  const zoom = useTransform(scrollY, [100, 1000], [2, 1]);

  const [recoveryValue, setRecoveryValue] = useState(0);
  const [percentageValue, setpercentageValue] = useState(0);

  const recovery = useSpring(0, {
    duration: 1000,
  });

  const percentage = useSpring(0, {
    duration: 2000,
    stiffness: 50,
    damping: 15,
  });

  recovery.on("change", (value) => {
    setRecoveryValue(Math.round(value));
  });

  percentage.on("change", (value) => {
    setpercentageValue(Math.round(value));
  });

  const metricsRef = useRef(null);
  const isInView = useInView(metricsRef);

  useEffect(() => {
    if (isInView) {
      recovery.set(3);
      percentage.set(88);
    } else {
      recovery.set(0);
      percentage.set(0);
    }
  }, [isInView, recovery, percentage]);

  const metrics = [
    "TRAIN SMARTER",
    "RECOVER FASTER",
    "MAINTAIN PEAK PERFORMANCE",
    "FUTURE PROOF YOUR BODY",
  ];
  return (
    <div className="flex max-md:flex-col mx-[60px] max-lg:mx-4 md:space-x-5 max-md:space-y-5 mb-24 font-sans">
      <div className="md:w-1/2 flex flex-col justify-between max-lg:h-[100vh] max-md:space-y-10 h-[135vh] bg-white rounded-4xl p-[72px] max-lg:py-14 max-md:py-14 max-lg:px-8 max-md:p-5 max-md:h-auto">
        <div className="flex flex-col justify-between text-black max-md:space-y-5 space-y-10">
          <section>
            <h1 className="text-[58px] max-lg:text-4xl lg:leading-[58px] tracking-tighter font-bold">
              UNLOCK YOUR POTENTIAL
            </h1>
            <p className="text-lg tracking-tight text-[#5e605d]">
              Your body is capable of extraordinary things
            </p>
          </section>
          <section>
            <h1 className="text-[58px] max-lg:text-4xl lg:leading-[58px] tracking-tighter font-bold">
              {recoveryValue}X
            </h1>
            <p className="text-lg tracking-tight text-[#5e605d]">
              Your recovery and sleep performance
            </p>
          </section>
          <section>
            <h1 className="text-[58px] max-lg:text-4xl lg:leading-[58px] tracking-tighter font-bold">
              ↑ {percentageValue}%
            </h1>
            <p className="text-lg tracking-tight text-[#5e605d]">
              Future proof your body
            </p>
          </section>
          <section className="font-bold text-lg" ref={metricsRef}>
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{metric}</p>
              </div>
            ))}
          </section>
        </div>
        <section>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-[58px] max-lg:text-4xl lg:leading-[58px] tracking-tighter font-bold"
          >
            <span className="text-[#c6c6c6]"> THAT&apos;S WHY</span> <br />
            OPTIMIZATION <br />
            MATTERS
          </motion.p>
        </section>
      </div>
      <div className="md:w-1/2">
        <motion.img
          src={girlingym.src}
          alt="girlingym"
          className="w-full max-lg:h-[100vh] h-[135vh] max-md:h-auto rounded-4xl object-cover object-center"
          style={{ zoom }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default UnlockYourPotential;
