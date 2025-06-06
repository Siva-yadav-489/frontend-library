import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import Container from "./Container";
import Image from "next/image";
import rightTopArrow from "/public/websites/wavespace/rightTopArrow.webp";
import image1 from "/public/websites/wavespace/ourTeam/image1.webp";
import image2 from "/public/websites/wavespace/ourTeam/image2.webp";
import image3 from "/public/websites/wavespace/ourTeam/image3.webp";
import image4 from "/public/websites/wavespace/ourTeam/image4.webp";
import image5 from "/public/websites/wavespace/ourTeam/image5.webp";
import image6 from "/public/websites/wavespace/ourTeam/image6.webp";
import image7 from "/public/websites/wavespace/ourTeam/image7.webp";
import image8 from "/public/websites/wavespace/ourTeam/image8.webp";
import image9 from "/public/websites/wavespace/ourTeam/image9.webp";
import image10 from "/public/websites/wavespace/ourTeam/image10.webp";
import image11 from "/public/websites/wavespace/ourTeam/image11.webp";
import image12 from "/public/websites/wavespace/ourTeam/image12.webp";
import image13 from "/public/websites/wavespace/ourTeam/image13.webp";
import image14 from "/public/websites/wavespace/ourTeam/image14.webp";
import image15 from "/public/websites/wavespace/ourTeam/image15.webp";
import image16 from "/public/websites/wavespace/ourTeam/image16.webp";
import image17 from "/public/websites/wavespace/ourTeam/image17.webp";
import image18 from "/public/websites/wavespace/ourTeam/image18.webp";
import * as motion from "motion/react-client";

const OurTeam = () => {
  const cardsInfo = [
    {
      image: image1,
      width: "w-[511px]",
      caption: "Team celebrating for head of design, 2022",
    },
    { image: image2, width: "w-[284px]", caption: "Working outdoors, 2023" },
    { image: image3, width: "w-[248px]", caption: "Meeting at work, 2024" },
    {
      image: image4,
      width: "w-[248px]",
      caption: " Motion & SaaS designer collaborating, 2024",
    },
    {
      image: image5,
      width: "w-[267px]",
      caption: "Behind the team's, our developers, 2024",
    },
    {
      image: image6,
      width: "w-[445px]",
      caption: " Design Team discussion meeting, taken in 2024",
    },
    {
      image: image7,
      width: "w-[307px]",
      caption: "Behind the brainchild photoshoot, 2025",
    },
    {
      image: image8,
      width: "w-[388px]",
      caption: "Team's brainstorming ideas., 2024",
    },
    { image: image9, width: "w-[267px]", caption: "Working time, 2023" },
    {
      image: image10,
      width: "w-[445px]",
      caption: "Creative brain's brainstorming, 2024",
    },
    {
      image: image11,
      width: "w-[275px]",
      caption: "Our innovative designer, 2024",
    },
    {
      image: image12,
      width: "w-[397px]",
      caption: "Co-working time photoshoot, 2024  ",
    },
    {
      image: image13,
      width: "w-[267px]",
      caption: "Product designer working time, 2024",
    },
    {
      image: image14,
      width: "w-[388px]",
      caption: "Team sharing ideas for workshop, 2024",
    },
    {
      image: image15,
      width: "w-[266px]",
      caption: "Team leader's cozy moment, 2024",
    },
    {
      image: image16,
      width: "w-[444px]",
      caption: "Sharing ideas for new creation, 2024  ",
    },
    {
      image: image17,
      width: "w-[267px]",
      caption: "Behind the play time, 2024",
    },
    {
      image: image18,
      width: "w-[290px]",
      caption: "Presentation time, taken in 2023",
    },
  ];

  // Calculate total width of one set of cards
  const totalWidth = cardsInfo.reduce((acc, card) => {
    // Extract width value from className (e.g., "w-[511px]" -> 511)
    const width = parseInt(card.width.match(/\d+/)?.[0] || "0");
    return acc + width + 16; // 16px for gap-4
  }, 0);

  return (
    <>
      <Container className="pt-32 max-md:pt-11">
        <div className="flex max-md:flex-col max-md:items-start justify-between items-end">
          <AnimatedHeading
            text={[
              "From Bangladesh - USA, your vision meets",
              "our creative team's innovation!",
            ]}
            line1Style="max-md:hidden"
            initialColor1="#c6c6c6 50%"
            targetColor1="#000 50%"
            initialColor2="#e9e8e8 50%"
            targetColor2="#29242469 50%"
          />
          <AnimatedHeading
            text={[
              "From Bangladesh - USA, your vision meets",
              "our creative team's innovation!",
            ]}
            line1Style="max-sm:text-[30px] max-sm:w-2/3 md:hidden"
            initialColor1="#c6c6c6 50%"
            targetColor1="#000 50%"
            initialColor2="#c6c6c6 50%"
            targetColor2="#000 50%"
          />
          <Button
            btnStyle="py-3.5 max-md:mt-3"
            text="Meet our team"
            textSize="text-[15px] text-white"
          >
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
          </Button>
        </div>
      </Container>
      <div className="overflow-hidden w-full">
        <motion.div
          animate={{
            x: [0, -totalWidth],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          className="flex mt-14 mb-10 pl-12 gap-4"
        >
          {/* First set of cards */}
          <div className="flex gap-4 items-start shrink-0">
            {cardsInfo.map((cardInfo, index) => (
              <div key={`first-${index}`} className="flex flex-col shrink-0">
                <div className={`${cardInfo.width}`}>
                  <Image
                    src={cardInfo.image}
                    alt={cardInfo.caption}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs font-normal mt-1.5 text-[#7e7e81]">
                  {cardInfo.caption}
                </p>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex gap-4 items-start shrink-0">
            {cardsInfo.map((cardInfo, index) => (
              <div key={`second-${index}`} className="flex flex-col shrink-0">
                <div className={`${cardInfo.width}`}>
                  <Image
                    src={cardInfo.image}
                    alt={cardInfo.caption}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs font-normal mt-1.5 text-[#7e7e81]">
                  {cardInfo.caption}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OurTeam;
