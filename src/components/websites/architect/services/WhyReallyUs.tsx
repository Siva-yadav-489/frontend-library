import HeadingWithButton from "../HeadingWithButton";
import bestProjects from "/public/websites/architect/ourBestProjects/bestProjects.svg";
import { Cards } from "./Cards";

export const WhyReallyUs = () => {
  return (
    <div className="md:p-10 lg:py-25 py-12 px-5">
      <HeadingWithButton
        svg={bestProjects}
        align="center"
        heading={[
          "Backed by years of experience and countless happy",
          "clients, we bring unmatched skills to every project.",
        ]}
        btnText={"WHY REALLY US"}
        color={"light"}
      />
      <Cards />
    </div>
  );
};

export default WhyReallyUs;
