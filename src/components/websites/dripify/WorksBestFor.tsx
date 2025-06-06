import Image from "next/image";
import Headings from "./Headings";
import Button from "./Button";
import businessLogo from "/public/websites/dripify/images/worksBestFor/business-logo.svg";
import businessOwners from "/public/websites/dripify/images/worksBestFor/business-owners.avif";
import salesLogo from "/public/websites/dripify/images/worksBestFor/sales-logo.svg";
import marketingLogo from "/public/websites/dripify/images/worksBestFor/marketing-logo.svg";
import recruiterLogo from "/public/websites/dripify/images/worksBestFor/recruiters-logo.svg";
import recruiter from "/public/websites/dripify/images/worksBestFor/recrutier.avif";
import ParagraphText from "./ParagraphText";

const WorksBestFor = () => {
  return (
    <div className=" max-sm:mx-2 max-xl:mx-6 max-w-[74rem] mx-auto py-5 my-20">
      <Headings text={["Works best for"]} />
      <div className="grid grid-cols-5 gap-5 ">
        <div className="col-span-3 max-md:col-span-5 flex justify-between bg-[#eefcf0] p-10 max-md:p-5 rounded-xl">
          <div className="flex flex-col  items-start justify-start">
            <Image
              width="40"
              height="40"
              alt=""
              src={businessLogo}
              className="mb-6"
            />
            <p className="text-3xl text-black font-semibold mb-8">
              Business owners
            </p>
            {/* <p className="text-base font-medium text-stone-500 mb-32 max-md:mb-5">
              Running a business is not that easy these
              <br className="max-lg:hidden" />
              days! Put your sales prospecting on
              <br className="max-lg:hidden" />
              complete autopilot, so you could focus on
              <br className="max-lg:hidden" />
              other important things
            </p> */}
            <ParagraphText
              text={[
                "Running a business is not that easy these",
                "days! Put your sales prospecting on",
                "complete autopilot, so you could focus on",
                "other important things",
              ]}
              styling="text-start mb-32 max-md:mb-5"
            />
            <p className="flex items-center">
              <span className="text-base text-black font-semibold">
                Learn more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 pl-3 box-content text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </p>
          </div>
          <Image
            alt={"business owners"}
            src={businessOwners}
            className="w-64 h-fit max-sm:mt-2 max-md:place-self-end max-md:h-24 max-md:w-full max-md:object-cover max-md:object-top"
          />
        </div>
        <div className="col-span-2 max-md:col-span-5 flex flex-col  items-start bg-[#ffefeb] p-10 max-md:p-5 rounded-xl">
          <Image
            width="40"
            height="40"
            alt=""
            src={salesLogo}
            className="mb-6"
          />
          <p className="text-3xl text-black font-semibold mb-8">Sales teams</p>
          {/* <p className="text-base font-medium text-stone-500 mb-36 max-md:mb-5">
            Run effective lead generation campaigns, onboard your entire sales
            team to Dripify to manage their campaigns and view analytics - all
            from the control panel of your favorite sales automation software
          </p> */}
          <ParagraphText
            text={[
              "Run effective lead generation campaigns, onboard",
              "your entire sales team to Dripify to manage their ",
              "campaigns and view analytics - all from the control",
              "panel of your favorite sales automation software",
            ]}
            styling="text-start mb-32 max-md:mb-5"
          />
          <p className="flex items-center">
            <span className="text-base text-black font-semibold">
              Learn more
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 pl-3 box-content text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </p>
        </div>
        {/* row-2 */}
        <div className="col-span-2 max-md:col-span-5 flex flex-col  items-start bg-[#ebf5ff] p-10 max-md:p-5 rounded-xl">
          <Image
            width="40"
            height="40"
            alt=""
            src={marketingLogo}
            className="mb-6"
          />
          <p className="text-3xl text-black font-semibold mb-8">
            Marketing agencies
          </p>
          {/* <p className="text-base font-medium text-stone-500 mb-28 max-md:mb-5">
            Digital marketing agencies love Dripify! Why? You can set
            prospecting campaigns in minutes, use hyper-personalization with 20+
            variables, so your messages do not look automated, switch between
            LinkedIn accounts with just a few clicks, and more!
          </p> */}
          <ParagraphText
            text={[
              "Digital marketing agencies love Dripify! Why? You",
              " can set prospecting campaigns in minutes, use ",
              " hyper-personalization with 20+ variables, so your ",
              "messages do not look automated, switch between LinkedIn accounts with just a few clicks, and more!",
            ]}
            styling="text-start mb-28 max-md:mb-5"
          />
          <p className="flex items-center">
            <span className="text-base text-black font-semibold">
              Learn more
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 pl-3 box-content text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </p>
        </div>
        <div className="col-span-3 max-md:col-span-5 flex justify-between bg-[#ffebf2] p-10 max-md:p-5 rounded-xl">
          <div className="flex flex-col  items-start">
            <Image
              width="40"
              height="40"
              alt=""
              src={recruiterLogo}
              className="mb-6"
            />
            <p className="text-3xl text-black font-semibold mb-8">Recruiters</p>
            {/* <p className="text-base font-medium text-stone-500 mb-32 max-md:mb-5">
              LinkedIn has already become the hottest career{" "}
              <br className="max-lg:hidden" />
              development site on the globe. With Dripify, you
              <br className="max-lg:hidden" />
              can reach out to 2000+ potential candidates per{" "}
              <br className="max-lg:hidden" />
              month and fill your open vacancies easily
            </p> */}
            <ParagraphText
              text={[
                "LinkedIn has already become the hottest career",
                "development site on the globe. With Dripify, you",
                "can reach out to 2000+ potential candidates per",
                "month and fill your open vacancies easily",
              ]}
              styling="text-start mb-32 max-md:mb-5"
            />
            <p className="flex items-center">
              <span className="text-base text-black font-semibold">
                Learn more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 pl-3 box-content text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </p>
          </div>
          <Image
            alt=""
            src={recruiter}
            className="w-52 h-fit max-sm:mt-2 max-md:place-self-end max-md:h-24 max-md:w-full max-md:object-cover max-md:object-top"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button text={"Start free trail"} colors={"text-white bg-[#7760f9]"} />
      </div>
    </div>
  );
};

export default WorksBestFor;
