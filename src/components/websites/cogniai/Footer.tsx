import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 sm:-mx-16 max-sm:-mx-4 max-xs:p-4 max-sm:p-6 sm:p-20 bg-[#f9f9f9]">
      <div className="flex justify-between items-start max-md:flex-col">
        <div className="text-5xl text-black font-medium max-xl:flex-2/5 mb-5">
          CogniAI
          <br />
          <p className="text-xl  font-light text-stone-400 mt-3">
            Our intelligent platform provides rael time{" "}
            <br className="max-lg:hidden" />
            insights, predictive analytics and automation to{" "}
            <br className="max-lg:hidden" />
            optimize performance and efficiency.
          </p>
        </div>
        <div className="max-xl:flex-1/5 mb-5">
          <p className="text-xl text-black font-regular md:mb-4">Solutions</p>
          <div className="text-lg font-regular text-stone-400 ">
            <p>AI-Powered Analytics</p>
            <p>Predictive Insights</p>
            <p>Automation & Optimization</p>
          </div>
        </div>
        <div className="max-xl:flex-1/5 mb-5">
          <p className="text-xl text-black font-regular md:mb-4">Resorces</p>
          <div className="text-lg font-regular text-stone-400 ">
            <p>Blog & Insights </p>
            <p>Case Studies</p>
            <p> Webinars & Events</p>
          </div>
        </div>
        <div className="max-xl:flex-1/5 mb-5">
          <p className="text-xl text-black font-regular md:mb-4">
            Company{" "}
            <span className="text-sm font-light bg-lime-500 rounded-full px-2 py-1">
              News
            </span>
          </p>
          <div className="text-lg font-regular text-stone-400 ">
            <p>About us</p>
            <p> Careers</p>
            <p>Press & Media</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-14 max-sm:flex-col max-sm:items-start max-sm:space-y-3">
        <p className="text-xl text-black font-regular ">
          &copy;2025 CogniAI. <br className="xs:hidden" /> All Rights Reserved.
        </p>
        <p className="text-xl text-black text-nowrap font-regular flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 border border-stone-800 p-2 mx-3 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
          Back to Top
        </p>
      </div>
    </div>
  );
};

export default Footer;
