import Image from "next/image";
import ReviewCardScroll from "./ReviewCardScroll";
import buzzing from "/public/websites/dripify/images/reviews/beesBuzz.svg";
import ReviewCard from "./ReviewCard";
import ParagraphText from "../ParagraphText";

const Reviews = () => {
  return (
    <div className="my-20 ">
      <div className="flex max-lg:flex-col max-lg:items-start justify-between items-center max-sm:mx-2 max-xl:mx-6 max-w-[74rem] mx-auto py-5">
        <div className="my-10">
          <p className="text-5xl text-black font-semibold mb-10 text-start">
            And we&apos;re creating <br className="max-lg:hidden" />
            some buzz…
          </p>
          {/* <p className="font-medium text-base text-start text-stone-500">
            Dripify helps thousands of companies in 72+ countries
            <br className="max-lg:hidden" /> automate prospecting and drive
            sales
          </p> */}
          <ParagraphText
            text={[
              " Dripify helps thousands of companies in 72+ countries",
              "automate prospecting and drive sales",
              "",
              "",
            ]}
            styling="text-start"
          />
        </div>
        <Image
          src={buzzing}
          alt="buzzing svg"
          width={300}
          height={300}
          className="max-md:hidden"
        />
      </div>
      <div className="md:hidden max-sm:max-w-screen-sm ">
        <ReviewCard />
      </div>
      <div className="my-5 max-md:hidden">
        <ReviewCardScroll scrolldirection="scroll-left" />
        <ReviewCardScroll scrolldirection="scroll-right" />
      </div>
    </div>
  );
};

export default Reviews;
