type ProjectOverviewProps = {
    subTitle: string;
    children: React.ReactNode | string;
};

function ProjectOverview({
    subTitle,
    children,
}: ProjectOverviewProps) {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-[18px] max-lg:text-[17px] font-bold tracking-tight text-[#21201b] leading-[1.1]">{subTitle}</h2>
            <div className="text-[18px] max-lg:text-[17px] font-medium tracking-tight text-[#21201b] leading-[1.5]">
                {children}
            </div>
        </div>
    );
};

export default ProjectOverview;