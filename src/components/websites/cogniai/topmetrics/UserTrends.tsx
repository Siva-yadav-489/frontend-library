import React from "react";
import CardHeading from "./CardHeading";
import GraphBar from "../GraphBar";

const UserTrends = () => {
  const graphMetrics = [
    {
      percent: "13.8%",
      heightWidthColor: "h-[4.00rem] max-sm:w-10 max-xl:w-17.5 xl:w-20",
      age: "18-24",
    },
    {
      percent: "32.2%",
      heightWidthColor:
        "h-[9.65rem] max-sm:w-10 max-xl:w-17.5 xl:w-20 bg-gradient-to-t from-[#f47419] to-[#fdac60]",
      age: "25-34",
    },
    {
      percent: "26.9%",
      heightWidthColor: "h-[8.04rem] max-sm:w-10 max-xl:w-17.5 xl:w-20",
      age: "35-44",
    },
    {
      percent: "17.9%",
      heightWidthColor: "h-[5.27rem] max-sm:w-10 max-xl:w-17.5 xl:w-20",
      age: "45-54",
    },
    {
      percent: "14.2%",
      heightWidthColor: "h-[4.25rem] max-sm:w-10 max-xl:w-17.5 xl:w-20",
      age: "55-64",
    },
    {
      percent: "9.5%",
      heightWidthColor: "h-[2.83rem] max-sm:w-10 max-xl:w-17.5 xl:w-20",
      age: "65+",
    },
  ];
  return (
    <div className="grid grid-cols-2 max-md:col-span-2 justify-start items-center p-4 rounded-3xl xl:-mt-10 gap-3 max-w-fit bg-white/50 backdrop-opacity-10">
      <CardHeading title="Age-Based User Trends" />
      <p className="text-xs leading-none mt-2 font-light text-stone-400 col-span-2">
        People Born Between
      </p>
      <p className="text-2xl text-black text-nowrap leading-none font-medium">
        1948-2002
      </p>
      <div className="col-span-2 max-xl:overflow-x-hidden flex items-end justify-center">
        {graphMetrics.map((item, index) => {
          return (
            <GraphBar
              key={index}
              percent={item.percent}
              age={item.age}
              heightWidthColor={item.heightWidthColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserTrends;
