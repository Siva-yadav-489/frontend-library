import quotes from "/public/websites/architect/projects/quotes.svg";
import businesshub from "/public/websites/architect/projects/businesshub-MD.avif";
import Image from "next/image";

function ProjectTestimonial() {
    return (
        <div className="bg-[#f7f2e9] p-[50px] max-md:p-[20px] rounded-lg my-10">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                    <Image src={quotes} alt="quotes" className="w-10 h-10 rotate-180 rotate-y-180" />
                    <div className="w-full border-[#14141433] border-1 border-dashed"></div>
                </div>
                <div className="text-[24px] font-medium tracking-tight text-[#21201b] leading-[1.2]">
                    Skyline Corporate Hub embodies the future of workspaces. The balance between sustainability, aesthetics, and functionality is remarkable. From the collaborative areas to the rooftop lounge, every corner is designed to inspire productivity and innovation.
                </div>
                <div className="flex flex-row-reverse items-center gap-2">
                    <Image src={quotes} alt="quotes" className="w-10 h-10 rotate-y-180" />
                    <div className="w-full border-[#14141433] border-1 border-dashed"></div>
                </div>
            </div>

            <div className="flex items-center max-md:justify-center max-md:flex-col gap-3">
                <Image src={businesshub} alt="businesshub" className="w-25 h-25 object-cover rounded-xl" />
                <div>
                    <h3 className="text-[24px] font-medium tracking-tight text-[rgb(31,31,31)] leading-[1.1] mb-1">Robin Milford</h3>
                    <span className="text-[18px] font-medium text-[#5e5d5a] leading-[1.1]">MD, Businesshub</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectTestimonial;
