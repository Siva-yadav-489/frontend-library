import Button from "../Button";
import ToolIcons from "./ToolIcons";
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
import asana from "/public/websites/dripify/images/integrationTools/Asana-Symbol-Coral-SVG.svg";
import MdLogoScroll from "./MdLogoScroll";
import ParagraphText from "../ParagraphText";

const IntegrateTools = () => {
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
      alignment: "top-40 left-24 max-lg:top-30",
    },
    {
      link: gradientlogo,
      alignment: "top-44 right-0",
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
        "top-[28rem] right-[12rem] max-lg:top-[30rem] max-lg:right-[10rem]",
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
    {
      link: asana,
      alignment: "bottom-8 right-[20rem]",
    },
  ];
  return (
    <div>
      <div className="max-xl:mx-2 max-w-[74rem] max-md:hidden mx-auto my-20 pt-40 pb-48 relative  bg-[url(https://dripify.io/wp-content/uploads/2023/11/dots.png)]">
        <p className="text-5xl text-black font-semibold my-10 text-center">
          Integrate with the <br /> tools you already use
        </p>
        {/* <p className="font-medium text-base mb-10 text-center text-stone-500">
          Native integrations and modern webhooks let you easily connect
          <br />
          Dripify with all the software your team already uses
        </p> */}
        <ParagraphText
          text={[
            "Native integrations and modern webhooks let you easily connect",
            "Dripify with all the software your team already uses",
            "",
            "",
          ]}
          styling="mb-10"
        />
        <div className="flex justify-center my-10">
          <Button
            text={"See all integrations"}
            colors={"text-black bg-white border border-stone-800"}
          />
        </div>
        {toolIcons.map((toolIcon, index) => (
          <ToolIcons
            key={index}
            link={toolIcon.link}
            alignment={toolIcon.alignment}
          />
        ))}
      </div>
      <div className="md:hidden max-sm:mx-2 max-xl:mx-6 max-w-[74rem] mx-auto my-20 py-10 bg-[url(https://dripify.io/wp-content/uploads/2023/11/dots.png)]">
        <MdLogoScroll scrolldirection="scroll-left" />
        <MdLogoScroll scrolldirection="scroll-right" />
      </div>
    </div>
  );
};

export default IntegrateTools;
