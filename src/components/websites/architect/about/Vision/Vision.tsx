import HeadingWithButton from "@/components/websites/architect/HeadingWithButton";
import { Section } from "@/components/websites/architect/about/Section";
import graph from "/public/websites/architect/about/graph.svg";
import vision from "/public/websites/architect/about/vision.webp";
import Image from "next/image";

export const Vision = () => {
  return (
    <Section>
      <div id="vision" className="flex gap-2 max-lg:flex-col max-lg:justify-center max-lg:items-center min-h-screen">
        <div className="bg-[#FFFBF5] h-auto w-full max-w-[650px] max-lg:max-w-full rounded-md p-10">
          <div className="lg:sticky top-[170px]">
            <HeadingWithButton
              heading={["Inspired by tomorrow, Desiging today"]}
              btnText="Our Vision"
              svg={graph}
              align="start"
              color="light"
            />
          </div>
        </div>

        <div className="w-full h-auto flex flex-col gap-2">
          <div className="h-full">
            <Image
              src={vision}
              alt="design"
              className="w-full h-full max-lg:h-[250px] object-cover object-center rounded-md"
            />
          </div>

          <div className="bg-[#FF833B] p-[30px] rounded-md">
            <p className="text-2xl max-lg:text-[20px] font-medium">
              — Our vision is to be a global leader in architectural innovation,
              known for creating spaces that stand the test of time, reflect the
              unique stories of our clients, and contribute to a more
              sustainable and beautiful world.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
