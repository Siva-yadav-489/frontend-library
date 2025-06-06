type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
};
const PricingCard = ({ plan, price, features }: PricingCardProps) => {
  return (
    <div
      className={`${
        plan === "Pro Plan" ? "bg-[#fff6e9]" : "bg-[#f7f7f7] "
      }  rounded-2xl flex-1 max-sm:p-4 p-8 max-xl:flex-1/3 w-full`}
    >
      <div className="flex flex-col justify-between h-full">
        <p className="text-4xl text-black tracking-tight font-medium ">
          {plan}
        </p>
        <p className="text-lg font-regular text-stone-400  leading-tight pt-4">
          Essential features at no cost to <br className="max-xl:hidden" />{" "}
          start your journey.
        </p>

        <div>
          <p className="text-5xl text-black font-medium mt-10">
            {price}
            <span className="text-xl font-light text-stone-400">/Month</span>
          </p>
          <button className="text-white text-nowrap font-regular text-xl bg-black px-8 py-3 my-5 rounded-full">
            Start a Project
          </button>
        </div>
        <div>
          {features.map((feature, index) => (
            <p key={index} className="font-light text-md my-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7 text-black mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <span className="text-black ">{feature}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
