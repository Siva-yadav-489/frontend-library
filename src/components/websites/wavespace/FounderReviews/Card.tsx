import Image, { StaticImageData } from "next/image";

type CardProps = {
  image: StaticImageData;
  imageSize?: string;
  founderName: string;
  designation: string;
  about: string;
  founderNameStyle?: string;
  aboutStyle?: string;
};

const Card = ({
  image,
  imageSize,
  founderName,
  designation,
  about,
  founderNameStyle,
  aboutStyle,
}: CardProps) => {
  return (
    <div className={`h-full w-3xl ${imageSize}`}>
      <div className={`${imageSize}`}>
        <Image
          src={image}
          alt={`${founderName}'s photo`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4 mb-7 tracking-wider">
        <h3 className={`text-[17px] font-medium ${founderNameStyle} `}>
          / {founderName}
        </h3>
        <p className="text-xs font-light">{designation}</p>
      </div>
      <p className={`text-sm font-medium ${aboutStyle}`}>“{about}”</p>
    </div>
  );
};

export default Card;
