import Image, { StaticImageData } from "next/image";

type CardProps = {
  title: string;
  desc: string;
  bgColor: string;
  image: StaticImageData;
};

const Card = ({ title, desc, image, bgColor }: CardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row  md:items-end ${bgColor} p-1 rounded-4xl w-full h-full`}
    >
      <section className="flex-1 p-6 max-md:p-4 md:pr-2 md:max-w-72">
        <p className="text-[11px] tracking-tight text-[#828553] mb-4">
          {title}
        </p>
        <h2 className="text-[28px] text-black max-md:text-xl tracking-tighter leading-7 font-semibold font-sans">
          {desc}
        </h2>
      </section>

      <div className="flex-none md:ml-2">
        <Image
          src={image}
          alt="cardImage"
          className="max-md:w-60 max-md:h-60 w-[18rem] h-[22rem] object-cover rounded-4xl"
        />
      </div>
    </div>
  );
};

export default Card;
