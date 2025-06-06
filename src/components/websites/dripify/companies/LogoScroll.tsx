import Image from "next/image";
import clickup from "/public/websites/dripify/images/companies/clickup.svg";

type LogoScrollProps = {
  scrolldirection: string;
};

const LogoScroll = ({ scrolldirection }: LogoScrollProps) => {
  return (
    <div>
      {/* doesnt scroll */}
      <div className="relative flex overflow-hidden max-md:hidden">
        <div className={`flex gap-x-2 gap-y-3`}>
          {[...Array(10)].map((_, index) => (
            <Image
              key={`logo-${index}`}
              src={clickup}
              alt="ClickUp"
              width={120}
              height={120}
            />
          ))}
          {/* Duplicate set of images for seamless loop */}
          {[...Array(10)].map((_, index) => (
            <Image
              key={`logo-duplicate-${index}`}
              src={clickup}
              alt="ClickUp"
              width={120}
              height={120}
            />
          ))}
        </div>
      </div>
      {/* scrolls */}
      <div className="relative flex overflow-hidden md:hidden">
        <div className={`${scrolldirection} flex gap-x-2 gap-y-3`}>
          {[...Array(10)].map((_, index) => (
            <Image
              key={`logo-${index}`}
              src={clickup}
              alt="ClickUp"
              width={120}
              height={120}
            />
          ))}
          {/* Duplicate set of images for seamless loop */}
          {[...Array(10)].map((_, index) => (
            <Image
              key={`logo-duplicate-${index}`}
              src={clickup}
              alt="ClickUp"
              width={120}
              height={120}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;
