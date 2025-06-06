import React from "react";
import HeadingWithButton from "../HeadingWithButton";
import projectsSvg from "/public/websites/architect/ourBestProjects/bestProjects.svg";
import ProjectCard from "./ProjectCard";
import project1 from "/public/websites/architect/ourBestProjects/project-1.webp";
import Button from "../Button";

const OurBestProjects = () => {
  const projects = [
    {
      heading: "Skyline Corporate Hub",
      desc: "Commercial - Office",
      location: "Central Business District.",
      year: "2022",
      area: "350,000 sq. ft.",
      image: project1.src,
    },
    {
      heading: "Skyline Corporate Hub",
      desc: "Commercial - Office",
      location: "Central Business District.",
      year: "2022",
      area: "350,000 sq. ft.",
      image: project1.src,
    },
    {
      heading: "Skyline Corporate Hub",
      desc: "Commercial - Office",
      location: "Central Business District.",
      year: "2022",
      area: "350,000 sq. ft.",
      image: project1.src,
    },
    {
      heading: "Skyline Corporate Hub",
      desc: "Commercial - Office",
      location: "Central Business District.",
      year: "2022",
      area: "350,000 sq. ft.",
      image: project1.src,
    },
  ];
  return (
    <div className="bg-[#f7f2e9] pt-20 max-md:pt-10 pb-14 px-12 max-[1200px]:px-5">
      <div>
        <div className="max-xs:hidden">
          <HeadingWithButton
            align="center"
            svg={projectsSvg}
            heading={[
              "What we’ve been up to—",
              "check out our latest projects",
            ]}
            btnText="OUR BEST PROJECTS"
            color="light"
          />
        </div>
        <div className="xs:hidden px-6">
          <HeadingWithButton
            align="center"
            svg={projectsSvg}
            heading={[
              "What we’ve been up to—",
              "check out our latest projects",
            ]}
            btnText="OUR BEST PROJECTS"
            color="light"
          />
        </div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            heading={project.heading}
            desc={project.desc}
            location={project.location}
            year={project.year}
            area={project.area}
            image={project.image}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button text="View All Projects" buttonBg="black" />
      </div>
    </div>
  );
};

export default OurBestProjects;
