import { Container } from "@/components/websites/architect/Container";
import HeadingWithButton from "@/components/websites/architect/HeadingWithButton";
import team from "/public/websites/architect/about/team.svg";
import oliver from "/public/websites/architect/about/Oliver.png";
import ethan from "/public/websites/architect/about/Ethan.png";
import jasper from "/public/websites/architect/about/Jasper.png";
import adrian from "/public/websites/architect/about/Adrian.jpg";
import finn from "/public/websites/architect/about/Finn.png";
import liam from "/public/websites/architect/about/Liam.png";
import nolan from "/public/websites/architect/about/Nolan.png";
import Image from "next/image";

const teamMembers = [
  { name: "Oliver Vance", role: "Lead Architect", imageUrl: oliver },
  { name: "Ethan Calder", role: "Structural Engineer", imageUrl: ethan },
  { name: "Jasper Monroe", role: "Interior Designer", imageUrl: jasper },
  { name: "Adrian Cole", role: "Project Manager", imageUrl: adrian },
  { name: "Finn Mercer", role: "Landscape Architect", imageUrl: finn },
  { name: "Lian Rivers", role: "Design Consultant", imageUrl: liam },
  { name: "Nolan Reed", role: "3D Visualization Expert", imageUrl: nolan },
];

export const OurTeam = () => {
  return (
    <div className="bg-[#FFFBF5]">
      <Container>
        <div className="flex flex-col gap-12">
          <HeadingWithButton
            svg={team}
            align="start"
            heading={["Get to know the team that's as passionate about your project as you are."]}
            btnText="OUR TEAM"
            color="light"
            extraStyle="max-w-[800px]"
          />

          <ul className="flex flex-col divide-y divide-[#E6E1D9] w-full ">
            {teamMembers.map((member, index) => (
              <li
                key={index}
                className="w-full py-10"
              >
                <div className="flex items-center w-full max-w-4xl ml-auto gap-5">
                  {/* Left: Image */}
                  <div className="flex items-center gap-5">
                    <div className="w-[117px] h-[117px] max-md:w-[100px] max-md:h-[100px] relative">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex max-md:flex-col w-full">
                    <h3 className="text-2xl max-md:text-[20px] font-medium w-full">{member.name}</h3>
                    <p className="text-lg max-lg:text-[17px] text-[#6B655A] font-medium w-full">{member.role}</p>
                  </div>

                  <div>
                    <button className="p-2 rounded bg-[#F3EEE7] hover:bg-[#F3EEE7] transition">
                      <svg width="24" height="24" fill="none" stroke="#6B655A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};