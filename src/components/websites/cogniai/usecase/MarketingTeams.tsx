import Image from "next/image";
import person1 from "/public/websites/cogniai/images/usecase/marketingTeams/person1.jpeg";
import person2 from "/public/websites/cogniai/images/usecase/marketingTeams/person2.jpeg";
import person3 from "/public/websites/cogniai/images/usecase/marketingTeams/person3.jpeg";
import person4 from "/public/websites/cogniai/images/usecase/marketingTeams/person4.jpeg";
import UsecaseHeading from "./UsecaseHeading";
import UsecasePara from "./UsecasePara";
import GraphBar from "../GraphBar";

const MarketingTeams = () => {
  const images = [person1, person2, person3, person4];
  const graphMetrics = [
    {
      percent: "13.8%",
      heightWidthColor: "h-[4.00rem] max-xl:w-17.5 xl:w-24",
      age: "18-24",
    },
    {
      percent: "32.2%",
      heightWidthColor:
        "h-[9.65rem] max-xl:w-17.5 xl:w-24 bg-gradient-to-t from-[#f47419] to-[#fdac60]",
      age: "25-34",
    },
    {
      percent: "26.9%",
      heightWidthColor: "h-[8.04rem] max-xl:w-17.5 xl:w-24",
      age: "35-44",
    },
    {
      percent: "17.9%",
      heightWidthColor: "h-[5.27rem] max-xl:w-17.5 xl:w-24",
      age: "45-54",
    },
  ];
  return (
    <div className=" bg-[#f7f7f7] max-sm:p-2 p-8 w-full h-full flex justify-between max-lg:flex-col max-lg:col-span-6 col-span-4  rounded-3xl ">
      {/* left half */}
      <div className="flex flex-col justify-between">
        <div>
          <UsecaseHeading text="Marketing Teams" />
          <UsecasePara
            text={[
              "Identify trends & opportunities in real-",
              "time to make data-driven desicions and ",
              "stay ahead of competition.",
            ]}
          />
        </div>
        <div className="flex ml-7 max-sm:mt-2">
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                alt="img"
                className="rounded-full size-20 border-4 border-stone-100 -ml-7"
              />
            );
          })}
        </div>
      </div>
      {/* right half */}
      <div className="grid grid-cols-2  gap-3 justify-start max-sm:p-1.5 sm:py-8 sm:pl-8 max-sm:mt-2 items-center bg-white rounded-3xl ">
        <p className="text-lg text-black font-medium text-nowrap">
          Age-Based User Trends
        </p>

        <p className="text-xs leading-none font-light text-stone-400 col-span-2">
          People Born Between
        </p>
        <p className="text-xl text-black leading-none font-semibold">
          1948-2002
        </p>
        {/* graph */}
        <div className="flex items-end col-span-2 overflow-clip">
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
    </div>
  );
};

export default MarketingTeams;
