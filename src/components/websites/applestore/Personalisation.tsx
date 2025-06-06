import Headings from "./Headings";
import WideCard from "./WideCard";
import ProductCard from "./ProductCard";

const Personalisation = () => {
  const productCards = [
    {
      text: [
        "Free Engraving",
        "AirPods 4 with Active Noise Cancellation",
        "MRP ₹17900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1725502639798",
    },
    {
      text: [
        "Free Engraving",
        "AirPods Pro 2",
        "MRP ₹24900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724041669458",
    },
    {
      text: [
        "Free Engraving",
        "Apple Pencil Pro",
        "MRP ₹11900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713841707336",
    },
    {
      text: [
        "Free Engraving",
        "AirPods 4 with Active Noise Cancellation",
        "MRP ₹17900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1725502639798",
    },
    {
      text: [
        "Free Engraving",
        "AirPods Pro 2",
        "MRP ₹24900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724041669458",
    },
    {
      text: [
        "Free Engraving",
        "Apple Pencil Pro",
        "MRP ₹11900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713841707336",
    },
  ];
  return (
    <div className="pb-10">
      <div className="mx-auto max-sm:mx-5 max-lg:mx-10 lg:max-w-5/6 ">
        <Headings
          text={["Personalisation.", " Add something that really says Mom."]}
          textColor={"text-[#ff3c26]"}
        />
      </div>
      <div className="flex space-x-5 max-w-screen pr-5 lg:pl-24 xl:pl-36 max-sm:px-5 max-lg:px-10 overflow-x-scroll no-scrollbar mt-5 py-1 pb-10">
        <WideCard
          text={["FREE ENGRAVING", " Truly just for them."]}
          textZeroStyle={"-mt-7"}
          textOneStyle={"text-black"}
          widthAndHeight={
            "min-w-[23rem] max-sm:min-w-[21rem] max-w-[25rem] h-[31rem]"
          }
          link={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-mothers-day-personalization-202504?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1742923152001"
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

export default Personalisation;
