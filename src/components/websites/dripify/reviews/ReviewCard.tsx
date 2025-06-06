import Image from "next/image";
import reviewer from "/public/websites/dripify/images/reviews/Andrew-Kozic-reviewer.jpg";
import g2review from "/public/websites/dripify/images/reviews/g2review.svg";

const ReviewCard = () => {
  return (
    <div className="bg-[#f9fafb] p-10 max-sm:p-4 rounded-2xl mx-4">
      <p className="text-sm sm:text-nowrap text-black leading-loose font-medium mb-16">
        “Very impressive. I am a big fan of automation and Dripify{" "}
        <br className="max-sm:hidden" />
        is exactly what I was looking for. I have experience with
        <br className="max-sm:hidden" />
        other LinkedIn automation software and chrome
        <br className="max-sm:hidden" />
        extensions, but this one is truly superb.”
      </p>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image src={reviewer} alt="" className="size-10 rounded-full mr-4" />
          <p className="text-base text-black font-medium">
            Andrew Kozic
            <br />
            <span className="text-xs font-medium text-stone-500">
              CEO and Founder at Perfomante
            </span>
          </p>
        </div>
        <Image width="52" height="50" alt="" src={g2review} />
      </div>
    </div>
  );
};

export default ReviewCard;
