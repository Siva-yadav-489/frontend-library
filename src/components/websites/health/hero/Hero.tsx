import Image from "next/image";
import cyclist from "/public/websites/health/hero/cyclist.avif";
import HeroText from "./HeroText";
const Hero = () => {
  return (
    <div className="relative font-sans">
      <Image
        src={cyclist}
        alt="heroImage"
        className="w-full h-[100vh] object-center object-cover bg-gradient-to-t from-black to-transparent"
      />
      <div className="absolute bottom-0 left-0 w-full h-[23%] bg-gradient-to-t from-[#000] to-transparent"></div>
      <HeroText />
    </div>
  );
};

export default Hero;
