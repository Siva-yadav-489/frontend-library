import GlowButton from "../GlowButton";

const HeroText = () => {
  return (
    <div className="flex justify-center">
      <div className="text-white text-center absolute top-[180px] max-lg:top-60">
        <p className="text-[116px] max-md:text-5xl max-md:leading-tight max-lg:text-[65px] max-lg:leading-16 leading-[115px] tracking-tighter font-bold">
          REDEFINING HUMAN <br /> PERFORMANCE
        </p>
        <p className="text-lg font-medium tracking-tight mt-5  max-sm:px-5">
          The world's most advanced performance optimization lab{" "}
          <br className="max-sm:hidden" />
          combining elite endurance training, longevity science,{" "}
          <br className="max-sm:hidden" />
          and personalized health analytics.
        </p>
        <div className="flex justify-center">
          <GlowButton adjustStyle="w-48 bg-[rgb(244,251,140)] hover:drop-shadow-[rgb(244,251,140)] drop-shadow-[#f4fb8c]/80 drop-shadow-2xl drop-shadow-xl/40 hover:drop-shadow-2xl/50" />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
