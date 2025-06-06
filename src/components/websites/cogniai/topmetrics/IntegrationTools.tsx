import Image from "next/image";
import gmailLogo from "/public/websites/cogniai/images/integrationTools/gmail-logo.svg";
import facebookLogo from "/public/websites/cogniai/images/integrationTools/facebook-logo.svg";
import instagramLogo from "/public/websites/cogniai/images/integrationTools/instagram-logo.svg";
import twitterLogo from "/public/websites/cogniai/images/integrationTools/x-logo.svg";
import CardHeading from "./CardHeading";

const IntTools = () => {
  const socialMediaLogos = [
    {
      logo: gmailLogo,
      name: "Gmail",
      subtext: "Emails Sent:1,200",
      values: "+8%",
    },
    {
      logo: facebookLogo,
      name: "Facebook",
      subtext: "Ad CTR:4.2%",
      values: "+6%",
    },
    {
      logo: instagramLogo,
      name: "Instagram",
      subtext: "Profile Visits:18,500",
      values: "+12%",
    },
    {
      logo: twitterLogo,
      name: "X(twitter)",
      subtext: "Tweets Posted:150",
      values: "+5%",
    },
  ];
  return (
    <div className="grid grid-cols-2 max-md:col-span-2 gap-3 items-center bg-white/50 backdrop-opacity-10 p-4 rounded-3xl">
      <CardHeading title="Integration Tools" />
      {socialMediaLogos.map((item, index) => {
        return (
          <div
            key={index}
            className="flex bg-white/75  p-1.5 items-center justify-start gap-3 rounded-full"
          >
            <Image
              height={32}
              width={32}
              className="bg-stone-100 rounded-full p-2 box-content w-8 h-8 flex-1"
              src={item.logo}
              alt={item.name}
            />
            <div className="leading-tight tracking-wide max-xs:hidden flex-1/3 sm:pr-4">
              <span className="font-regular text-sm text-black">
                {item.name}
              </span>{" "}
              <br />
              <span className="text-[0.6rem] xl:text-nowrap text-stone-400 max-lg:hidden max-md:block font-light">
                {item.subtext}
              </span>
            </div>
            <button className="bg-[#03a638] rounded-full text-[0.6rem] tracking-wider max-lg:hidden max-md:block w-fit lg:flex-1 font-light text-white px-2 py-0.5 mr-2">
              {item.values}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default IntTools;
