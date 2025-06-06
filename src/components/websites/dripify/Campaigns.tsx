import Image from "next/image";
import Headings from "./Headings";
import Button from "./Button";
import dripCampImage from "/public/websites/dripify/images/campaigns/drip-camp-img.webp";
import ParagraphText from "./ParagraphText";

const Campaigns = () => {
  const linkDetails = [
    {
      name: "Drip campaigns",
      link: "#",
      imageURL: "https://dripify.io/wp-content/uploads/2025/02/dc1.svg",
    },
    {
      name: "Find emails",
      link: "#",
      imageURL: "https://dripify.io/wp-content/uploads/2025/02/e1.svg",
    },
    {
      name: "Analytics",
      link: "#",
      imageURL:
        "https://dripify.io/wp-content/uploads/2025/02/Business-Chart.svg",
    },
    {
      name: "Inbox",
      link: "#",
      imageURL: "https://dripify.io/wp-content/uploads/2025/02/Group.svg",
    },
  ];
  return (
    <div className="max-xl:mx-6 max-lg:mx-6 max-sm:mx-2 max-w-[74rem] mx-auto my-16  py-5">
      <div className=" max-md:w-5/6 mx-auto">
        <Headings
          text={[
            "Run cold outreach campaigns on LinkedIn",
            "and through Email. Hassle-free",
          ]}
        />
      </div>
      <div className="flex max-md:hidden max-md:items-start items-center justify-start pt-5 my-5">
        {linkDetails.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="flex text-black items-center font-semibold text-xl w-1/4"
          >
            <Image
              src={item.imageURL}
              width="24"
              height="24"
              alt="Drip campaigns"
              className="mr-6 brightness-0 inset-96"
            />
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex max-md:hidden">
        <p className="my-2 h-0.5 w-full bg-[#6349f8]">&nbsp;</p>
        <p className="my-2 h-0.5 w-full bg-stone-300">&nbsp;</p>
        <p className="my-2 h-0.5 w-full bg-stone-300">&nbsp;</p>
        <p className="my-2 h-0.5 w-full bg-stone-300">&nbsp;</p>
      </div>
      <div className="flex max-md:flex-col items-center max-md:items-start max-sm:w-8/8 max-md:pl-5 max-md:w-6/8 max-md:mx-auto justify-between bg-[#f2f0ff] pl-14 max-md:pt-5 max-md:mt-20 rounded-3xl mt-8 mb-16">
        <div>
          <p className="text-3xl max-md:text-2xl max-md:font-medium text-black leading-tight font-bold mb-7">
            Automate sales on <br className="max-md:hidden" /> LinkedIn & email
          </p>
          {/* <p className="text-md font-medium text-stone-600 mb-7 leading-relaxed">
            Contact thousands of prospects per month on LinkedIn and via Email
            through fully automated & hyper-personalized sequence campaigns
          </p> */}
          <ParagraphText
            text={[
              "Contact thousands of prospects per month on LinkedIn and via Email through fully automated & hyper-personalized sequence campaigns",
              "",
              "",
              "",
            ]}
            styling="text-start leading-relaxed"
          />
          <Button
            text={"Learn more"}
            colors={"text-black my-5 bg-white border border-black"}
          />
        </div>
        <Image
          src={dripCampImage}
          width={700}
          height={700}
          alt="Automate sales on LinkedIn &amp; email"
          className="md:max-w-3/5 max-md:-ml-10 max-md:mb-10"
        />
      </div>
    </div>
  );
};

export default Campaigns;
