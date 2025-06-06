import Card from "./Card";

const Memberships = () => {
  return (
    <div className="mt-14 mx-32 max-xl:mx-8 max-md:mx-4 pb-14">
      <section className="mb-14 font-bold text-[#8f908e]">
        <p className="text-[11px] text-center tracking-tight">
          UNLOCK YOUR FULL POTENTIAL THROUGH ADVANCED TRAINING PROTOCOLS
        </p>
        <h1 className="text-[#fffffff1] text-[115px] max-lg:text-7xl max-md:text-5xl max-sm:text-[44px] font-sans tracking-tighter lg:leading-28 text-center">
          MEMBERSHIPS
        </h1>
      </section>
      <section className="flex max-md:flex-col max-lg:space-y-5 lg:space-x-4 md:px-8 lg:pb-16">
        <Card
          heading="FOUNDATION"
          cost="$250"
          listItems={[
            "Custom Programming",
            "Semi-Weekly Meetings",
            "App Access",
            "Basic Product Discounts",
          ]}
          btnStyle="bg-gradient-to-b from-[#fffffff0] to-[#fff] hover:border-black hover:border-black"
        />
        <Card
          heading="PERFORMANCE"
          cost="$599"
          listItems={[
            "Quarterly Testing",
            "Advanced Protocol Design",
            "Weekly Coach Check-In",
            "Weekly Coach Check-in",
            "Product Discounts",
          ]}
          btnStyle="bg-gradient-to-b from-[#fffffff0] to-[#fff]  hover:border-black hover:border-black"
        />
        <Card
          divStyle="max-md:block max-lg:hidden"
          heading="ELITE"
          cost="$999"
          listItems={[
            "Monthly Testing",
            "Fully Customized Protocols",
            "Priority Scheduling & Support",
            "Maximun Product Discounts",
            "Maximum Product Discounts",
          ]}
          btnStyle="bg-black text-white"
        />
      </section>
      <section className="flex space-x-4 px-8 pb-16 max-md:hidden lg:hidden">
        <Card
          divStyle="max-lg:flex flex-1 w-full space-x-5 justify-between items-start"
          heading="ELITE"
          cost="$999"
          listItems={[
            "Monthly Testing",
            "Fully Customized Protocols",
            "Priority Scheduling & Support",
            "Maximun Product Discounts",
            "Maximum Product Discounts",
          ]}
          btnStyle="bg-black text-white max-lg:w-full flex-1"
        />
      </section>
    </div>
  );
};

export default Memberships;
