import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import Container from "./Container";
import Image from "next/image";
import rightTopArrow from "/public/websites/wavespace/rightTopArrow.webp";
import image1 from "/public/websites/wavespace/turnYourIdeas/image1.webp";
import image2 from "/public/websites/wavespace/turnYourIdeas/image2.webp";
import image3 from "/public/websites/wavespace/turnYourIdeas/image3.webp";
import image4 from "/public/websites/wavespace/turnYourIdeas/image4.webp";
import image5 from "/public/websites/wavespace/turnYourIdeas/image5.webp";
import image6 from "/public/websites/wavespace/turnYourIdeas/image6.webp";

const TurnYourIdeas = () => {
  const cards = [
    {
      image: image1,
      title: "Spacebook - Business Accounting dashboard design",
      description: "Web Design • Visual Identity • SaaS Dashboard",
    },
    {
      image: image2,
      title: "Kodezi - AI-powered code generator",
      description: "SaaS Web Design • Branding • Design System",
    },
    {
      image: image3,
      title: "Quicky - Mobile finance app design",
      description: "User Research • UI UX Design • Workflow",
    },
    {
      image: image4,
      title: "Solon - Crypto trading platform UX",
      description: "UI/UX Design • Branding • Design System",
    },
    {
      image: image5,
      title: "BetterAI - AI all in one booking app",
      description: "App Design • Saas • UX Design",
    },
    {
      image: image6,
      title: "Openhub - CRM & customer analytics dashboard",
      description: "SaaS • Dashboard • Web Design",
    },
  ];
  return (
    <div>
      <Container className="pt-16 max-sm:pt-5 pb-32 max-sm:pb-11">
        <div className="flex max-md:flex-col max-md:items-start justify-between items-end">
          <AnimatedHeading
            text={["Turn your ideas into impactful", "solutions like them!"]}
            line1Style="max-md:hidden"
            initialColor1="#c6c6c6 50%"
            targetColor1="#000 50%"
            initialColor2="#e9e8e8 50%"
            targetColor2="#29242469 50%"
          />
          <AnimatedHeading
            text={["Turn your ideas into ", "impactful solutions!"]}
            line1Style="md:hidden max-sm:text-3xl max-sm:leading-11"
            initialColor1="#c6c6c6 50%"
            targetColor1="#000 50%"
            initialColor2="#c6c6c6 50%"
            targetColor2="#000 50%"
          />
          <Button
            btnStyle="py-3.5 max-md:py-3 max-md:mt-4"
            text="Start your project"
            textSize="text-[15px] max-md:text-[14px] text-white"
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
        <div className="grid grid-cols-2 gap-8 mt-16 max-md:mt-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-start max-md:col-span-2"
            >
              <Image
                src={card.image}
                alt={card.title}
                className="w-full max-h-[26.3rem] object-contain max-md:object-cover"
              />
              <div className="mt-2">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TurnYourIdeas;
