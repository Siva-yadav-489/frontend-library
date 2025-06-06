import Headings from "../Headings";
import Metrics from "./Metrics";
import Button from "../Button";
import ParagraphText from "../ParagraphText";

const Insights = () => {
  return (
    <div className="max-lg:mx-2 max-xl:mx-6 max-w-[74rem] mx-auto my-10">
      <Headings
        text={[
          "Powerful lead generation software",
          " that brings incredible results",
        ]}
      />
      {/* <p className="font-medium text-base mb-10 text-center text-stone-500">
        On average each Dripify user achieves the following numbers
      </p> */}
      <ParagraphText
        text={[
          "On average each Dripify user achieves the following numbers",
          "",
          "",
          "",
        ]}
        styling="mb-10"
      />
      <div className="flex max-sm:flex-col space-x-7 mb-8">
        <Metrics text={["9000 ", "Leads reached per mo."]} />
        <Metrics text={["+182%", "Close rate increase"]} />
        <Metrics text={["550 ", "Replies received per mo."]} />
      </div>
      <div className="flex max-sm:flex-col space-x-8">
        <Metrics text={["X10 ", "Overall productivity "]} />
        <Metrics text={["1000% ", "More ROI "]} />
      </div>
      <div className="flex justify-center">
        <Button
          text={"Start free trail"}
          colors={"text-white bg-[#7760f9] my-10"}
        />
      </div>
    </div>
  );
};

export default Insights;
