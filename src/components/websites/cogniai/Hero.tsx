import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="text-[5rem] max-xl:text-7xl max-lg:text-6xl max-sm:text-5xl leading-tight text-black font-regular text-center mt-8 tracking-tight">
        Turn Raw Data into <br className="max-lg:hidden" /> Actionable Insights
        - Instantly
      </h1>
      <p className="text-base text-center text-stone-500 mt-10 font-regular">
        Harness AI-driven analysis to tranform complex data into clear,
        actionable insights. No coding required, just results.
      </p>

      <Button text="Get Started for Free" margin="my-8" />
    </div>
  );
};

export default Hero;
