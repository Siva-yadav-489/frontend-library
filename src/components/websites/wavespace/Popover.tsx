import Image from "next/image";
import * as motion from "motion/react-client";
import linkedinIcon from "/public/websites/wavespace/hero/linkedinIcon.webp";
import { StaticImageData } from "next/image";

type Person = {
  image: StaticImageData;
  name: string;
  designation: string;
  linkedin?: string;
};

type PopoverProps = {
  people: Person[];
  bgColor?: string;
};

const Popover = ({ people, bgColor }: PopoverProps) => {
  return (
    <div className="flex space-x-2">
      {people.map((person, index) => (
        <motion.div
          key={index}
          className="group relative"
          whileHover="hover"
          initial={{ x: 0 }}
          variants={{
            hover: {
              x: -7,
              transition: {
                duration: 0.2,
                ease: "linear",
              },
            },
          }}
        >
          <div className="absolute bottom-full left-1/2 -translate-x-[95%] mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div
              className={`flex justify-between items-start ${
                bgColor ? "bg-[#242424] text-white" : "bg-white text-black"
              } drop-shadow-xl w-48  p-2.5 rounded-md`}
            >
              <div className="flex flex-col justify-start mb-auto">
                <p className={`text-sm font-semibold `}>{person.name}</p>
                <p className="text-xs font-medium">{person.designation}</p>
              </div>
              <a href={person.linkedin}>
                <Image src={linkedinIcon} alt="linkedin" className="w-4 h-4" />
              </a>
            </div>
            {/* Triangle pointer */}
            <div
              className={`absolute -bottom-1 right-4 w-2 h-2 ${
                bgColor ? "bg-[#242424]" : "bg-white"
              } rotate-45`}
            ></div>
          </div>
          <motion.img
            src={person.image.src}
            alt={`${person.name}`}
            className="w-8 h-8 rounded-full border-2 border-white -ml-5 object-cover aspect-square"
            style={{ minWidth: "2rem", minHeight: "2rem" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Popover;
