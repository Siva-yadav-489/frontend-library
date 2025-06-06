import ReviewCard from "./ReviewCard";

type ReviewCardScrollProps = {
  scrolldirection: string;
};

const ReviewCardScroll = ({ scrolldirection }: ReviewCardScrollProps) => {
  return (
    <div className="relative flex overflow-hidden">
      <div className={`${scrolldirection} flex gap-x-2 gap-y-5 my-5`}>
        {[...Array(10)].map((_, index) => (
          <ReviewCard key={index} />
        ))}
        {/* Duplicate set of images for seamless loop */}
        {[...Array(10)].map((_, index) => (
          <ReviewCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCardScroll;
