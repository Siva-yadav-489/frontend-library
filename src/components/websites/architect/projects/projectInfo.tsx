import Image from "next/image";
function ProjectInfo({ icon, text, span }: { icon: string, text: string, span: string }) {
    return (
        <div className="flex items-center justify-between gap-2 w-full py-2.5">
            <div className="flex items-center gap-3">
                <Image src={icon} alt="icon1" width={18} height={18} />
                <p className="text-white tracking-tight font-medium">{text}</p>
            </div>
            <span className="text-[#9e9b95] tracking-tight font-bold max-w-[180px] text-right">{span}</span>
        </div>
    )
}

export default ProjectInfo; 