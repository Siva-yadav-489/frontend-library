import Headings from "./Headings";
import WideCard from "./WideCard";
import ProductCard from "./ProductCard";

const Accessories = () => {
  const productCards = [
    {
      text: [
        "New colours",
        "Airpods Max - Orange",
        "MRP ₹59900.00 (Incl. of all taxes)",
      ],
      colorOptions: "flex justify-center space-x-3",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-orange?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724927451265",
    },
    {
      text: [
        "New",
        "iPhone 16 Plus Silicone Case with MagSafe - Peony",
        "MRP ₹4900.00 (Incl. of all taxes)",
      ],
      colorOptions: "flex justify-center space-x-3",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MDGR4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1740164625404",
    },
    {
      text: ["", "HomePod mini - White", "MRP ₹10900.00 (Incl. of all taxes)"],
      colorOptions: "flex justify-center space-x-3",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-white-202110?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632925509000",
    },
    {
      text: [
        "New colours",
        "Airpods Max - Orange",
        "MRP ₹59900.00 (Incl. of all taxes)",
      ],
      colorOptions: "flex justify-center space-x-3",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-orange?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724927451265",
    },
    {
      text: [
        "New",
        "iPhone 16 Plus Silicone Case with MagSafe - Peony",
        "MRP ₹4900.00 (Incl. of all taxes)",
      ],
      colorOptions: "flex justify-center space-x-3",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MDGR4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1740164625404",
    },
    {
      text: ["", "HomePod mini - White", "MRP ₹10900.00 (Incl. of all taxes)"],
      colorOptions: "flex justify-center space-x-3",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-white-202110?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632925509000",
    },
  ];
  return (
    <div className="pb-10">
      <div className="mx-auto max-sm:mx-5 max-lg:mx-10 lg:max-w-5/6">
        <Headings
          text={["Accessories.", " Put a bow on Mother’s Day."]}
          textColor={"text-[#ff3c26]"}
        />
      </div>
      <div className="flex max-w-screen space-x-5 pr-5 lg:pl-24 xl:pl-36 max-sm:px-5 max-lg:px-10 overflow-x-scroll no-scrollbar mt-5 py-1 pb-10">
        <WideCard
          text={["MOTHER’S DAY", " Pairs perfectly with Mom."]}
          textZeroStyle={"-mt-7"}
          textOneStyle={"text-black"}
          widthAndHeight={
            "min-w-[23rem] max-sm:min-w-[21rem] max-w-[25rem] h-[31rem]"
          }
          link={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-mothers-day-202504?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1745264939886"
          }
        />

        {productCards.map((card, index) => {
          return (
            <ProductCard
              key={index}
              link={card.link}
              text={card.text}
              colorOptions={card.colorOptions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accessories;
