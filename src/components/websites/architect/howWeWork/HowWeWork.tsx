import HeadingWithButton from "../HeadingWithButton";
import btnIcon from "/public/websites/architect/howWeWork/btnIcon.svg";
import Card from "./Card";

const HowWeWork = () => {
  return (
    <div className="flex max-md:flex-col justify-between gap-10 w-full bg-[#fffbf5] py-20 max-md:pt-10 px-12 max-[1200px]:px-5">
      <div className="md:sticky md:top-[70px] h-52">
        <div className="max-xs:hidden">
          <HeadingWithButton
            svg={btnIcon}
            heading={[
              "Let’s turn your big ideas into a ",
              "masterpiece with a clear and fun process",
            ]}
            align="start"
            btnText="HOW WE WORK"
            color="light-dark"
          />
        </div>
        <div className="xs:hidden -mx-0.5">
          <HeadingWithButton
            svg={btnIcon}
            heading={[
              "Let’s turn your big ideas ",
              "into a masterpiece with a clear and fun process",
            ]}
            align="start"
            btnText="HOW WE WORK"
            color="light-dark"
          />
        </div>
        <div className="flex -mt-11 max-md:justify-center">
          <p className="py-4 px-[18px] border bg-black rounded-md text-sm font-medium mr-2 text-white">
            Step 1
          </p>
          <p className="py-4 px-[18px] border border-black rounded-md text-sm text-black font-medium mr-2">
            2
          </p>
          <p className="py-4 px-[18px] border border-black rounded-md text-sm text-black font-medium mr-2">
            3
          </p>
          <p className="py-4 px-[18px] border border-black rounded-md text-sm text-black font-medium mr-2">
            4
          </p>
        </div>
      </div>
      <div className="self-end max-sm:mt-10 max-xs:mt-20">
        <Card />
      </div>
    </div>
  );
};

export default HowWeWork;
