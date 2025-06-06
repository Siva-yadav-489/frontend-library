import Image from "next/image";
import Button from "./Button";
import signupImage from "/public/websites/dripify/images/signupAtBottom/cta-rocket.svg";

const SignupAtBottom = () => {
  return (
    <div className="flex max-md:flex-col max-sm:flex-col justify-around items-center mx-6 max-lg:mx-2 py-10 rounded-3xl mb-5  bg-[#6349f8]">
      <Image
        width="640"
        height="493"
        alt="Skyrocket your sales results with our game-changing prospecting software"
        src={signupImage}
        className="max-lg:w-3/5"
      />
      <div className="flex flex-col items-start max-md:items-center">
        <p className="text-5xl max-xl:text-4xl max-md:text-3xl max-md:w-7/12 max-sm:w-10/12 font-bold text-white mb-10">
          Try out a smarter way <br className="max-lg:hidden" />
          to crush sales - all
          <br className="max-lg:hidden" />
          &nbsp;automated
        </p>
        <p className="text-base max-md:w-7/12 max-sm:w-10/12 font-medium text-white mb-10">
          Kickstart your sales outreach campaign today and see{" "}
          <br className="max-lg:hidden" />
          your first results in less than 48 hours, while enjoying your
          <br className="max-lg:hidden" />
          free trial
        </p>
        <div className="flex items-center justify-between w-11/12 max-md:w-7/12 max-sm:w-10/12 mt-5 p-2 bg-white rounded-xl">
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
        {/* <div className="flex  p-2 bg-white rounded-xl items-center justify-between ">
          <input
            type="email"
            placeholder="Enter your work email"
            className="text-stone-900 font-regular p-3"
          />
          <Button
            text={"Start free trail"}
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
        </div> */}
      </div>
    </div>
  );
};

export default SignupAtBottom;
