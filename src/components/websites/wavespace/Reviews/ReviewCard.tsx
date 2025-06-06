import { StaticImageData } from "next/image";
import Image from "next/image";

type ReviewCardProps = {
  company: string;
  review: string[];
  image: StaticImageData;
  name: string;
  designation: string;
};

const ReviewCard = ({
  company,
  review,
  image,
  name,
  designation,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col h-full bg-white pt-7 pb-9 pl-8 pr-7 max-md:py-6 max-md:pr-10 border-r border-[#f0f0f0]">
      <p className="text-lg max-md:text-[11px] text-[#7e7e81] font-semibold mb-16 max-md:mb-5">
        {company}
      </p>
      <p className="text-[27px] md:leading-9 max-md:text-[16.5px] max-md:leading-[22px] text-[#7e7e81] font-bold mb-4 max-md:w-[180px]">
        {review.map((line, index) => (
          <span
            key={index}
            className={`${index % 2 !== 0 ? "text-black" : ""}`}
          >
            {line}
          </span>
        ))}
      </p>
      <div className="flex items-center space-x-3 mt-auto">
        <div>
          <Image
            src={image}
            alt="image"
            className="w-[50px] max-md:w-[30px] rounded-full"
          />
        </div>
        <div>
          <p className="text-black text-2xl max-md:text-sm font-bold">{name}</p>
          <p className="text-[#7e7e81] text-lg max-md:text-[11px] font-medium">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
