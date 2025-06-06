import Headings from "./Headings";
import WideCard from "./WideCard";

const AppleExperiance = () => {
  const cards = [
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-apple-intelligence-202503_GEO_IN?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1740119353535",
      text: [
        "",
        "Apple Intelligence",
        "Write, express yourself and get things done effortlessly.",
        "",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textOneStyle:
        "bg-clip-text text-transparent bg-gradient-to-r from-[#0090f7] via-[#ba62fc] via-[#f2416b] to-[#f55600] -mt-7 ",
      textTwoStyle: "text-[#6e6e73] ",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-tv-services-202501?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1733945929334",
      text: [
        "APPLE TV+",
        "Get 3 months of Apple TV+ free when you buy an Apple device.",
        "",
        "",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-light text-lg leading-tight",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375547000",
      text: ["  ", "Four Apple services. One easy subscription. ", "", ""],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-light text-lg leading-tight",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-apple-intelligence-202503_GEO_IN?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1740119353535",
      text: [
        "",
        "Apple Intelligence",
        "Write, express yourself and get things done effortlessly.",
        "",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textOneStyle:
        "bg-clip-text text-transparent bg-gradient-to-r from-[#0090f7] via-[#ba62fc] via-[#f2416b] to-[#f55600] -mt-7 ",
      textTwoStyle: "text-[#6e6e73] ",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-tv-services-202501?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1733945929334",
      text: [
        "APPLE TV+",
        "Get 3 months of Apple TV+ free when you buy an Apple device.",
        "",
        "",
      ],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-light text-lg leading-tight",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375547000",
      text: ["  ", "Four Apple services. One easy subscription. ", "", ""],
      widthAndHeight:
        "max-sm:min-w-[22rem] max-sm:bg-cover bg-center min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-light text-lg leading-tight",
    },
  ];
  return (
    <div className="pb-10">
      <div className="mx-auto max-sm:mx-5 max-lg:mx-10 lg:max-w-5/6">
        <Headings
          text={[
            "The Apple experience.",
            " Do even more with Apple products and services.",
          ]}
          textColor={"text-[#1d1d1f]"}
        />
      </div>
      <div className="flex space-x-5 max-w-screen pr-5 lg:pl-28 xl:pl-36 max-sm:px-5 max-lg:px-10 overflow-x-scroll no-scrollbar mt-5 py-1 pb-10">
        {cards.map((card, index) => {
          return (
            <WideCard
              key={index}
              text={card.text}
              widthAndHeight={card.widthAndHeight}
              textZeroStyle={card.textZeroStyle}
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

export default AppleExperiance;
