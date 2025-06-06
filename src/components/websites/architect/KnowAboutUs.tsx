import Image from "next/image";
import mainImage from "/public/websites/architect/knowAboutUs/knowAboutUs.avif";
import Button from "./Button";

const KnowAboutUs = () => {
  return (
    <div className="pt-20 pb-14 px-12 max-[1200px]:px-5 bg-[#fff]">
      <p className="text-[#211f1a] text-[32px] max-[1150px]:text-[26px] font-medium text-center max-[1150px]:leading-7 [1150px]:leading-9 tracking-tighter">
        <span className="text-[#30303080]">
          Welcome to our world of creativity, where
          <br className="max-[520px]:hidden md:hidden" /> every project
        </span>{" "}
        starts <br className="max-md:hidden" /> with a dream{" "}
        <span className="text-[#30303080]">
          and <br className="max-[520px]:hidden md:hidden" />
          ends with a
        </span>{" "}
        space that feels like home.
      </p>
      <Image src={mainImage} alt="main-image" className="my-14" />
      <div className="flex max-[1200px]:flex-col max-md:items-start max-[1200px]:items-center justify-between items-start">
        <div className="flex max-md:flex-col-reverse md:w-[28rem] items-center max-md:items-start justify-between bg-[#f7f2e9] p-1 rounded-lg">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="rounded-lg max-sm:w-full max-md:max-w-[35rem] md:max-w-64"
          >
            <source
              src="/websites/architect/knowAboutUs/viseo.mp4"
              type="video/mp4"
            />
          </video>
          <p className="text-black py-4 md:pl-5 max-md:px-2 pr-3 text-sm">
            Take a glimpse into our world of creativity and innovation.
          </p>
        </div>
        <div className="flex md:w-[27rem] max-[1200px]:w-full flex-col">
          <p className="text-black max-[1200px]:text-center max-md:text-start tracking-tighter max-[1200px]:mt-10 font-medium text-base">
            Our journey began 15 years ago, with a simple idea: to design spaces
            that blend beauty and functionality seamlessly. What started as a
            small team with big dreams has grown into a thriving studio, known
            for turning ideas into reality. Along the way, we’ve collaborated
            with incredible clients, tackled exciting challenges, and built
            spaces we’re truly proud of.
          </p>
          <div className="mt-10 max-md:flex max-md:justify-center">
            <Button text="Know About Us" buttonBg="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowAboutUs;
