import { StaticImageData } from "next/image";
import Container from "../Container";
import Button from "../Button";
import Image from "next/image";
import rightTopArrow from "/public/websites/wavespace/rightTopArrow.webp";
import blackRightTopArrow from "/public/websites/wavespace/blackRightTopArrow.webp";

type CardProps = {
  title: string;
  description: string;
  points: string[];
  buttonText: string;
  buttonStyle: string;
  hoverColor: string;
  image: StaticImageData;
  cardBgColor: string;
};

const Card = ({
  title,
  description,
  points,
  buttonText,
  buttonStyle,
  hoverColor,
  image,
  cardBgColor,
}: CardProps) => {
  return (
    <div className={`w-full sticky top-0 ${cardBgColor}`}>
      <Container
        className={`flex max-md:flex-col items-start justify-between py-[50px] max-md:py-5 ${
          buttonStyle === "bg-black text-white" ? "text-black" : "text-white"
        }`}
      >
        <section className="md:basis-2/3">
          <h2 className="text-[43px] max-md:text-4xl font-extrabold mb-6">
            {title}
          </h2>
          <div className="flex">
            <div className="flex flex-col max-w-[350px]">
              <p className="text-[17px] font-medium mb-7">
                {description.replace(/"/g, "&quot;")}
              </p>
              <Button
                text={buttonText}
                textSize="text-[14.5px] max-md:text-[14px]"
                btnStyle={`${buttonStyle} py-3.5`}
                hoverColor={hoverColor}
              >
                {buttonStyle === "bg-black text-white" ? (
                  <>
                    <Image
                      src={rightTopArrow}
                      alt="rightTopArrow"
                      className="w-3 box-content bg-transparent absolute top-1.5 right-1.5 shrink-0"
                    />
                    <Image
                      src={rightTopArrow}
                      alt="rightTopArrow"
                      className="w-3 box-content bg-transparent absolute bottom-1.5 left-1.5 shrink-0"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={blackRightTopArrow}
                      alt="blackRightTopArrow"
                      className="w-3 box-content bg-transparent absolute top-1.5 right-1.5 shrink-0"
                    />
                    <Image
                      src={blackRightTopArrow}
                      alt="blackRightTopArrow"
                      className="w-3 box-content bg-transparent absolute bottom-1.5 left-1.5 shrink-0"
                    />
                  </>
                )}
              </Button>
            </div>
            <ul className="ml-20 max-lg:ml-5 max-md:hidden">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="text-[13px] list-none font-normal mb-1"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="md:basis-1/3 max-md:w-full max-md:mt-10 flex justify-end">
          <Image
            src={image}
            alt={title}
            className="w-[350px] max-md:w-full h-auto object-cover"
          />
        </section>
      </Container>
    </div>
  );
};

export default Card;
