import HeadingWithButton from "../HeadingWithButton";
import projectsIcon from "/public/websites/architect/projects/projectsIcon.svg";
import project1 from "/public/websites/architect/projects/otherProject1.avif";
import project2 from "/public/websites/architect/projects/otherProject2.avif";
import project3 from "/public/websites/architect/projects/otherProject3.avif";
import project4 from "/public/websites/architect/projects/otherProject4.avif";
import Button from "../Button";
import Image, { StaticImageData } from "next/image";

type ProjectBannerProps = {
    image: StaticImageData;
    title: string;
    tags: string[];
    alt?: string;
};

const ProjectBanner: React.FC<ProjectBannerProps> = ({ image, title, tags, alt = 'project' }) => {
    return (
        <div className="relative rounded-lg w-full min-h-[500px] h-auto">
            <Image src={image} alt={alt} className="w-full h-full object-cover rounded-lg" />

            <div className="absolute bottom-0 w-full flex flex-col items-center rounded-b-lg gap-2 justify-end pb-5 bg-gradient-to-t from-black to-transparent">
                <div className="flex gap-2 flex-wrap justify-center items-center">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="px-2 py-1 backdrop-blur-sm rounded-md bg-black/20"
                        >
                            <span className="text-white text-[12px] tracking-tight font-bold uppercase">{tag}</span>
                        </div>
                    ))}
                </div>
                <span className="text-white text-[20px] tracking-tight font-medium">{title}</span>
            </div>
        </div>
    );
};

function OtherProjects() {
    const projects = [
        {
            image: project1,
            title: "LuxeHaven Villa",
            tags: ["Residential", "Luxury Villa"],
        },
        {
            image: project2,
            title: "Celestial Towers Condominiums",
            tags: ["Residential", "Apartment and Condo"],
        },
        {
            image: project3,
            title: "The Sunny Haven Residence",
            tags: ["Residential", "SINGLE FAMILY HOME"],
        },
        {
            image: project4,
            title: "SkyBloom Residences",
            tags: ["Residential", "MULTI-FAMILY RESIDENTIAL COMPLEX"],
        }
    ]
    return (
        <div className="flex flex-col h-full items-center justify-center bg-[#211f1a]">
            <HeadingWithButton
                svg={projectsIcon}
                align="center"
                heading={["Other projects you may feel inspiring"]}
                btnText="OTHER PROJECTS"
                color="dark"
            />
            <div className="grid grid-cols-2 gap-5 w-full max-md:grid-cols-1 h-auto px-12 max-lg:px-5">
                {projects.map((project, index) => (
                    <ProjectBanner key={index} {...project} />
                ))}
            </div>

            <div className="flex justify-center mt-20">
                <Button text="Explore All Projects" buttonBg="orange" />
            </div>

        </div>
    )
}

export default OtherProjects;