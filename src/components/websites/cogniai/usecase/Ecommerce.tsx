import Image from "next/image";
import StaticSegmentedBar from "./StaticSegmentBar";
import usaFlag from "/public/websites/cogniai/images/usecase/Ecommerce/usa-circular.png";
import franceFlag from "/public/websites/cogniai/images/usecase/Ecommerce/france-circular.png";
import southkoreaFlag from "/public/websites/cogniai/images/usecase/Ecommerce/south-korea-circular.png";
import UsecaseHeading from "./UsecaseHeading";
import UsecasePara from "./UsecasePara";

const Ecommerce = () => {
  const countryMetrics = [
    {
      flag: usaFlag,
      name: "United States",
      subtext: "Electronic & Technology",
      number: "98,720",
      percent: "78%",
      filled: 16,
    },
    {
      flag: franceFlag,
      name: "France",
      subtext: "Innovation & Engineering",
      number: "46,253",
      percent: "52%",
      fill: 11,
    },
    {
      flag: southkoreaFlag,
      name: "South Korea",
      subtext: "Smart Tech & AI",
      number: "72,873",
      percent: "52%",
      fill: 15,
    },
  ];
  return (
    <div className="col-span-3  bg-[#f7f7f7] max-sm:p-2 p-8 w-full h-full max-lg:col-span-6 rounded-3xl">
      <UsecaseHeading text="For E-commerce" />

      <UsecasePara
        text={[
          "Identify trends & opportunities in real-time to make data-driven",
          "desicions and stay ahead of competition.",
          "",
        ]}
      />
      <div className="bg-white rounded-3xl max-sm:p-2 p-4 mt-10 ">
        <p className="text-2xl text-black font-medium py-3">Affiliates</p>
        {countryMetrics.map((country, index) => {
          return (
            <div
              key={index}
              className="flex max-sm:flex-col justify-between max-sm:items-start border border-stone-200  p-2 w-full items-center my-4 rounded-2xl"
            >
              <div className="mx-2 flex items-center">
                <Image
                  width="52"
                  height="52"
                  src={country.flag}
                  alt="usa-circular"
                />
                <p className="font-medium text-black leading-tight text-xl pl-2 max-lg:block max-xl:hidden">
                  {country.name} <br />{" "}
                  <span className="text-sm text-stone-400 font-regular leading-tight max-lg:block max-xl:hidden">
                    {country.subtext}
                  </span>
                </p>
              </div>
              <div className="sm:pr-3 max-sm:pl-4">
                <div className="flex justify-between text-[0.6rem] pb-1">
                  <p className="text-stone-400 font-light">{country.number}</p>
                  <p className="font-regular text-black">{country.percent}</p>
                </div>
                <StaticSegmentedBar segments={20} filled={country.filled} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ecommerce;
