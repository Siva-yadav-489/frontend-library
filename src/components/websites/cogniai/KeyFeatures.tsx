import FeatureCard from "./FeatureCard";
import GradientHeading from "./GradientHeading";
import OrangeHeadText from "./OrangeHeadText";
import Subtext from "./Subtext";
import code from "/public/websites/cogniai/images/keyFeatures/code.svg";
import folder from "/public/websites/cogniai/images/keyFeatures/folder.svg";
import infinity from "/public/websites/cogniai/images/keyFeatures/infinity.svg";
import piechart from "/public/websites/cogniai/images/keyFeatures/pie-chart.svg";

const KeyFeatures = () => {
  return (
    <div className="flex flex-col justify-center">
      <OrangeHeadText text="KEY FEATURES" styling="text-center" />
      <GradientHeading
        text={["Unlock Success with Actionable", " Performance Metrics", ""]}
      />
      <Subtext
        text="Track, analyse and optimize data to improve peformance and drive success."
        textPosition="my-3"
      />
      <div className="grid grid-cols-[1fr_1.25fr_1fr] gap-5 my-8">
        <div className="flex lg:flex-col max-sm:flex-col max-lg:col-span-3 gap-5">
          <FeatureCard
            svg={piechart}
            heading="Predictive Analysis"
            subtext="Forecast Trends with AI driven insights."
            styling="max-md:row-span-2"
          />

          <FeatureCard
            svg={folder}
            heading="Real-Time Reporting"
            subtext="Interactive dashboards for better decision-making."
            styling="max-md:row-span-2"
          />
        </div>
        {/* center col */}
        <div className=" bg-[#fff6e9] max-lg:col-span-3 max-sm:px-2 px-6 pt-16 pb-10 flex flex-col h-full rounded-3xl ">
          <div className="bg-white rounded-3xl max-md:w-full max-sm:p-2 p-5 place-self-center max-w-5/6 max-sm:ring-[1rem] ring-[1.5rem] ring-[#fffaf0]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 text-stone-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <p className=" h-2 rounded-full my-3 bg-gradient-to-r from-[#feaf68] to-[#f27418]">
              &nbsp;
            </p>
            {/* stripes pattern */}
            <p className=" h-8 rounded-full bg-stone-200 overflow-hidden px-2">
              {[...Array(9)].map((_, index) => (
                <span key={index} className="bg-white mx-2 py-2.5 px-1">
                  &nbsp;
                </span>
              ))}
              {[...Array(9)].map((_, index) => (
                <span
                  key={index}
                  className="bg-white mx-2 py-2.5 px-1 max-lg:inline-flex max-xl:hidden"
                >
                  &nbsp;
                </span>
              ))}
            </p>
            <div className=" rounded-full flex bg-stone-100 my-4 text-sm w-fit align-middle font-light">
              <button className="text-white py-2 px-3  bg-[#f27418] rounded-full">
                News Upload
              </button>
              <button className="py-2 px-3 text-black">Trending</button>
            </div>
            <div className="flex bg-[#f7f7f7]  py-3 px-4 max-sm:px-2.5 w-fit items-center mb-3 justify-around  rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-8 p-3 max-sm:hidden box-content bg-white mr-2 text-black rounded-full "
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
              <div className="font-regular leading-tight text-black mr-2">
                <p>Content Refresh Alert</p>
                <p className="text-xs text-stone-400 font-light leading-tight">
                  Post fresh content, share insights and stay active.
                  Consistency is key.
                </p>
              </div>
              <button className="bg-white rounded-full text-xs font-light text-stone-600 px-2 py-1">
                20MB
              </button>
            </div>
            <div className="flex bg-[#f7f7f7]  py-3 px-4 max-sm:px-2.5 w-fit items-center  justify-around  rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-8 p-3 max-sm:hidden box-content bg-white mr-2 text-black rounded-full "
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
              <div className="font-regular leading-tight text-black mr-2">
                <p>Content Refresh Alert</p>
                <p className="text-xs text-stone-400 font-light leading-tight">
                  Post fresh content, share insights and stay active.
                  Consistency is key.
                </p>
              </div>
              <button className="bg-white rounded-full text-xs font-light text-stone-600 px-2 py-1">
                24MB
              </button>
            </div>
          </div>
          <p className="text-3xl max-lg:w-2/3 max-md:w-full  max-lg:mx-auto text-black font-medium pt-14 pb-3">
            Automated Data Processing
          </p>
          <p className="text-lg max-lg:w-2/3 max-md:w-full mx-auto font-regular text-stone-600">
            AI intelligently cleans, structures and analyzes vast amounts of raw
            data, transforming it into meaningful insights for informed
            decision-making.
          </p>
        </div>

        <div className="flex lg:flex-col max-sm:flex-col max-lg:col-span-3 gap-5">
          <FeatureCard
            svg={code}
            heading="No-Code Simplicity"
            subtext="Designed forbusiness users, not just for data scientists."
            styling="max-md:row-span-2"
          />

          <FeatureCard
            svg={infinity}
            heading=" Seamless Integrations"
            subtext="Connect with your CRM, eCommerce and databases."
            styling="max-md:row-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
