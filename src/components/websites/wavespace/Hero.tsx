import React from "react";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import rightTopArrow from "/public/websites/wavespace/rightTopArrow.webp";
import person1 from "/public/websites/wavespace/hero/person1.webp";
import person2 from "/public/websites/wavespace/hero/person2.webp";
import person3 from "/public/websites/wavespace/hero/person3.webp";
import linkedinIcon from "/public/websites/wavespace/hero/linkedinIcon.webp";
import clutchLogo from "/public/websites/wavespace/hero/clutchLogo.svg";
import { Roboto } from "next/font/google";
import * as motion from "motion/react-client";
import { StaticImageData } from "next/image";
import Popover from "./Popover";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Hero = () => {
  const people = [
    {
      image: person1,
      name: "Israqh Khan",
      designation: "CEO @Kodezi",
      linkedin: "",
    },
    {
      image: person2,
      name: "Scott Zimmerman",
      designation: "Founder & CEO @Tournated",
      linkedin: "",
    },
    {
      image: person3,
      name: "Matt Kabus",
      designation: "CEO & Founder @LifeTales",
      linkedin: "",
    },
  ];
  return (
    <>
      <Container className="pt-20 max-lg:pt-10 pb-5">
        <div className="flex max-lg:flex-col justify-between max-lg:items-start items-end">
          <div className="text-[65px] max-xl:text-[52px] max-sm:text-4xl max-sm:leading-11 basis-2/3 max-xl:max-w-[600px] max-xl:leading-16 leading-20 font-extrabold">
            Global UI UX design agency digital partner for{" "}
            <span className="inline-block relative h-[1.2em] max-sm:h-[1.1em] overflow-hidden -mb-1">
              <motion.span
                initial={{ y: 0 }}
                animate={{
                  y: [
                    "0%",
                    "-25%",
                    "-25%",
                    "-50%",
                    "-50%",
                    "-75%",
                    "-75%",
                    "-100%",
                    "-100%",
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="flex flex-col h-[400%] lg:h-[385%]"
              >
                <span className="h-[1.2em] max-sm:h-[1.1em] bg-[linear-gradient(90deg,#ff9b55,#ff2cc0_32%,#3f2fee_99%)] bg-clip-text text-transparent">
                  future unicorns.
                </span>
                <span className="h-[1.2em] max-sm:h-[1.1em] bg-[linear-gradient(90deg,#3f2fee,#ce2ecc_40%,#ff717e)] bg-clip-text text-transparent">
                  startups.
                </span>
                <span className="h-[1.2em] max-sm:h-[1.1em] bg-[linear-gradient(270deg,#369698,#425ac1_51%,#ff36b7)] bg-clip-text text-transparent">
                  AL/ML solutions.
                </span>
                <span className="h-[1.2em] max-sm:h-[1.1em] bg-[linear-gradient(90deg,#379599,#8247e5_35%,#b591f0)] bg-clip-text text-transparent">
                  SaaS companies.
                </span>
                <span className="h-[1.2em] max-sm:h-[1.1em] bg-[linear-gradient(90deg,#ff9b55,#ff2cc0_32%,#3f2fee_99%)] bg-clip-text text-transparent">
                  future unicorns.
                </span>
              </motion.span>
            </span>
          </div>
          <div className="flex flex-col justify-center max-w-[340px] max-lg:mt-3 lg:pl-5">
            <p className="text-black text-base font-semibold max-sm:text-[15px]">
              We deliver globally UI, UX & web design smoothly, without delay,
              saving your time and money with an efficient process.
            </p>
            <div className="flex space-x-3 max-lg:hidden items-center justify-start self-start ml-5 mt-10">
              <Popover people={people} />
              <p className="text-[10px] font-semibold">
                Loved by 500+ <br />
                Founders
              </p>
              <div className="flex items-center space-x-2">
                <Image
                  src={clutchLogo}
                  alt="clutchLogo"
                  className="w-[34px] h-[34px]"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        className="w-[15px]"
                      >
                        <title>Star</title>
                        <g data-name="Layer 2">
                          <path
                            d="m5.94 9.38-3.11 1.88a.5.5 0 0 1-.75-.54l.83-3.53L.17 4.81a.5.5 0 0 1 .29-.87l3.6-.31L5.48.3a.5.5 0 0 1 .92 0l1.41 3.33 3.61.31a.49.49 0 0 1 .28.87L9 7.19l.82 3.53a.5.5 0 0 1-.74.54Z"
                            data-name="Layer 1"
                            fill="#e62415"
                          />
                        </g>
                      </svg>
                    ))}
                  </div>
                  <p
                    className={`text-[13px] tracking-wider text-[#6a797e] ${roboto.className}`}
                  >
                    8 REVIEWS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          btnStyle="py-3 sm:hidden  mt-6"
          textSize="text-[14px] text-white"
          arrowAnimation={false}
        >
          <Image
            src={rightTopArrow}
            alt="rightTopArrow"
            className="w-2.5 relative"
          />
        </Button>
        <div className="flex space-x-4 mt-14 max-lg:mt-8 max-sm:hidden">
          <Button
            btnStyle="bg-black py-4.5"
            hoverColor="bg-[#3f2fee]"
            text="Book a strategy call"
            textSize="text-[16px] text-white"
            children={
              <>
                <Image
                  src={rightTopArrow}
                  alt="rightTopArrow"
                  className="w-3 box-content bg-transparent absolute top-1.5 right-1.5 shrink-0"
                />
                <Image
                  src={rightTopArrow}
                  alt="rightTopArrow"
                  className="w-3 box-content bg-transparent absolute bottom-1.5 left-1.5 shrink-0"
                />
              </>
            }
          />
          <Button
            btnStyle="bg-white text-black py-4.5 outline outline-black"
            hoverColor="bg-[#ebfe5b]"
            text="Get a custom quote"
            textSize="text-[16px] text-black"
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
