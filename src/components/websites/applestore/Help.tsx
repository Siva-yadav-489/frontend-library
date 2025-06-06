import Headings from "./Headings";
import WideCard from "./WideCard";

const Help = () => {
  const cards = [
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-earth-day-specialist-help-202504?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=1742855758114",
      text: [
        "APPLE SPECIALIST",
        "Shop one on one with a Specialist online.",
        "",
        "",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
      text: [
        "TODAY AT APPLE",
        "Join free sessions at your Apple Store.",
        "",
        "Learn about the latest features and how to go further with your Apple devices.",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-light text-lg leading-tight",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-business-202409_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=alV4a1Q5dWpXakxENUdPdUc5bk5oL3AvbkFpTUJaVTl5YXRNYno3eGE5aXFFMHhFSDhqV0JNYUQxSWJ4aDVUMm1td3JHMmlHM0d0VzBMMGs5ZHR4WjNqb1RJQWJGSnhVM2c1V3gzR1hhMHFHUTVhN1k1UDMwUiszWWU3d2JvUTc",
      text: [
        "BUSINESS",
        "From enterprise to small business, we’ll work with you.",
        "",
        "",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-white",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-earth-day-specialist-help-202504?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=1742855758114",
      text: [
        "APPLE SPECIALIST",
        "Shop one on one with a Specialist online.",
        "",
        "",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
      text: [
        "TODAY AT APPLE",
        "Join free sessions at your Apple Store.",
        "",
        "Learn about the latest features and how to go further with your Apple devices.",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-light text-lg leading-tight",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-business-202409_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=alV4a1Q5dWpXakxENUdPdUc5bk5oL3AvbkFpTUJaVTl5YXRNYno3eGE5aXFFMHhFSDhqV0JNYUQxSWJ4aDVUMm1td3JHMmlHM0d0VzBMMGs5ZHR4WjNqb1RJQWJGSnhVM2c1V3gzR1hhMHFHUTVhN1k1UDMwUiszWWU3d2JvUTc",
      text: [
        "BUSINESS",
        "From enterprise to small business, we’ll work with you.",
        "",
        "",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-white",
    },
  ];
  return (
    <div className="pb-10">
      <div className="mx-auto max-sm:mx-5 max-lg:mx-10 lg:max-w-5/6">
        <Headings
          text={["Help is here.", " Whenever and however you need it."]}
          textColor={"text-[#1d1d1f]"}
        />
      </div>
      <div className="flex space-x-5 max-w-screen pr-5 lg:pl-28 xl:pl-36 max-sm:px-5 max-lg:px-10 overflow-x-scroll no-scrollbar mt-5 py-1 pb-10">
        {cards.map((card, index) => {
          return (
            <WideCard
              key={index}
              text={card.text}
              textZeroStyle={card.textZeroStyle}
              widthAndHeight={card.widthAndHeight}
              textOneStyle={card.textOneStyle}
              textThreeStyle={card.textThreeStyle}
              link={card.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Help;
