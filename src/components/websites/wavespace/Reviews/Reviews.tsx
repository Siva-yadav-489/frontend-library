"use client";
import AnimatedHeading from "../AnimatedHeading";
import Container from "../Container";
import person1 from "/public/websites/wavespace/reviews/person1.webp";
import person2 from "/public/websites/wavespace/reviews/person2.webp";
import person3 from "/public/websites/wavespace/reviews/person3.webp";
import person4 from "/public/websites/wavespace/reviews/person4.webp";
import clutch from "/public/websites/wavespace/reviews/clutch.webp";
import upwork from "/public/websites/wavespace/reviews/upwork.webp";
import fiverrPro from "/public/websites/wavespace/reviews/fiverrPro.webp";
import ReviewCard from "./ReviewCard";
import ratingStar from "/public/websites/wavespace/reviews/ratingStar.webp";
import Image from "next/image";
import { motion, useAnimation } from "motion/react";
import { useState } from "react";

const Reviews = () => {
  const reviewsInfo = [
    {
      company: "Kodezi",
      review: [
        "“Wavespace very ",
        "reliable",
        " at all times and we have enjoyed working & designs are ",
        "truly impressive",
      ],
      image: person1,
      name: "Israqh Khan",
      designation: "CEO",
    },
    {
      company: "tournated",
      review: [
        " ",
        "“Highly happy",
        " with a design delivered by Wavespace. ",
        "Definitely will keep working",
        " with Wavespace. Great and quality smooth communicaton.",
      ],
      image: person2,
      name: "Nick Fisher",
      designation: "CEO",
    },
    {
      company: "ActiveSync",
      review: [
        "“Wavespace brought my",
        " idea to life. ",
        "Taken great care of my business & implement",
        " best user experience",
        " possible",
      ],
      image: person3,
      name: "Abraham Ajayi",
      designation: "CEO",
    },
    {
      company: "Luxura",
      review: [
        "Very professional,",
        " top notch communication",
        " & absolute pleasure to work. Super satisfied with results.",
        " Highly recommended",
        "!",
      ],
      image: person4,
      name: "Danny P",
      designation: "Director of Sales",
    },
    {
      company: "Kodezi",
      review: [
        "“Wavespace very ",
        "reliable",
        " at all times and we have enjoyed working & designs are ",
        "truly impressive",
      ],
      image: person1,
      name: "Israqh Khan",
      designation: "CEO",
    },
    {
      company: "tournated",
      review: [
        "“Highly happy",
        " with a design delivered by Wavespace. ",
        "Definitely will keep working",
        " with Wavespace. Great and quality smooth communicaton",
      ],
      image: person2,
      name: "Nick Fisher",
      designation: "CEO",
    },
    {
      company: "ActiveSync",
      review: [
        "Wavespace brought my",
        " idea to life.",
        " Taken great care of my business & implement",
        " best user experience",
        " possible",
      ],
      image: person3,
      name: "Abraham Ajayi",
      designation: "CEO",
    },
    {
      company: "Luxura",
      review: [
        "Very professional,",
        " top notch communication",
        " & absolute pleasure to work. Super satisfied with results.",
        " Highly recommended",
        "!",
      ],
      image: person4,
      name: "Danny P",
      designation: "Director of Sales",
    },
  ];

  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % 7;
    setCurrentIndex(nextIndex);
    const padding = window.innerWidth >= 1024 ? 80 : 8;
    const cardWidth = window.innerWidth >= 768 ? 250 : 280;
    controls.start({
      x: -(cardWidth * nextIndex) - padding * nextIndex,
      transition: { duration: 0.3, ease: "linear" },
    });
  };

  return (
    <div className="bg-[#f0f0f0] pt-32 max-lg:pt-16 pb-16">
      <Container>
        <div className="max-md:hidden">
          <AnimatedHeading
            text={[
              "Find your best design into us.",
              "We guarantee next success is yours!",
            ]}
            initialColor1="#b5b5b5 50%"
            targetColor1="#000 50%"
            initialColor2="#d9d8d8 50%"
            targetColor2="#29242469 50%"
          />
        </div>
        <div className="md:hidden">
          <AnimatedHeading
            text={["We guarantee next ", "success is yours!"]}
            line1Style="max-md:text-[28px] max-md:leading-9"
            initialColor1="#b5b5b5 50%"
            targetColor1="#000 50%"
            initialColor2="#b5b5b5 50%"
            targetColor2="#000 50%"
          />
        </div>
      </Container>

      <div className="mt-14 max-md:mt-7 overflow-hidden">
        <motion.div
          onClick={handleClick}
          animate={controls}
          className="flex cursor-pointer px-40 max-lg:px-4"
        >
          <div className="flex">
            <div className="flex-shrink-0 max-md:w-[250px] flex flex-col items-center justify-between px-7 pt-7 pb-9 bg-white border-r border-[#f0f0f0]">
              <div className="w-80 max-md:w-48 flex flex-col my-auto items-center">
                <p className="text-[90px] leading-20 mb-5 max-md:mb-0 max-md:text-[44px] font-extrabold text-[#b9b9b9]">
                  4.9
                </p>
                <section className="flex space-x-0.5 mb-1">
                  {Array.from({ length: 5 }, (_, i) => i).map((index) => (
                    <Image
                      key={index}
                      src={ratingStar}
                      alt="ratingStar"
                      className="w-[22px] h-[22px] max-md:w-3.5 max-md:h-3.5"
                    />
                  ))}
                </section>
                <p className="text-base max-md:text-[11px] max-md:tracking-wider font-semibold text-[#7e7e81]">
                  200+ reviews
                </p>
              </div>
              <div className="flex justify-center items-center space-x-4 mb-2 md:mt-2">
                <Image
                  src={clutch}
                  alt="clutch"
                  className="w-[65px] max-md:w-[50px]"
                />
                <Image
                  src={upwork}
                  alt="upwork"
                  className="w-[65px] max-md:w-[50px]"
                />
                <Image
                  src={fiverrPro}
                  alt="fiver"
                  className="w-[65px] max-md:w-[50px]"
                />
              </div>
            </div>
            {reviewsInfo.map((reviewInfo, index) => (
              <div key={index} className="flex-shrink-0 w-96 max-md:w-[250px]">
                <ReviewCard
                  company={reviewInfo.company}
                  review={reviewInfo.review ?? []}
                  image={reviewInfo.image}
                  name={reviewInfo.name}
                  designation={reviewInfo.designation}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center mt-10">
        {Array.from({ length: 7 }, (_, i) => i).map((index) => (
          <motion.button
            onClick={handleClick}
            key={index}
            className={`${
              index === currentIndex ? "bg-[#1b1b1b]" : "bg-[#2226]"
            } h-3.5 w-3.5 mx-[3px] rounded-full`}
          ></motion.button>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
