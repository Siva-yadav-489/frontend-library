type MetricsProps = {
  text: string[];
};

const Metrics = ({ text }: MetricsProps) => {
  return (
    <div className="bg-slate-50 py-8 flex-1 rounded-xl">
      <p className="text-[4rem] leading-tight text-black font-bold text-center">
        {text[0]}
      </p>
      <p className="text-sm font-regular text-stone-500 text-center">
        {text[1]}
      </p>
    </div>
  );
};

export default Metrics;
