import Image from "next/image";
import dotsvg from "/public/websites/dripify/images/hero/dot-svg.svg";
import Navbar from "./Navbar";
import Button from "../Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col relative rounded-3xl bg-[#6349f8] mx-6 max-lg:mx-2 h-1/2 max-xs:pb-28 max-sm:pb-32 max-md:pb-64 max-lg:pb-80 pb-96 mb-10">
        <Navbar />
        <div className="flex justify-center ">
          <Image
            width="309"
            height="32"
            alt="1000+ reviews"
            src="https://dripify.io/wp-content/uploads/2023/11/reviews.svg"
            className="max-sm:w-9/10"
          />
        </div>
        <p className="text-center max-sm:text-start max-sm:mx-4 max-sm:text-5xl max-sm:leading-none text-7xl leading-20 font-bold text-white my-8">
          You Only Need a Single <br className="max-md:hidden" /> Tool to Crush
          Sales
        </p>
        <p className="text-white text-lg font-medium max-sm:mx-4 mt-1 mb-4 text-center">
          Reach hundreds of prospects per day on LinkedIn & through{" "}
          <br className="max-sm:hidden" /> Email and close more deals on
          complete autopilot
        </p>
        <div className="flex items-center justify-between max-sm:w-11/12 max-lg:w-4/6 max-xl:w-3/7 xl:w-2/6 mx-auto mt-5 p-2 bg-white rounded-xl">
          <input
            type="email"
            placeholder="Enter your work email"
            className="text-stone-900 font-medium p-3"
          />
          <Button
            text={"Start now"}
            colors={"text-white bg-black max-xl:hidden"}
          />
          <button className="xl:hidden p-3 rounded-lg text-white bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between max-sm:w-11/12 max-lg:w-4/6 max-xl:w-3/7 xl:w-2/6 mx-auto mb-10 max-md:mt-2 max-md:justify-center">
          <p className="flex items-center text-white text-nowrap font-medium text-sm max-xs:text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mr-2 my-3 max-md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            One Minute Setup
          </p>
          <Image
            src={dotsvg}
            alt="dot"
            width={5}
            height={5}
            className="md:hidden mx-1 max-xs:w-0.5 max-xs:mx-0.5"
          />
          <p className="flex items-center text-white text-nowrap font-medium text-sm max-xs:text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mr-2 my-3 max-md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            7-Day Free Trial
          </p>
          <Image
            src={dotsvg}
            alt="dot"
            width={5}
            height={5}
            className="md:hidden mx-1 max-xs:w-0.5 max-xs:mx-0.5"
          />
          <p className="flex items-center text-white text-nowrap font-medium text-sm max-xs:text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mr-2 my-3 max-md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            No Credit Card Required
          </p>
        </div>
      </div>
      <div className="flex justify-center absolute  sm:mt-10 top-[45rem] max-[370px]:top-[52rem] mx-auto w-full">
        <video
          autoPlay
          loop
          muted
          src="https://dripify.io/wp-content/uploads/2023/12/Automate-LinkedIn-compreessed.mp4"
          playsInline
          preload="metadata"
          className="rounded-xl lg:w-4xl max-md:w-11/12 w-4/5 shadow-xl mb-10"
        ></video>
      </div>
    </>
  );
};

export default Hero;
