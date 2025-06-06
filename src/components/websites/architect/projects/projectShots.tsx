import Image from "next/image";
import shot1 from "/public/websites/architect/projects/shot1.avif";
import shot2 from "/public/websites/architect/projects/shot2.avif";
import shot3 from "/public/websites/architect/projects/shot3.avif";
import shot4 from "/public/websites/architect/projects/shot4.avif";
import shot5 from "/public/websites/architect/projects/shot5.avif";
import shot6 from "/public/websites/architect/projects/shot6.avif";
import shot7 from "/public/websites/architect/projects/shot7.avif";
import chevronLeft from "/public/websites/architect/projects/chevronLeft.svg";
import chevronRight from "/public/websites/architect/projects/chevronRight.svg";

function ProjectShots() {
    const scrollImages = [shot4, shot5, shot1, shot2, shot3, shot6, shot7]
    return (
        <div className="relative flex flex-col gap-10">
            <div className="sticky top-0 left-0 flex justify-center items-center w-full h-screen bg-[#211f1a]">
                <h1 className="text-[70px] max-lg:text-[60px] max-md:text-[40px] font-medium tracking-tighter text-white leading-[1.1]">Project Shots</h1>
            </div>

            <div className="relative w-full h-screen flex items-center justify-center z-10">
                <div className="absolute flex items-center justify-around max-lg:justify-between max-lg:px-20 z-20 w-full">
                    <Image
                        src={chevronLeft}
                        alt="Previous"
                        className="w-10 h-10 object-cover bg-[#00000033] rounded-full cursor-pointer"
                    />
                    <Image
                        src={chevronRight}
                        alt="Next"
                        className="w-10 h-10 object-cover bg-[#00000033] rounded-full cursor-pointer"
                    />
                </div>

                <div className="w-full h-full flex items-center justify-center gap-x-30 overflow-scroll no-scrollbar px-20">
                    {scrollImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`shot-${index}`}
                            className="aspect-square max-w-[650px] max-lg:max-w-[500px] object-cover rounded-lg"
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ProjectShots;