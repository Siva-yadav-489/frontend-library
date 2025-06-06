import Headings from "./Headings";
import WideCard from "./WideCard";

const TheLatest = () => {
  const cards = [
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1726165763242",
      text: ["", "iPhone 16 Pro", " Apple Intelligence∆", "From ₹119900.00‡"],
      widthAndHeight:
        "max-sm:min-w-[21rem] min-w-[23rem] max-w-[25rem] h-[30rem]",
      textOneStyle: "text-white",
      textTwoStyle:
        "font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#0090f7] via-[#ba62fc] via-[#f2416b] to-[#f55600] ",
      textThreeStyle: "text-white  text-sm font-regular",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724095131742",
      text: [
        "",
        "Apple Watch Series 10",
        "Thinstant classic.",
        "From ₹46900.00‡",
      ],
      widthAndHeight:
        "max-sm:min-w-[21rem] min-w-[23rem] max-w-[25rem] h-[30rem]",
      textOneStyle: "text-black",
      textTwoStyle: "font-medium text-xl text-black",
      textThreeStyle: "text-black  text-sm font-regular",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1740783181594",
      text: ["", "iPad Air", " Apple Intelligence∆", "From ₹59900.00‡"],
      widthAndHeight:
        "max-sm:min-w-[21rem] min-w-[23rem] max-w-[25rem] h-[30rem]",
      textOneStyle: "text-black",
      textTwoStyle:
        "font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#0090f7] via-[#ba62fc] via-[#f2416b] to-[#f55600]",
      textThreeStyle: "text-black  text-sm font-regular",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1739502784018",
      text: ["", "MacBook Air", " Apple Intelligence∆", "From ₹99900.00‡"],
      widthAndHeight:
        "max-sm:min-w-[21rem] min-w-[23rem] max-w-[25rem] h-[30rem] bg-cover",
      textOneStyle: "text-black",
      textTwoStyle:
        "font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#0090f7] via-[#ba62fc] via-[#f2416b] to-[#f55600]",
      textThreeStyle: "text-black  text-sm font-regular",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1726165763242",
      text: ["", "iPhone 16 Pro", " Apple Intelligence∆", "From ₹119900.00‡"],
      widthAndHeight:
        "max-sm:min-w-[21rem] min-w-[23rem] max-w-[25rem] h-[30rem]",
      textOneStyle: "text-white",
      textTwoStyle:
        "font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#0090f7] via-[#ba62fc] via-[#f2416b] to-[#f55600]",
      textThreeStyle: "text-white  text-sm font-regular",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724095131742",
      text: [
        "",
        "Apple Watch Series 10",
        "Thinstant classic.",
        "From ₹46900.00‡",
      ],
      widthAndHeight:
        "max-sm:min-w-[21rem] min-w-[23rem] max-w-[25rem] h-[30rem]",
      textOneStyle: "text-black",
      textTwoStyle: "font-medium text-xl text-black",
      textThreeStyle: "text-black  text-sm font-regular",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1740783181594",
      text: ["", "iPad Air", " Apple Intelligence∆", "From ₹59900.00‡"],
      widthAndHeight:
        "max-sm:min-w-[21rem] min-w-[23rem] max-w-[25rem] h-[30rem]",
      textOneStyle: "text-black",
      textTwoStyle:
        "font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#0090f7] via-[#ba62fc] via-[#f2416b] to-[#f55600]",
      textThreeStyle: "text-black  text-sm font-regular",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1739502784018",
      text: ["", "MacBook Air", " Apple Intelligence∆", "From ₹99900.00‡"],
      widthAndHeight:
        "max-sm:min-w-[21rem] min-w-[23rem] max-w-[25rem] h-[30rem] bg-cover",
      textOneStyle: "text-black",
      textTwoStyle:
        "font-medium text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#0090f7] via-[#ba62fc] via-[#f2416b] to-[#f55600]",
      textThreeStyle: "text-black  text-sm font-regular",
    },
  ];
  return (
    <div className="pb-10">
      <div className="mx-auto max-sm:mx-5 max-lg:mx-10 lg:max-w-5/6">
        <Headings
          text={["The latest.", "Take a look at what's new right now."]}
          textColor={"text-[#1d1d1f]"}
        />
      </div>
      <div className="flex space-x-5 max-w-screen pr-5 lg:pl-24 xl:pl-36 max-sm:px-5 max-lg:px-10 overflow-x-scroll no-scrollbar mt-5 py-1 pb-10">
        {cards.map((card, index) => {
          return (
            <WideCard
              key={index}
              text={card.text}
              widthAndHeight={card.widthAndHeight}
              textOneStyle={card.textOneStyle}
              textTwoStyle={card.textTwoStyle}
              textThreeStyle={card.textThreeStyle}
              link={card.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TheLatest;
