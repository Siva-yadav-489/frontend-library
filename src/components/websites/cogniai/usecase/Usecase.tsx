import BusinessLeaders from "./BusinessLeaders";
import MarketingTeams from "./MarketingTeams";
import FinancialProfessional from "./FinancialProfessional";
import Ecommerce from "./Ecommerce";
import OrangeHeadText from "../OrangeHeadText";
import GradientHeading from "../GradientHeading";
import Subtext from "../Subtext";
import Button from "../Button";

const Usecase = () => {
  return (
    <div className=" my-20">
      <OrangeHeadText text="USE CASE" />

      <GradientHeading
        text={["Optimize Workflows with Smart", "Automation Tools"]}
        styling="text-start"
      />
      <div className="grid grid-cols-6 place-content-between gap-10 place-items-start items-center ">
        <Subtext
          text="Organize tasks, track progress and achieve more-effortlessly."
          textPosition="md:my-3 max-md:col-span-6 col-span-3 place-content-start text-start"
        />
        <Button
          text="See AI in Action"
          margin="md:my-3 md:place-self-end col-span-3 text-nowrap"
        />
        <BusinessLeaders />
        <MarketingTeams />
        <FinancialProfessional />
        <Ecommerce />
      </div>
    </div>
  );
};

export default Usecase;
