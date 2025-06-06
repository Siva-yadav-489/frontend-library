import HeadingWithButton from "../HeadingWithButton";
import servicesSvg from "/public/websites/architect/ourServices.svg";

const OurServicesHeading = () => {
    return (
        <div className="md:p-10 lg:py-25 py-12 px-5">
            <HeadingWithButton
            svg={servicesSvg}
          heading={[
            "If our services don't tick all your boxes, no",
            "worries! Share your dream project with us,",
            "and we'll create a custom plan just for you.",
          ]}
          align="center"
          btnText={"OUR SERVICES"}
          color={"light"}
        />
      </div>
    );
};

export default OurServicesHeading;