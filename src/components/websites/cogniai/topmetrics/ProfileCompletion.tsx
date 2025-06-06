import React from "react";
import CardHeading from "./CardHeading";

const ProfileCompletion = () => {
  return (
    <div className="grid grid-cols-2 max-md:col-span-2 gap-3 place-self-start p-4 items-end bg-white/50 backdrop-opacity-10 rounded-3xl">
      <CardHeading title="Profile Completion" />
      <p className="text-3xl text-black font-semibold">87%</p>
      <button className="bg-white/75 py-2 px-3 w-fit justify-self-end text-xs text-stone-400 rounded-full font-light">
        You&apos;re Almost there
      </button>
      <p className="col-span-2 bg-white/75 rounded-full space-x-1 text-xs flex leading-tight ">
        <span className=" bg-[#03a43f] rounded-full w-3/8">&nbsp;</span>
        <span className=" bg-[#1977f0] rounded-full w-3/12">&nbsp;</span>
        <span className=" bg-[#f36602] rounded-full w-1/5">&nbsp;</span>
        <span className="  rounded-full w-1/6 ">&nbsp;</span>
      </p>
      <p className="col-span-2 text-black font-light flex leading-tight ">
        <span className="ml-1.5 text-[0.55rem] w-3/8">Basic Information</span>
        <span className="ml-1.5 text-[0.55rem] w-3/12">Content & Activity</span>
        <span className="ml-1.5 text-[0.55rem] w-1/5">Social Links</span>
        <span className="ml-1.5 text-[0.55rem] text-stone-400   w-1/6">
          Verification
        </span>
      </p>
      <p className="col-span-2 text-black text-md font-regular ">
        Secure Your Account Now!
      </p>
      <div className="col-span-2 flex text-black justify-start">
        <button className="px-4 flex py-3 mr-2 bg-white/75 rounded-full text-xs font-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          Verify By Email
        </button>
        <button className="px-4 flex py-3 mr-2 bg-white/75 rounded-full text-xs font-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          Enable 2FA
        </button>
      </div>
    </div>
  );
};

export default ProfileCompletion;
