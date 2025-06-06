import HeadingWithButton from "@/components/websites/architect/HeadingWithButton";
import Image from "next/image";
import { Container } from "@/components/websites/architect/Container";
import graph from "/public/websites/architect/about/graph.svg";
import house from "/public/websites/architect/about/milestones/house.svg";
import tree from "/public/websites/architect/about/milestones/tree.svg";
import leaf from "/public/websites/architect/about/milestones/leaf.svg";
import hash from "/public/websites/architect/about/milestones/hash.svg";
import earth from "/public/websites/architect/about/milestones/earth.svg";
import people from "/public/websites/architect/about/milestones/people.svg";

const milestonesList = [
  {
    svg: house,
    text: "Designed over 1,500 dream homes that families love"
  },
  {
    svg: tree,
    text: "Over 500 acres of lush landscapes created"
  },
  {
    svg: leaf,
    text: "Saved 1 million kilowatts of energy annually"
  },
  {
    svg: hash,
    text: "Over 800 renovations that reimagine spaces"
  },
  {
    svg: earth,
    text: "Worked in 10 countries across the globe"
  },
  {
    svg: people,
    text: "Over 2,000 Happy Clients and Counting"
  },
];

type MilestoneProps = {
  svg: string;
  text: string;
};

const MilestoneList = ({ svg, text }: MilestoneProps) => {
  return (
    <div className="h-[120px] pb-[30px] flex gap-5 border-b border-[#1414141a]">
      <div className="aspect-square w-[90px] bg-[#FFFBF5] flex justify-center items-center rounded-md">
        <div className="aspect-square w-10 bg-[#FF833B] h-fit rounded-sm">
          <Image
            src={svg}
            alt="Milestone Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex items-center text-lg font-medium">{text}</div>
    </div>
  );
};

export const Milestones = () => {
  return (
    <div className="bg-[#f7f2e9]">
      <Container>
        <div className="max-w-[800px] w-full text-4xl">
          <HeadingWithButton
            heading={[
              "Here’s a glimpse at the milestones we’ve reached on our journey to designing spaces that inspire and endure.",
            ]}
            btnText="MILESTONES AND IMPACT"
            svg={graph}
            align="start"
            color="light"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {milestonesList.map((milestone, idx) => (
            <MilestoneList key={idx} svg={milestone.svg} text={milestone.text} />
          ))}
        </div>
      </Container>
    </div>
  );
};
