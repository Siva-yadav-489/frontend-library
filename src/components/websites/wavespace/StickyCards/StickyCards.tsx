import Card from "./Card";
import image1 from "/public/websites/wavespace/stickyCards/image1.webp";
import image2 from "/public/websites/wavespace/stickyCards/image2.webp";
import image3 from "/public/websites/wavespace/stickyCards/image3.webp";
import image4 from "/public/websites/wavespace/stickyCards/image4.webp";
import image5 from "/public/websites/wavespace/stickyCards/image5.webp";

const StickyCards = () => {
  const cardsInfo = [
    {
      title: "Branding Identity",
      description:
        "Create a trusted, global brand with our expert designs and strategies. We help improve your brand's visibility, credibility, and connection with customers both online and offline.",
      points: [
        "Rebranding",
        "Brand Guidelines",
        "Brand Strategy",
        "Brand Collaterals",
        "Visual Identity Design",
        "Brand Experience",
        "Brand Audits",
      ],
      buttonText: "Build brand identity",
      hoverColor: "bg-[#ebfe5b]",
      buttonStyle: "bg-white text-black",
      image: image1,
      cardBgColor: "bg-[#3f2fee]",
    },
    {
      title: "UI UX Design",
      description:
        "Turn your ideas into designs that help to business growth. Our UI UX services create easy-to-use, eye-catching digital experiences that keep users engaged, improve satisfaction.",
      points: [
        "User Research",
        "Wireframe & Prototyping",
        "UX Design",
        "Mobile App",
        "Web App Design",
        "Interaction Design",
        "Design System",
      ],
      buttonText: "Improve product UX",
      buttonStyle: "bg-black text-white",
      hoverColor: "bg-[#3f2fee]",
      image: image2,
      cardBgColor: "bg-white",
    },
    {
      title: "Web Design",
      description:
        "Get a website that looks great and drives real results. With responsive, user-friendly design, your site will engage visitors, boost conversions, and enhance your brand’s online presence..",
      points: [
        "Responsive Web Design",
        "Mockups & Wireframes",
        "SEO-Friendly Web Design",
        "Customized Design",
        "UX/UI Design",
        "Website Design",
        "Landing Page Design",
      ],
      buttonText: "Design website today",
      buttonStyle: "bg-black text-white",
      hoverColor: "bg-[#3f2fee]",
      image: image3,
      cardBgColor: "bg-[#ffd500]",
    },
    {
      title: "Build Product (MVP)",
      description:
        "Change your idea into a real product with our MVP development services. We focus on the essential features, test with real users, and help you launch fast, get feedback, for saving your time and money.",
      points: [
        "Feature Prioritization",
        "Product Strategy",
        "Rapid Prototyping",
        "Web & App Development",
        "Motion Design & Animation",
        "Usability Testing",
        "Launch and Iteration",
      ],
      buttonText: "Design website today",
      buttonStyle: "bg-white text-black",
      hoverColor: "bg-[#ebfe5b]",
      image: image4,
      cardBgColor: "bg-[#ff531a]",
    },
    {
      title: "Webflow",
      description:
        "Build beautiful, fast websites with our Webflow & Framer development services. We make sure your site is easy to use and helps you reach your goals quickly.",
      points: [
        "Websites",
        "Landing Pages",
        "SEO Optimization",
        "Custom Design",
        "Custom Integrations",
        "Performance Optimization",
        "Quality Assurance",
      ],
      buttonText: "Launch webflow site",
      buttonStyle: "bg-white text-black",
      hoverColor: "bg-[#ebfe5b]",
      image: image5,
      cardBgColor: "bg-black",
    },
  ];
  return (
    <div className="flex flex-col">
      {cardsInfo.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          points={card.points}
          buttonStyle={card.buttonStyle}
          hoverColor={card.hoverColor}
          buttonText={card.buttonText}
          image={card.image}
          cardBgColor={card.cardBgColor}
        />
      ))}
    </div>
  );
};

export default StickyCards;
