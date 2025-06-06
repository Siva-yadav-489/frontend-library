import Image from "next/image";
import pricingImg from "/public/websites/cogniai/images/pricingPlan/pricing.jpg";
import OrangeHeadText from "../OrangeHeadText";
import GradientHeading from "../GradientHeading";
import Subtext from "../Subtext";
import PricingCard from "./PricingCard";

const PricingPlan = () => {
  const pricingCards = [
    {
      plan: "Basic Plan",
      price: "Free",
      features: [
        "Advanced business tools",
        "Enhanced platform integrations",
        "Priority customer support",
        "Smart data insights",
      ],
    },
    {
      plan: "Pro Plan",
      price: "$1,200",
      features: [
        "Advanced business tools",
        "Enhanced platform integrations",
        "Priority customer support",
        "Smart data insights",
      ],
    },
    {
      plan: "Enterprise Plan",
      price: "$3,400",
      features: [
        "Advanced business tools",
        "Enhanced platform integrations",
        "Priority customer support",
        "Smart data insights",
      ],
    },
  ];
  return (
    <div className="flex flex-col justify-center">
      <OrangeHeadText text="PRICING PLAN" styling="text-center" />

      <GradientHeading
        text={["Flexible Plans for Every Need and Budget", "", ""]}
        styling="my-3 "
      />
      <Subtext
        text="Choose the perfect plan to scale, save and maximize value."
        textPosition="my-3"
      />
      {/* main row */}
      <div className="my-10 flex max-lg:flex-col space-x-4 max-lg:space-y-4">
        {/* col-1 */}
        <PricingCard
          plan={pricingCards[0].plan}
          price={pricingCards[0].price}
          features={pricingCards[0].features}
        />
        {/* col-2 */}
        <div className="xl:flex-2 flex max-md:flex-col justify-between bg-[#fff6e9] rounded-3xl xl:p-7 w-full">
          <PricingCard
            plan={pricingCards[1].plan}
            price={pricingCards[1].price}
            features={pricingCards[1].features}
          />
          <Image
            src={pricingImg}
            alt="img"
            className="w-3/6 rounded-xl flex-1 max-xl:hidden"
          />
        </div>
        {/* col-3 */}
        <PricingCard
          plan={pricingCards[2].plan}
          price={pricingCards[2].price}
          features={pricingCards[2].features}
        />
      </div>
    </div>
  );
};

export default PricingPlan;
