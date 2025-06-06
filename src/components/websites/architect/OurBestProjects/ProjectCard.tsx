import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  heading: string;
  desc: string;
  location: string;
  year: string;
  area: string;
  image: string;
};

const ProjectCard = ({
  heading,
  desc,
  location,
  year,
  area,
  image,
}: ProjectCardProps) => {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-black p-1 lg:space-x-1 mb-14 flex max-lg:flex-col-reverse justify-between rounded-lg max-lg:h-fit lg:max-h-[36rem]">
        <section className="flex-col flex lg:w-[40%] justify-between items-start bg-[rgba(255,255,255,0.14)] rounded-md px-7 max-lg:p-5 py-6">
          <div className="text-[#fffbf5]">
            <h1 className="text-[25px] tracking-tighter max-lg:text-xl font-semibold mb-2">
              {heading}
            </h1>
            <p className="font-medium text-[15px]">{desc}</p>
          </div>
          <div className="w-full text-[15px] max-lg:my-14">
            <section className="flex items-center space-x-2 border-b mb-3.5 pb-3 border-stone-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-stone-400"
              >
                <path
                  fillRule="evenodd"
                  d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-medium text-[#fffbf5]">{location}</p>
            </section>
            <section className="flex items-center space-x-2 border-b mb-3.5 pb-3 border-stone-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-stone-400"
              >
                <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                <path
                  fillRule="evenodd"
                  d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-medium text-[#fffbf5]">{year}</p>
            </section>
            <section className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-stone-400"
              >
                <path d="M3.75 2A1.75 1.75 0 0 0 2 3.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.25.25 0 0 1 .25-.25h1.5a.75.75 0 0 0 0-1.5h-1.5ZM10.75 2a.75.75 0 0 0 0 1.5h1.5a.25.25 0 0 1 .25.25v1.5a.75.75 0 0 0 1.5 0v-1.5A1.75 1.75 0 0 0 12.25 2h-1.5ZM3.5 10.75a.75.75 0 0 0-1.5 0v1.5c0 .966.784 1.75 1.75 1.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.25.25 0 0 1-.25-.25v-1.5ZM14 10.75a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-1.5a.75.75 0 0 0 0 1.5h1.5A1.75 1.75 0 0 0 14 12.25v-1.5ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              </svg>
              <p className="font-medium text-[#fffbf5]">{area}</p>
            </section>
          </div>
          <div className="flex items-center mt-10 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 text-white"
            >
              <path
                fillRule="evenodd"
                d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                clipRule="evenodd"
              />
            </svg>

            <Link
              href={"/"}
              className="text-[#ff833b] text-base max-lg:text-lg ml-2"
            >
              View Project
            </Link>
          </div>
        </section>
        <Image
          src={image}
          alt="project-1"
          width={820}
          height={545}
          className="lg:w-[60%] rounded-md max-lg:w-full max-lg:mb-1 max-lg:max-h-[40rem] object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
