import Image from "next/image";
import logo from "/public/websites/health/footer/health_logo.svg";
import GlowButton from "./GlowButton";
import * as motion from "motion/react-client";

const Footer = () => {
  const socials = ["INSTAGRAM", "FACEBOOK", "SPOTIFY"];
  return (
    <div className="mx-32 max-lg:mx-8 max-md:mx-4">
      <section className="text-white flex max-md:flex-col max-md:space-y-5 items-start justify-between tracking-tighter font-sans mt-36 pb-16 border-b border-b-white">
        <div>
          <h3 className="text-[21px] font-semibold mb-5 leading-6">
            © 2020—2024 <br />
            ENROUTE LABS.
          </h3>
          {socials.map((item, index) => (
            <div key={index} className="max-w-fit overflow-hidden">
              <motion.div
                initial={{ x: -15 }}
                whileHover={{ x: 15 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="text-[14px] leading-6 font-bold flex space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 mt-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
                <span>{item}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 mt-1 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </motion.div>
            </div>
          ))}
        </div>
        <div>
          <Image src={logo} alt="logo" className="w-[27rem] max-md:mb-4" />
          <div className="flex justify-end max-md:justify-start max-md:flex-col  text-[11px] font-bold mt-4">
            <span className="md:ml-6 max-md:mb-4">TERMS AND CONDITONS</span>
            <span className="md:ml-6 max-md:mb-4">COOKIES POLICY</span>
            <span className="md:ml-6 max-md:mb-4">PRIVACY POLICY</span>
          </div>
        </div>
      </section>
      <section className="pb-32 pt-20">
        <h1 className="text-white font-sans md:leading-2 max-md:mb-4 tracking-tighter text-[22px] font-bold">
          SUBSCRIBE TO OUR NEWSLETTER.
        </h1>
        <div className="flex md:items-end max-md:flex-col space-x-5">
          <input
            type="text"
            placeholder="your@email address"
            className="border border-stone-500 rounded-md placeholder:text-white tracking-tighter text-sm font-serif py-3.5 pl-6 pr-36 max-md:w-full"
          />
          <GlowButton
            text="Sign me up"
            adjustStyle="md:w-48 bg-[rgb(244,251,140)] hover:drop-shadow-[rgb(244,251,140)] drop-shadow-[#f4fb8c]/80 drop-shadow-2xl drop-shadow-xl/40 hover:drop-shadow-2xl/50"
          />
        </div>
      </section>
    </div>
  );
};

export default Footer;
