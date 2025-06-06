import Button from "../Button";
import HeadingWithButton from "../HeadingWithButton";
import ServicesCard from "./ServicesCard";
import servicesSvg from "/public/websites/architect/ourServices.svg";

const OurServices = () => {
  const services = [
    {
      name: "Architectural Design",
      concepts: [
        "Site Planning",
        "Layout Design",
        "3D Visualization",
        "Rendering",
        "Construction Documentation",
        "Schematic Design Development",
        "BIM",
        "And more...",
      ],
      para: [
        "Dream it, we’ll design it! From big-picture layouts to the ",
        "tiniest details, our architectural magic brings your ideas ",
        "to life with creativity and precision!",
      ],
    },
    {
      name: "Interior Design & Planning",
      concepts: [
        "Space Planning & Optimization",
        "Furniture & Fixture Selection",
        "Material Selection",
        "Lighting Design",
        "Art & Accessory Curation",
        "Custom Cabinetry Design",
        "Interior Landscaping",
      ],
      para: [
        "Make your space shine! Our team creates inviting, ",
        "beautiful interiors that reflect your style and make every ",
        "room a favorite place to be.",
      ],
    },
    {
      name: "Consulting Services",
      concepts: [
        "Site & Building Code Consultation",
        "Design & Concept Review",
        "Technical Advisory Services",
        "Cost Estimation & Budgeting",
        "Project Feasibility Consulting",
      ],
      para: [
        "Consider us your design whisperers! We provide expert ",
        "advice to help your project sparkle with creativity, ",
        "efficiency, and spot-on solutions.",
      ],
    },
    {
      name: "Project Management",
      concepts: [
        "Pre-Construction Planning",
        "Site Inspection & Supervision",
        "Cost Estimation",
        "Resource Allocation",
        "Timeline & Milestone Tracking",
        "Contractor & Vendor Management",
        "Final Inspection & Handover",
      ],
      para: [
        "We handle the hustle! From start to finish, we keep your ",
        "project on track, on budget, and stress-free – so you ",
        "can sit back and watch the magic happen.",
      ],
    },
  ];
  return (
    <div className="bg-[#211f1a] pt-16 pb-24 ">
      <div>
        <div className="px-12 max-[1200px]:px-5">
          <HeadingWithButton
            align="start"
            svg={servicesSvg}
            heading={[
              "Explore our services and see how we bring ",
              "creativity and expertise to every project",
            ]}
            btnText={"OUR SERVICES"}
            color="dark"
          />
        </div>
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            name={service.name}
            concepts={service.concepts}
            para={service.para}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button text="Explore All Services" buttonBg="orange" />
      </div>
    </div>
  );
};

export default OurServices;
