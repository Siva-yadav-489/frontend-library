import icon1 from "/public/websites/architect/projects/icon1.svg";
import houseModel1 from "/public/websites/architect/projects/houseModel1.avif";
import houseModel2 from "/public/websites/architect/projects/houseModel2.avif";
import houseModel3 from "/public/websites/architect/projects/houseModel3.avif";
import ProjectContent from "./projectContent";
import ProjectInfo from "./projectInfo";
import ProjectOverview from "./projectOverview";
import ProjectTestimonial from "./projectTestimonial";
import Image from "next/image";


function ProjectDetails() {
    const projectSections1 = [
        {
            subTitle: 'Project Name',
            content: 'Skyline Corporate Hub',
        },
        {
            subTitle: 'Client Background',
            content:
                'A forward-thinking real estate developer specializing in premium commercial spaces sought to create a multi-storied office complex that redefines modern work environments. Their vision included innovative design, sustainability, and high-end facilities tailored to the needs of dynamic businesses.',
        },
        {
            subTitle: 'Objective',
            content:
                'Develop a state-of-the-art office complex that combines cutting-edge architecture with functional workspaces, prioritizing employee well-being and productivity. The project aimed to create a landmark building that stands out in the urban landscape.',
        },
        {
            subTitle: 'Scope',
            content: [
                'Design a 20-story commercial building with a mix of office spaces, meeting areas, and amenities.',
                'Include green terraces, a rooftop lounge, and eco-conscious design elements.',
                'Ensure the infrastructure supports advanced technological needs and future scalability.',
            ],
        },
        {
            subTitle: 'Key Details',
            content: [
                'Location: Central Business District',
                'Total Built-Up Area: 350,000 sq. ft.',
                'Number of Floors: 20, including two underground levels for parking',
                'Special Features: Vertical garden facade, collaborative workspaces, and an energy-efficient HVAC system',
                'Amenities: Gym, Café, Daycare, Rooftop event space',
            ],
        }
    ];


    const projectSections2 = [
        {
            subTitle: "Concept and Vision",
            content: [
                "Design Philosophy: The hub was envisioned as a modern corporate haven that merges aesthetics with function, offering a premium experience for tenants and visitors.",
                "Key Features: Flexible layouts, biophilic design, and an emphasis on natural light.",
                "Inspirations: High-tech office complexes in Tokyo and eco-friendly skyscrapers in Singapore.",
            ],
        },
        {
            subTitle: "Execution",
            content: ""
        },
        {
            subTitle: "Phase 1: Urban Analysis and Site Planning",
            content: [
                "Conducted traffic and pedestrian flow studies to optimize building access and parking solutions.",
                "Positioned the building to enhance its visibility and integrate with the surrounding business district.",
            ],
        },
        {
            subTitle: "Phase 2: Architectural Design and Space Planning",
            content: [
                "Developed open floor plans that allow tenants to customize their spaces.",
                "Designed the facade with vertical gardens and sun-shading panels to reduce heat gain.",
                "Integrated expansive glass panels to maximize daylight while minimizing glare.",
            ],
        },
        {
            subTitle: "Phase 3: Sustainable Solutions and Technology",
            content: [
                "Installed solar panels on the rooftop and a rainwater harvesting system for reduced resource usage.",
                "Implemented a smart building management system for energy monitoring and automation.",
                "Used locally sourced materials with a focus on durability and eco-friendliness.",
            ],
        },
        {
            subTitle: "Phase 4: Collaboration and Construction",
            content: [
                "Collaborated with lighting consultants to create a dynamic facade that glows subtly at night.",
                "Worked closely with contractors to ensure the seamless execution of the rooftop terrace and lounge.",
                "Engaged acoustics experts to design soundproof meeting rooms and conference spaces.",
            ],
        },
    ];



    const projectSections3 = [
        {
            subTitle: "Outcome",
            content: [
                "Business-Ready Spaces: The hub offers versatile office layouts tailored to businesses ranging from startups to large corporations.",
                "Eco-Friendly Excellence: The building achieved LEED Gold Certification, setting a benchmark for green commercial architecture.",
                "Tenant Delight: High occupancy rates and glowing feedback on the building’s design and amenities.",
            ],
        },
        {
            subTitle: "Credits and Collaboration",
            content: [
                "Lead Architect: Emily Carter, Innovate Studio",
                "Interior Designer: Workspace Artisans",
                "Structural Engineer: Pinnacle Engineering Co.",
                "Landscape Architect: EdenGreen Solutions",
                "Construction Partner: Vertex Construction Group",
            ],
        },
    ];


    const projectInfo = [
        { icon: icon1, text: "Client", span: "Confidential" },
        { icon: icon1, text: "Type", span: "Commercial" },
        { icon: icon1, text: "Year", span: "2022" },
        { icon: icon1, text: "Size", span: "350,000 sq.ft." },
        { icon: icon1, text: "Floors", span: "20" },
        { icon: icon1, text: "Location", span: "Central Business District." },
        { icon: icon1, text: "Services", span: "Architecture, Interior" },
        { icon: icon1, text: "Status", span: "Complete" },
    ]

    const houseModels = [houseModel1, houseModel2, houseModel3];
    return (
        <div className="flex relative  flex-col lg:flex-row bg-[#211f1a]">
            <div className="flex flex-col max-lg:items-center justify-center min-h-[400px] lg:h-screen w-full lg:justify-between lg:sticky top-0 bg-[#211f1a] lg:pt-[100px] lg:px-[50px] lg:pb-[40px] max-md:px-[20px] max-md:py-[50px] lg:max-w-[430px]">
                <h1 className="text-[36px] font-medium tracking-tighter text-white leading-[1.1] max-lg:hidden">Skyline <br /> Corporate Hub</h1>
                <div className="flex flex-col divide-y-[0.5px] divide-[#302e28] w-full max-lg:max-w-[800px] max-md:max-w-full">
                    {projectInfo.map((item, index) => (
                        <ProjectInfo key={index} icon={item.icon} text={item.text} span={item.span} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-10 pt-[100px] pb-[40px] max-lg:items-center max-md:items-start px-10 max-md:px-5 w-full rounded-bl-lg max-lg:rounded-bl-none bg-white">
                <h1 className="text-[35px] max-lg:text-[30px] max-md:text-[28px] font-medium tracking-tighter text-black leading-[1.1]">A forward-thinking real estate developer specializing in premium commercial spaces sought to create a multi-storied office complex that redefines modern work environments. Their vision included innovative design, sustainability, and high-end facilities tailored to the needs of dynamic businesses.</h1>
                <div className="space-y-6 max-w-[630px]">
                    <h1 className="text-[28px] max-lg:text-[22px] font-bold tracking-tight leading-[1.1]">Project Overview</h1>
                    {projectSections1.map((section, index) => (
                        <ProjectOverview key={index} subTitle={section.subTitle}>
                            <ProjectContent content={section.content} />
                        </ProjectOverview>
                    ))}
                </div>

                <div className="flex flex-col gap-5">
                    {houseModels.map((model, index) => (
                        <Image key={index} src={model} alt="houseModel" className="w-full h-full object-cover" />
                    ))}
                </div>

                <ProjectTestimonial />

                <div className="space-y-6 max-w-[630px]">
                    <h1 className="text-[28px] max-lg:text-[22px] font-bold tracking-tight leading-[1.1]">Design Approach and Execution</h1>
                    {projectSections2.map((section, index) => (
                        <ProjectOverview key={index} subTitle={section.subTitle}>
                            <ProjectContent content={section.content} />
                        </ProjectOverview>
                    ))}
                </div>

                <div className="space-y-6 max-w-[630px]">
                    <h1 className="text-[28px] max-lg:text-[22px] font-bold tracking-tight leading-[1.1]">Results and Acknowledgments</h1>
                    {projectSections3.map((section, index) => (
                        <ProjectOverview key={index} subTitle={section.subTitle}>
                            <ProjectContent content={section.content} />
                        </ProjectOverview>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
