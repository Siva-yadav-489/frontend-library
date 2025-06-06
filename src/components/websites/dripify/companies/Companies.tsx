import ParagraphText from "../ParagraphText";
import LogoScroll from "./LogoScroll";

const Companies = () => {
  return (
    <div className="mt-72 max-xs:mt-40 ">
      <div className="max-lg:mx-2 mx-6">
        <ParagraphText
          text={[
            "Driving sales for 40,000+ most innovative companies worldwide",
            "",
            "",
            "",
          ]}
        />
      </div>
      <div className="max-w-[74rem] max-md:hidden xl:mx-auto max-lg:mx-2 md:mx-6"></div>
      <div className="max-w-[74rem] xl:mx-auto max-lg:mx-2 md:mx-6">
        <LogoScroll scrolldirection="scroll-left" />
        <LogoScroll scrolldirection="scroll-right" />
      </div>
    </div>
  );
};

export default Companies;
