import { Container } from "@/components/websites/architect/Container";
import HeadingWithButton from "@/components/websites/architect/HeadingWithButton";
import graph from "/public/websites/architect/about/graph.svg";
import Image from "next/image";

const awards = [
  {
    year: "2024",
    title: "Modern Heritage Preservation Award",
    description:
      'Honored for preserving and repurposing historical structures in Paris with the renovation of the "Rivière Mansion" heritage site.',
    logo: "/websites/architect/about/recognition/award1.svg",
  },
  {
    year: "2023",
    title: "Best Commercial Architecture",
    description:
      'Awarded for the cutting-edge design and functionality of the "Skyline Towers" commercial complex.',
    logo: "/websites/architect/about/recognition/award2.svg",
  },
  {
    year: "2022",
    title: "Architectural Excellence Award",
    description:
      'Awarded for outstanding design and craftsmanship on the "Modern Oasis Residence".',
    logo: "/websites/architect/about/recognition/award3.svg",
  },
  {
    year: "2022",
    title: "Community Impact Award",
    description:
      'Recognized for the positive impact on the local community through the design and construction of the "Harmony Commons" community center.',
    logo: "/websites/architect/about/recognition/award4.svg",
  },
  {
    year: "2021",
    title: "Excellence in Interior Design",
    description:
      'Acknowledged for outstanding interior design work in the "Luxury Haven Hotel" project.',
    logo: "/websites/architect/about/recognition/award5.svg",
  },
];

export const Recognition = () => {
  return (
    <Container className="bg-[#FFFBF5] w-full h-full flex max-lg:flex-col gap-2">
      <div className="w-full h-full lg:sticky lg:top-20">
        <div className="max-w-[650px]">
          <HeadingWithButton
            heading={["Here are the awards and accolades that make us proud."]}
            btnText="RECOGNITION"
            svg={graph}
            align="start"
            color="light"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex justify-between items-start max-md:flex-col-reverse border-b pb-10 gap-15"
          >
            <div className="text-[#21201b] flex flex-col gap-4 max-w-[580px]">
              <div className="flex flex-col gap-1">
                <p className="opacity-80">{award.year}</p>
                <h3 className="text-2xl max-lg:text-[22px] font-semibold">
                  {award.title}
                </h3>
              </div>
              <p className="text-lg max-lg:text-[17px]">{award.description}</p>
            </div>
            <Image
              src={award.logo}
              alt={`${award.title} logo`}
              className="w-[115px] h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};