"use client";
import Image from "next/image";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import womanImage from "/public/websites/cogniai/images/realstories/women-img.png";
import GradientHeading from "./GradientHeading";
import OrangeHeadText from "./OrangeHeadText";
import Subtext from "./Subtext";

const RealStories = () => {
  const points = [
    "Adavance career growth opportunities",
    "Communicate ideas pursuasively",
    "Develop strong networking abilities",
    "Boost professional confidence daily",
  ];
  const progressBars = [
    { percent: 58, color: "#ed8c2a", category: "Current Users" },
    { percent: 25, color: "#0db147", category: "User Retention" },
    { percent: 12, color: "#237ff7", category: "Interaction rate" },
  ];
  return (
    <div className="flex max-xl:flex-col max-sm:items-start bg-[radial-gradient(ellipse_at_bottom,#f46a006d_15%,#e0f2fe_70%,#e0f2fe_100%)] max-sm:px-4 pt-10 px-10 my-10 max-sm:rounded-4xl rounded-[4rem]">
      {/* col-1 */}
      <div className=" flex-1 flex flex-col justify-between pb-10">
        {/* top half */}
        <div>
          <OrangeHeadText text="REAL STORIES" />
          <GradientHeading
            text={["Real People, Real Impact"]}
            styling="text-start my-3"
          />

          <Subtext
            text="Authentic stories of transformation driving meaningful change
            globally."
            textPosition="text-start my-3"
          />
        </div>
        {/* bottom half */}
        <div>
          {points.map((point, index) => {
            return (
              <div
                key={index}
                className="flex border-2 border-stone-100 my-4 bg-white w-fit font-light bg-opacity-40 py-3 px-4 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7 text-amber-500 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <p className=" text-black sm:text-xl">{point}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* col-2 */}
      <div className="flex-1 flex items-end  max-xl:mb-5 max-xl:hidden">
        <Image
          src={womanImage}
          width={434}
          height={574}
          alt="girl"
          className="h-fit"
        />
      </div>
      {/* col-3 */}
      <div className="flex-1 flex flex-col justify-between items-end pb-10">
        <div className="grid grid-cols-2 w-fit p-3 items-center bg-[#f5f9fc] rounded-3xl ">
          <p className="text-lg text-black font-medium  ">
            Resource Utilization
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 bg-white text-black rounded-full p-3 box-content justify-self-end"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <div className="flex justify-between col-span-2 py-3">
            {progressBars.map((item, index) => {
              return (
                <CircularProgressbar
                  key={index}
                  value={item.percent}
                  text={`${item.percent}%`}
                  styles={buildStyles({
                    pathColor: item.color,
                    trailColor: "#eef2f5",
                    textColor: "#a8a29e",
                  })}
                  className=" size-20"
                />
              );
            })}
          </div>

          {progressBars.map((item, index) => {
            return (
              <div key={index} className="col-span-2">
                <div className="flex justify-between items-center my-2 w-full p-2 bg-white text-md font-medium rounded-full">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-3 text-[${item.color}] mr-2 bg-[${item.color}] rounded-full`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="justify-start text-black">{item.category}</p>
                  </div>
                  <p className="text-black">{`${item.percent}%`}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white bg-opacity-40 rounded-full flex p-2 w-fit max-xl:mt-5">
          <p className="size-14 rounded-full border-2 border-stone-200 bg-[#ed8c2a]  ">
            &nbsp;
          </p>
          <p className="size-14 rounded-full border-2 border-stone-200 bg-[#0db147]  -ml-5">
            &nbsp;
          </p>
          <p className="size-14 rounded-full border-2 border-stone-200 bg-[#237ff7]  -ml-5">
            &nbsp;
          </p>
          <p className="size-14 rounded-full border-2 border-stone-200 bg-white  -ml-5">
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealStories;
