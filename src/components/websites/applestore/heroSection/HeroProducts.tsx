const HeroProducts = () => {
  const images = [
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=1739502780055",
      name: "Mac",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202502?wid=400&hei=260&fmt=png-alpha&.v=1738706422726",
      name: "iPhone",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875",
      name: "iPad",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838",
      name: "Apple Watch",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822",
      name: "AirPods",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
      name: "AirTag",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
      name: "Apple TV 4K",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
      name: "HomePod",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202503?wid=400&hei=260&fmt=png-alpha&.v=1739502322543",
      name: "Accessories",
    },
  ];
  return (
    <div className="flex justify-between pt-8 pb-10 max-lg:pl-10 max-sm:pl-5 lg:pl-24 xl:pl-36 max-2xl:w-full 2xl:max-w-10/12 overflow-x-scroll no-scrollbar">
      {images.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center px-3">
            <img
              src={item.link}
              alt={item.name}
              width={400}
              height={260}
              className="pb-4 min-w-28"
            />
            <p className="text-sm text-black tracking-wide max-lg:text-xs font-SFmedium">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroProducts;
