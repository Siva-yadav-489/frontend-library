import BlockPattern from "../BlockPattern";
import LargeContainer from "../LargeContainer";
import SectionHeading from "../SectionHeading";
import SectionTitle from "../SectionTitle";
import VerticalLines from "../VerticalLines";
import Carousel from "./Carousel";
import gradientRectangle from "/public/websites/unifi/challengingStandards/gradientRectangle.png";

const ChallengingStandards = () => {
  return (
    <div className="w-full relative pb-32">
      <div className="relative min-h-screen">
        <LargeContainer className="absolute inset-x-0 py-28 max-md:pb-0 space-y-8 max-lg:px-[6.9439vw]">
          <SectionTitle text="CHALLENGING STANDARDS" />
          <SectionHeading
            text={["It's Time for a", "Blockchain Revolution"]}
            className="text-[#252d29] pb-5 tracking-tight"
          />
          <BlockPattern gradientRectangle={gradientRectangle} />
          <div className="flex justify-center max-lg:justify-start">
            <p className="text-[clamp(16px,1.2vw,25px)] tracking-tight font-medium w-[48%] max-lg:w-[68%] max-md:w-[85%] text-[#252d29] ">
              What if blockchain adoption didn&apos;t mean crypto adoption? A
              stablecoin as our gas token removes transaction volatility and
              speculation. We are creating the next class of blockchain, built
              on the principle of economic sustainability.
            </p>
          </div>
        </LargeContainer>
      </div>
      <div className="relative">
        <Carousel />
      </div>
      <VerticalLines />
    </div>
  );
};

export default ChallengingStandards;
