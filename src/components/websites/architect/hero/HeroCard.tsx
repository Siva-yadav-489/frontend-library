type HeroCardProps = {
  count: string;
  desc: string;
};

const HeroCard = ({ count, desc }: HeroCardProps) => {
  return (
    <div className="flex flex-col flex-1 items-start backdrop-blur-[5px] md:bg-[#ffffff0d] px-3.5 pt-0.5 pb-3.5 rounded-xs w-full">
      <p
        className={`text-[55px] tracking-tight max-md:text-4xl text-white font-sans font-normal max-md:pb-2 border-b border-b-stone-600 w-full`}
      >
        {count}
      </p>
      <p className="text-sm text-[#fffbf5] max-md:mt-2 mt-10">{desc}</p>
    </div>
  );
};

export default HeroCard;
