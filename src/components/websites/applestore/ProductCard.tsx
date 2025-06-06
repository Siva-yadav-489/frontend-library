import Image from "next/image";

type ProductCardProps = {
  link: string;
  text: string[];
  colorOptions: string;
};

const ProductCard = ({ link, text, colorOptions }: ProductCardProps) => {
  return (
    <div className="rounded-2xl flex flex-col justify-between font-SFregular leading-relaxed min-w-[20rem] bg-white h-[31rem] p-7 pt-14 shadow-xl hover:scale-[101%] hover:shadow-xl/15 transition ease-in">
      <Image
        src={link}
        alt="airpodsmax"
        height={230}
        width={230}
        className="mx-auto content-start"
      />
      <ul className={` ${colorOptions} py-5`}>
        <li>
          <Image
            width="12"
            height="12"
            alt="Blue"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-blue_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1724046212237"
          />
        </li>
        <li>
          <Image
            width="12"
            height="12"
            alt="Purple"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-purple_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1724047056470"
          />
        </li>
        <li>
          <Image
            width="12"
            height="12"
            alt="Midnight"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-midnight_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1724047056495"
          />
        </li>
        <li>
          <Image
            width="12"
            height="12"
            alt="Starlight"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-starlight_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1724047423112"
          />
        </li>
        <li>
          <Image
            width="12"
            height="12"
            alt="Orange"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-orange_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1724047056468"
          />
        </li>
      </ul>
      <div className="flex flex-col ">
        <p className="text-sm font-SFregular text-[#b64400]">{text[0]}</p>
        <p className="text-lg text-black font-SFmedium text-wrap ">{text[1]}</p>
      </div>
      <p className="text-sm font-SFregular text-[#3f4643]">{text[2]}</p>
    </div>
  );
};

export default ProductCard;
