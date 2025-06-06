"use client";
import jogging from "/public/websites/health/yourJourney/jogging.avif";
import laptop from "/public/websites/health/yourJourney/laptop.avif";
import cycling from "/public/websites/health/yourJourney/cycling.avif";
import coach from "/public/websites/health/yourJourney/coach.avif";
import Card from "./Card";
import { useRef, useState } from "react";

const YourJourney = () => {
  const cards = [
    {
      id: "assessment",
      title: "01 complete assesment",
      desc: "Comprehensive testing of performance markers and biomarkers",
      bgColor: "bg-[#f4fb8c]",
      image: jogging,
    },
    {
      id: "analysis",
      title: "02 Data Analysis",
      desc: "AI-powered analysis of your complete health profile",
      bgColor: "bg-[#9091fb]",
      image: laptop,
    },
    {
      id: "protocol",
      title: "03 Custom Protocol",
      desc: "Personalized training and optimization program",
      bgColor: "bg-[#62d598]",
      image: cycling,
    },
    {
      id: "support",
      title: "04 Ongoing Support",
      desc: "Regular monitoring and protocol adjustments",
      bgColor: "bg-[#ececec]",
      image: coach,
    },
  ];

  const [activeCard, setActiveCard] = useState("assessment");
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (cardId: string) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 580; // Width of each card
    const gap = 24; // Gap between cards (space-x-6 = 1.5rem = 24px)
    const index = cards.findIndex((step) => step.id === cardId);

    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveCard(cardId);
  };

  return (
    <div className="pb-32">
      <section className="mx-32 max-lg:mx-8 max-md:mx-4">
        <h1 className="text-[58px] max-lg:text-4xl lg:leading-[58px] font-sans tracking-tighter font-bold text-white mb-8">
          YOUR JOURNEY TO
          <br />
          <span className="text-[#f4fb8c]">PEAK PERFORMANCE</span>
        </h1>
      </section>
      <section className="flex items-center border border-white rounded-full overflow-x-scroll no-scrollbar font-sans p-1 text-nowrap md:w-fit mx-32 max-lg:mx-8 max-md:mx-4 mb-14">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => scrollToCard(card.id)}
            className={`text-sm max-lg:text-xs ${
              activeCard === card.id
                ? "text-[#4b4d4a] bg-white"
                : " text-white hover:text-[#4b4d4a]"
            } rounded-full py-2 px-5`}
          >
            {card.title}
          </button>
        ))}
      </section>
      <section
        ref={containerRef}
        className="flex items-stretch space-x-5 pl-32 pr-20 md:pr-[760px] max-lg:pl-8 max-md:pl-4 overflow-auto no-scrollbar"
      >
        {cards.map((card, index) => (
          <div key={index} className="w-[250px] md:w-[590px] flex-none">
            <Card
              title={card.title.toLocaleUpperCase()}
              desc={card.desc.toLocaleUpperCase()}
              image={card.image}
              bgColor={card.bgColor}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default YourJourney;
