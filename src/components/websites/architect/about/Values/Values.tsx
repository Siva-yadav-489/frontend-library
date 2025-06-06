import Image from "next/image";
import graph from "/public/websites/architect/about/graph.svg";
import HeadingWithButton from "@/components/websites/architect/HeadingWithButton";
import { Section } from "@/components/websites/architect/about/Section";
import { Cards } from "./Cards";
import image from "/public/websites/architect/about/values/image.png";
import image2 from "/public/websites/architect/about/values/image2.png";
import image3 from "/public/websites/architect/about/values/image3.png";
import image4 from "/public/websites/architect/about/values/image4.png";
import image5 from "/public/websites/architect/about/values/image5.png";
import image6 from "/public/websites/architect/about/values/image6.png";
import svg1 from "/public/websites/architect/about/values/svg1.svg";
import svg2 from "/public/websites/architect/about/values/svg2.svg";
import svg3 from "/public/websites/architect/about/values/svg3.svg";
import svg4 from "/public/websites/architect/about/values/svg4.svg";
import svg5 from "/public/websites/architect/about/values/svg5.svg";
import svg6 from "/public/websites/architect/about/values/svg6.svg";

const cards = [
    {
        title: "Creativity leads the way",
        description: "We believe every space deserves a spark of originality. Bold ideas to unique designs, we do everything",
        image: image,
        icon: svg1,
      },
      {
        title: "You dream it, we design it",
        description: "Your vision is our blueprint. We listen, collaborate, and turn your ideas into spaces you’ll love.",
        image: image2,
        icon: svg2,
      },
      {
        title: "Client-first, always",
        description: "Your happiness drives our success. We’re here to make your experience as seamless and satisfying as possible.",
        image: image3,
        icon: svg3,
      },
      {
        title: "Sustainability",
        description: "We’re all about building for the future—eco-friendly materials, smart designs, and a greener tomorrow.",
        image: image4,
        icon: svg4,
      },
      {
        title: "Details make the difference",
        description: "From the grand design to the tiniest features, we obsess over every detail to ensure perfection.",
        image: image5,
        icon: svg5,
      },
      {
        title: "Building with heart",
        description: "Every project reflects the passion and care we pour into our work. we create outstanding experiences.",
        image: image6,
        icon: svg6,
      },
]

export const Values = () => {
    return(
            <div id="values">
            <HeadingWithButton
            heading={[`What makes us, "US"`]}
            btnText="Core Values"
            svg={graph}
            align="center"
            color="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-[30px]">
          {cards.map((card, id) => (
            <Cards
              key={id}
              title={card.title}
              description={card.description}
              image={card.image}
              icon={card.icon}
            />
          ))}
          </div>
          </div>
    )
}