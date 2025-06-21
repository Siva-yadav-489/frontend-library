import Image, { StaticImageData } from "next/image";

type HexagonImageProps = {
  image: StaticImageData;
  className: string;
};

const HexagonImage = ({ image, className }: HexagonImageProps) => {
  return (
    <div className={`${className}`}>
      <Image
        src={image}
        alt="hexagonImage"
        className="w-full h-full z-10 bg-blue-200"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
    </div>
  );
};

export default HexagonImage;
