import Image from "next/image";
import slack from "/public/websites/dripify/images/integrationTools/slack.svg";
import clickup from "/public/websites/dripify/images/integrationTools/clickup-2.svg";
import hubspot from "/public/websites/dripify/images/integrationTools/hubspot.svg";
import monday from "/public/websites/dripify/images/integrationTools/monday.svg";
import activecampaign from "/public/websites/dripify/images/integrationTools/activecampaign.svg";
import gradientlogo from "/public/websites/dripify/images/integrationTools/gradient-logo.svg";
import salesforce from "/public/websites/dripify/images/integrationTools/salesforce-1.svg";
import excel from "/public/websites/dripify/images/integrationTools/excel.svg";
import zapier from "/public/websites/dripify/images/integrationTools/zapier.svg";
import pipedrive from "/public/websites/dripify/images/integrationTools/pipedrive.svg";
import zendesk from "/public/websites/dripify/images/integrationTools/zendesk.svg";
import intercom from "/public/websites/dripify/images/integrationTools/intercom.svg";
import zoho from "/public/websites/dripify/images/integrationTools/zoho.svg";
// import asana from "/public/websites/dripify/images/integrationTools/Asana-Symbol-Coral-SVG.svg";

type LogoScrollProps = {
  scrolldirection: string;
};

const LogoScroll = ({ scrolldirection }: LogoScrollProps) => {
  const toolIcons = [
    {
      link: slack,
      alignment: "top-1 left-5",
    },
    {
      link: clickup,
      alignment: "top-1 left-[20rem]",
    },
    {
      link: hubspot,
      alignment: "top-1 right-5",
    },
    {
      link: activecampaign,
      alignment: "top-20 right-[12rem]",
    },
    {
      link: monday,
      alignment: "top-40 left-24 max-md:top-30",
    },
    {
      link: gradientlogo,
      alignment: "top-44 -right-10",
    },
    {
      link: salesforce,
      alignment: "top-[22rem] -left-10",
    },
    {
      link: excel,
      alignment: "top-[23rem] right-5",
    },
    {
      link: zapier,
      alignment: "top-[28rem] left-[8rem]",
    },
    {
      link: pipedrive,
      alignment:
        "top-[28rem] right-[12rem] max-md:top-[30rem] max-md:right-[10rem]",
    },
    {
      link: zendesk,
      alignment: "top-26rem left-[18rem]",
    },
    {
      link: intercom,
      alignment: "top-26rem right-[3rem]",
    },
    {
      link: zoho,
      alignment: "bottom-8 left-14",
    },
    // {
    //   link: asana,
    //   alignment: "bottom-8 right-[20rem]",
    // },
  ];
  return (
    <div className="relative flex overflow-hidden md:hidden">
      <div className={`${scrolldirection} flex gap-x-2 gap-y-5 my-5`}>
        {toolIcons.map((toolIcon, index) => (
          <Image
            key={`logo-${index}`}
            src={toolIcon.link}
            alt="ClickUp"
            width={120}
            height={120}
          />
        ))}
        {/* Duplicate set of images for seamless loop */}
        {toolIcons.map((toolIcon, index) => (
          <Image
            key={`logo-duplicate-${index}`}
            src={toolIcon.link}
            alt="ClickUp"
            width={120}
            height={120}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroll;
