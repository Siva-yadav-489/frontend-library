import projectBgImg from "/public/websites/architect/ourBestProjects/project-1.webp";
import Image from "next/image";

function ProjectHero() {
  return (
    <div className="relative w-full">
      <Image
        src={projectBgImg}
        alt="Project Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 lg:right-0 px-5">
        <h1
          className="text-white text-[85px] max-lg:text-[50px] max-md:text-[40px] font-medium tracking-tighter max-lg:text-left leading-[1.1] text-right"
          style={{ textShadow: '0px -9px 36px #000000' }}
        >
          Skyline Corporate Hub
        </h1>
      </div>
    </div>

  );
}

export default ProjectHero;
