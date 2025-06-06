import Image from "next/image";
import house from "/public/websites/architect/about/house.png"

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Image src={house} alt="Hero" fill className="object-cover object-top z-0" />

      <div className="absolute bottom-0 w-full h-[650px] text-white z-10 bg-linear-to-b from-[#99eeff00]/0 to-[#211f1a]/100 flex items-end">
        <h1 className="text-[55px] max-lg:text-[48px] max-md:text-[32px] leading-none font-medium tracking-tighter max-w-[1300px] px-[50px] max-md:px-[20px] mb-12">
          We listen, we plan, and we build—always keeping your goals at the heart of everything we do.
        </h1>
      </div>
    </div>
  );
};

export default Hero;