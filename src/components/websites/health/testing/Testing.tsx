import Card from "./Card";

const Testing = () => {
  return (
    <div className="bg-gradient-to-b from-[#fffffff0] to-[#fff] rounded-4xl mx-[60px] max-lg:mx-8 max-md:mx-4 mb-32 px-10 max-lg:px-4 max-md:px-2 pt-[70px] h-fit">
      <section className="mb-14">
        <p className="text-[11px] text-[#8f908e] text-center tracking-tight">
          UNLOCK YOUR FULL POTENTIAL THROUGH ADVANCED TRAINING PROTOCOLS
        </p>
        <h1 className="text-[#3e3e3e] font-sans text-[115px] max-lg:text-7xl max-md:text-[42px] tracking-tighter lg:leading-28 text-center font-bold">
          TESTING
        </h1>
      </section>
      <section className="flex max-md:flex-col md:space-x-5 space-y-5 px-8 max-lg:px-4 max-md:px-2 pb-16">
        <Card
          divStyle="lg:mt-28 max-lg:flex-1/2 max-lg:rounded-2xl"
          heading="BASELINE ASSESSMENT"
          desc="Establish your foundational fitness markers and training zones to optimize future progress."
          cost="$250"
          btnText="Buy now & schedule"
          listItems={[
            "Lactate Testing Protocol",
            "Baseline Metabolic",
            "Detailed Report & Recommendations",
          ]}
          btnStyle="bg-gradient-to-b from-[#fffffff0] to-[#fff] hover:border hover:border-black"
        />
        <Card
          divStyle="lg:mt-14 max-lg:flex-1/2 max-lg:rounded-2xl"
          heading="PERFORMANCE ASSESSMENT"
          desc="Advanced metabolic assessment to fine-tune training zones and maximize race-day performance."
          cost="$350"
          btnText="Buy now & schedule"
          listItems={[
            "VO2 Max Testing",
            "Lactate Testing Protocol",
            "Baseline Metabolic",
            "Sweat Analysis",
            "Detailed Report & Recommendations",
          ]}
          btnStyle="bg-gradient-to-b from-[#fffffff0] to-[#fff] hover:border hover:border-black"
        />
        <Card
          divStyle="border-black max-md:block max-lg:hidden"
          heading="COMPREHENSIVE ASSESSMENT"
          desc="Complete physiological profiling for elite athletes seeking the ultimate competitive advantage. Coming soon."
          cost="$900"
          btnText="Contact us"
          listItems={[
            "VO2 Max Testing",
            "Lactate Threshold Analysis",
            "Body Composition Scan",
            "Movement Assessment",
            "Sweat Analysis",
            "Detailed Report & Recommendations",
          ]}
          btnStyle="bg-black text-white"
        />
      </section>
      <section className="flex space-x-5 px-8 pb-16 max-md:hidden lg:hidden">
        <Card
          divStyle="border-black max-lg:flex justify-between items-start max-lg:flex-1"
          heading="COMPREHENSIVE ASSESSMENT"
          desc="Complete physiological profiling for elite athletes seeking the ultimate competitive advantage. Coming soon."
          cost="$900"
          btnText="Contact us"
          listItems={[
            "VO2 Max Testing",
            "Lactate Threshold Analysis",
            "Body Composition Scan",
            "Movement Assessment",
            "Sweat Analysis",
            "Detailed Report & Recommendations",
          ]}
          btnStyle="bg-black text-white"
          flexLayout={true}
        />
      </section>
    </div>
  );
};

export default Testing;
