import Image from "next/image";
import person1 from "/public/websites/cogniai/images/usecase/marketingTeams/person1.jpeg";
import person2 from "/public/websites/cogniai/images/usecase/marketingTeams/person2.jpeg";
import OrangeHeadText from "./OrangeHeadText";
import GradientHeading from "./GradientHeading";
import Subtext from "./Subtext";
import Button from "./Button";

const Testimonial = () => {
  return (
    <div className="my-20">
      <OrangeHeadText text="TESTIMONIAL" styling="text-start" />

      <GradientHeading
        text={[" What Our Customers Say About ", "Their Experiance"]}
        styling="text-start my-3"
      />
      <div className="grid grid-cols-2 place-content-between gap-10 place-items-start items-center ">
        <Subtext
          text="Genuine feedback showcasing real success and customer satisfaction"
          textPosition="text-start max-md:col-span-2"
        />

        <Button
          text="See All Testimonials"
          margin="md:place-self-end text-nowrap"
        />
        <div className="col-span-2 bg-[#f9f9f9] rounded-2xl flex max-lg:flex-col max-sm:p-2 p-5 w-full">
          <Image
            src={person1}
            alt="img"
            className="w-80 h-80 sm:mr-4 rounded-xl"
          />
          <div className="flex flex-col justify-between items-start">
            <p className="text-3xl max-sm:text-2xl max-sm:my-3 font-medium text-black">
              With CogniAI, we transformed raw data into actionable
              <br className="max-lg:hidden" />
              insights, improving productivity,streamlining processes and
              <br className="max-lg:hidden" />
              &nbsp;enhancing strategic planning.
            </p>
            <p className="text-xl font-regular text-black">
              Daniel Pierce
              <br />{" "}
              <span className="text-lg font-light text-stone-400">
                CEO Kiera.io
              </span>
            </p>
          </div>
          <p className="text-5xl text-black font-semibold place-self-end sm:p-2 max-md:place-self-start">
            100% <br />{" "}
            <span className="text-lg font-regular">
              Verified Customer Testimonials
            </span>
          </p>
        </div>
        <div className="col-span-2 bg-[#f9f9f9] rounded-2xl flex max-lg:flex-col max-sm:p-2 p-5 w-full">
          <Image
            src={person2}
            alt="img"
            className="w-80 h-80 sm:mr-4 rounded-xl"
          />
          <div className="flex flex-col justify-between items-start">
            <p className="text-3xl max-sm:text-2xl max-sm:my-3 font-medium text-black">
              From raw data to real results, CogniAI boosts productivity,
              <br className="max-lg:hidden" />
              Optimizes operations andempowers smarter, datad-driven
              <br className="max-lg:hidden" />
              business decisions with unmatched efficiency.
            </p>
            <p className="text-xl font-regular text-black">
              Saviera Joel
              <br />{" "}
              <span className="text-lg font-light text-stone-400">
                Founder Lokalane.com
              </span>
            </p>
          </div>
          <p className=" text-5xl text-black font-semibold place-self-end max-md:place-self-start">
            7x <br />{" "}
            <span className="text-lg font-regular">
              Faster, Smarter and Better!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
