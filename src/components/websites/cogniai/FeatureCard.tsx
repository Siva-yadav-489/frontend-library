import Image from "next/image";

type FeatureCardProps = {
  svg: string;
  heading: string;
  subtext: string;
  styling: string;
};

const FeatureCard = ({ svg, heading, subtext, styling }: FeatureCardProps) => {
  return (
    <div
      className={`bg-[#f7f7f7] p-10 max-sm:p-4 w-full h-full rounded-3xl ${styling}`}
    >
      <div className="bg-white rounded-full w-20 h-20 p-4 flex items-center justify-center">
        <Image
          src={svg}
          alt={svg}
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
      <p className="text-3xl text-black font-semibold mb-2 pt-16">{heading}</p>
      <p className="text-xl font-regular xl:pr-5 text-stone-400">{subtext}</p>
    </div>
  );
};

export default FeatureCard;
