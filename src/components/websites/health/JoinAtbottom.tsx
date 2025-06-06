import Image from "next/image";
import GlowButton from "./GlowButton";
import cyclist from "/public/websites/health/joinAtBottom/cyclist.avif";

const JoinAtbottom = () => {
  return (
    <div className=" flex mx-[60px] max-lg:mx-8 max-md:mx-4 xs:max-h-96 mb-14 rounded-3xl bg-gray-600">
      <section
        className="w-full flex-1/2 pl-16 max-lg:pl-8 max-md:pl-4 max-lg:py-10 py-20 bg-cover rounded-l-3xl max-md:rounded-3xl"
        style={{
          backgroundImage: `url(${cyclist.src})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="mb-5 font-sans">
          <section className="flex items-end max-md:flex-col max-md:items-start">
            <span className="text-[#f4fb8c] text-[58px] max-lg:text-5xl max-md:text-4xl max-md:leading-5 leading-[58px] tracking-tighter font-bold">
              INTERESTED?
            </span>
            <GlowButton adjustStyle="w-60 text-nowrap md:ml-4 mb-1.5 bg-[rgb(244,251,140)] hover:drop-shadow-[rgb(244,251,140)] drop-shadow-[#f4fb8c]/80 drop-shadow-2xl drop-shadow-xl/40 hover:drop-shadow-2xl/50" />
          </section>
          <span className="text-white text-[58px] sm:text-nowrap max-lg:text-5xl max-md:text-4xl max-md:leading-14 leading-[58px] tracking-tighter font-bold">
            THAT&apos;S JUST THE START.
          </span>
        </div>
        <p className="text-lg font-medium font-sans tracking-tight text-white">
          Join elite athletes and health optimizers who trust{" "}
          <br className="max-sm:hidden" />
          Enroute Labs for their performance and longevity goals.
        </p>
      </section>
      <section className="max-md:hidden flex-1/2">
        <Image
          src={cyclist}
          alt="cyclist"
          className="rounded-r-3xl h-96 object-cover"
        />
      </section>
    </div>
  );
};

export default JoinAtbottom;
