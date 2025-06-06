import Button from "./Button";
import FeatureCard from "./FeatureCard";
import GradientHeading from "./GradientHeading";
import OrangeHeadText from "./OrangeHeadText";
import Subtext from "./Subtext";
import filupload from "/public/websites/cogniai/images/howItWorks/file-upload.svg";
import wristwatch from "/public/websites/cogniai/images/howItWorks/wristwatch.svg";
import barchart from "/public/websites/cogniai/images/howItWorks/bar-chart.svg";
import trophy from "/public/websites/cogniai/images/howItWorks/trophy.svg";

const HowItWorks = () => {
  const featureCards = [
    {
      svg: filupload,
      heading: "Upload & Connect Seamlessly",
      subtext:
        "Easily import data from spreadsheets, databases and APIs effortlessly for seamless integration and efficient workflows.",
      styling: "max-md:col-span-2",
    },
    {
      svg: wristwatch,
      heading: "AI-Driven Processing in Real-Time",
      subtext:
        "No coding required! AI instantly cleans, analyzes and structures your data for seamless organization.",
      styling: "max-md:col-span-2",
    },
    {
      svg: barchart,
      heading: "Gain Actionable Insights Instantly",
      subtext:
        "Generate reports, visualize trends and detect patterns with AI-powered analytics",
      styling: "max-md:col-span-2",
    },
    {
      svg: trophy,
      heading: "Make Smarter, Data-Driven Decisions",
      subtext:
        "Use AI recommendations to optimize strategies, enhance decion-making, boost effeciancy and drive business growth.",
      styling: "max-md:col-span-2",
    },
  ];
  return (
    <div className=" my-20">
      <OrangeHeadText text="HOW IT WORKS" />
      <GradientHeading
        text={["Unlock the Power of Your Data", " with CogniAI", ""]}
        styling="text-start my-5"
      />
      <div className="grid grid-cols-2 place-content-between gap-8 place-items-start items-center ">
        {/* <p className="text-2xl max-sm:col-span-2 text-stone-400 font-regular my-3">
          Organize tasks, track progress and achieve more-effortlessly.
        </p> */}
        <Subtext
          text="Organize tasks, track progress and achieve more-effortlessly."
          textPosition="md:my-3 max-md:col-span-2 place-content-start text-start"
        />
        {/* <button className="text-lg max-sm:col-span-2 font-light bg-black rounded-full text-white py-4 px-7 my-3 place-self-end">
          Try AI-Powered Analysis Today
        </button> */}
        <Button
          text="Try AI-Powered Analysis Today"
          margin="md:my-3 md:place-self-end text-nowrap"
        />

        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            svg={card.svg}
            heading={card.heading}
            subtext={card.subtext}
            styling={card.styling}
          />
        ))}
        {/* <FeatureCard
          svg={wristwatch}
          heading="AI-Driven Processing in Real-Time"
          subtext="No coding required! AI instantly cleans, analyzes and structures your data for seamless organization."

        {/* <FeatureCard
          svg={filupload}
          heading=" Upload & Connect Seamlessly"
          subtext="Easily import data from spreadsheets, databases and APIs <br />
            effortlessly for seamless integration and efficient workflows."
        />
        <div className=" bg-[#f7f7f7] px-6 py-10 w-full max-md:col-span-2  rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-amber-600 size-10 bg-white rounded-full p-8 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-3xl text-black font-semibold pt-16">
            AI-Driven Processing in Real-Time
          </p>
          <p className="text-xl font-regular text-stone-400">
            No coding required! AI instantly cleans, analyzes and structures
            <br />
            your data for seamless organization.
          </p>
        </div>
        <div className=" bg-[#f7f7f7] px-6 py-10 w-full max-md:col-span-2  rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-amber-600 size-10 bg-white rounded-full p-8 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
            />
          </svg>

          <p className="text-3xl text-black font-semibold pt-16">
            Gain Actionable Insights Instantly
          </p>
          <p className="text-xl font-regular text-stone-400">
            Generate reports, visualize trends and detect patterns with AI-
            <br />
            powered analytics
          </p>
        </div>
        <div className=" bg-[#f7f7f7] px-6 py-10 w-full max-md:col-span-2  rounded-3xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-amber-600 size-10 bg-white rounded-full p-8 box-content"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
            />
          </svg>
          <p className="text-3xl text-black font-semibold pt-16">
            Make Smarter, Data-Driven Decisions
          </p>
          <p className="text-xl font-regular text-stone-400">
            Use AI recommendations to optimize strategies, enhance
            <br />
            decion-making, boost effeciancy and drive business growth.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
