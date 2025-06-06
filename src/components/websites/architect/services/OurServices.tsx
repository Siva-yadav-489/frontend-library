import ServicesCard from "@/components/websites/architect/ourServices/ServicesCard";

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
        "Dream it, we'll design it! From big-picture layouts to the ",
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
    {
      name: "Landscape Architecture",
      concepts: [
        "Conceptual Site Planning",
        "Hardscape Design",
        "Planting Design",
        "Landscape Lighting Design",
        "Water Feature Design",
        "Irrigation System Planning",
        "Green Roof & Vertical Garden Design",
      ],
      para: [
        "Transform outdoor spaces into stunning landscapes with our expert planning and design services.",
      ],
    },
    {
      name: "3D Rendering Visualization",
      concepts: [
        "Photorealistic Renderings",
        "Virtual Reality Walkthroughs",
        "360-Degree Panoramic Views",
        "Exterior & Landscape Renderings",
        "Interior 3D Renderings",
        "Conceptual Sketch Renders",
      ],
      para: [
        "Bring your designs to life with cutting-edge 3D rendering and visualization techniques.",
      ],
    },
    {
      name: "Feasibility Studies",
      concepts: [
        "Site Analysis",
        "Market Research",
        "Cost Estimation",
        "Risk Assessment",
        "Sustainability Evaluation",
        "Legal & Regulatory Analysis",
        "Resource Availability Studies",
      ],
      para: [
        "Ensure project success with comprehensive feasibility studies and expert analysis.",
      ],
    },
  ];
  return (
    <div className="bg-[#211f1a]">
      <div className="px-12 max-[1200px]:px-5 py-10">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            name={service.name}
            concepts={service.concepts}
            para={service.para}
            sticky={false}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
