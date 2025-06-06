type GraphBarProps = {
  percent: string;
  heightWidthColor: string;
  age: string;
};

const GraphBar = ({ percent, heightWidthColor, age }: GraphBarProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[0.6rem] text-black font-light">{percent}</p>
      <p
        className={`bg-[#f4781c28] rounded-lg ${heightWidthColor} max-sm:m-1 m-2`}
      >
        &nbsp;
      </p>
      <p className="text-[0.6rem] text-stone-400 font-light">{age}</p>
    </div>
  );
};

export default GraphBar;
