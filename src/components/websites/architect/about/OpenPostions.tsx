import { Container } from "@/components/websites/architect/Container";
import HeadingWithButton from "../HeadingWithButton";
import Button from "../Button";
import calendar from "/public/websites/architect/about/calendar.svg";
import clock from "/public/websites/architect/about/clock.svg";
import dollar from "/public/websites/architect/about/dollar.svg";
import Image from "next/image";
import graph from "/public/websites/architect/about/graph.svg";

const jobs = [
  {
    title: "Project Manager",
    date: "Jan 11, 2025",
    type: "Full Time",
    salary: "$75,000 - $95,000 per year",
  },
  {
    title: "Architectural Drafter",
    date: "Jan 31, 2025",
    type: "Part Time",
    salary: "$25 - $35 per hour",
  },
  {
    title: "Architectural Designer",
    date: "Mar 27, 2025",
    type: "Full Time",
    salary: "$70,000 - $85,000/year",
  },
];

export const OpenPostions = () => {
  return (
    <div className="bg-[#211f1a]">
      <Container>
        <div className="flex flex-col gap-10">
          <HeadingWithButton
            heading={[
              "Be part of a forward-thinking company.",
              "Our roles are more than just jobs—",
              "they're a chance to make an impact.",
            ]}
            btnText="CAREER - OPEN POSITIONS"
            svg={graph}
            align="center"
            color="dark"
          />

          <ul className="grid grid-cols-1">
            {jobs.map((job, index) => (
              <li key={index} className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 p-7 max-md:px-0 border-b border-[#ffffff1a] text-[#fffbf5]">
                {/* Left: Job Title */}
                <div className="text-xl  font-medium">
                  {job.title}
                </div>
                {/* Center: Details */}
                <div className="flex flex-col gap-2 text-base min-w-[250px] text-right">
                  {[
                    { icon: calendar, alt: "calendar", value: job.date },
                    { icon: clock, alt: "clock", value: job.type },
                    { icon: dollar, alt: "dollar", value: job.salary },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Image src={item.icon} alt={item.alt} width={20} height={20} />
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
                {/* Right: Button */}
                <div className="flex md:justify-end">
                  <Button text="View Job" buttonBg="orange" />
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-[#FFFFFF0D] p-10 text-center rounded-lg w-full">
            <p className="text-[#fffbf5] text-2xl max-lg:text-[20px] font-medium max-w-6xl mx-auto">
            If you don’t see an open position that fits, we’d still love to hear from you! <span className="text-[#ff8933]">Drop us a note</span> about how we could collaborate—we’re always excited to connect with talented people and grow together.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};