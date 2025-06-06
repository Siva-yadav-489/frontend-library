import blueprint from "/public/websites/architect/services/blueprint.svg";
import planet from "/public/websites/architect/services/planet.svg";
import custom from "/public/websites/architect/services/custom.svg";
import award from "/public/websites/architect/services/award.svg";
import coffee from "/public/websites/architect/services/coffee.svg";
import time from "/public/websites/architect/services/time.svg";
import Image from "next/image";

const cardData = [
    {
        title: "We Design Dreams",
        description: "Your vision is our blueprint, and we're here to make it a reality with a splash of creativity and a whole lot of heart.",
        icon: blueprint,
        theme: "dark",
    },
    {
        title: "Eco-Friendly and Fabulous",
        description: "We love the planet as much as we love great design! Sustainability is always in style with us.",
        icon: planet,
        theme: "light",
    },
    {
        title: "Custom-Made for YOU",
        description: "Cookie-cutter? Not in our vocabulary. Every project is tailored to fit your style, needs, and personality.",
        icon: custom,
        theme: "dark",
    },
    {
        title: "Expertise That's a Total Game-Changer",
        description: "With years of experience and award-winning designs under our belt, we don't just meet expectations—we exceed them.",
        icon: award,
        theme: "light",
    },
    {
        title: "We're Fun to Work With!",
        description: "Collaborating with us feels more like a coffee chat with friends than a formal meeting. Stress-free, promise!",
        icon: coffee,
        theme: "dark",
    },
    {
        title: "Timely, Transparent, and Totally Dependable",
        description: "We stick to timelines, keep you in the loop, and deliver results you'll rave about—no surprises here (except the good kind).",
        icon: time,
        theme: "light",
    },
];

type CardProps = {
    title?: string;
    description?: string;
    icon?: string;
    theme?: string;
};

const Card = ({ title, description, icon, theme }: CardProps) => (
    <div
        className={`p-5 rounded-md shadow-md h-[363px] flex flex-col justify-between ${
            theme === "dark" ? "bg-[#211f1a] text-[#fffbf5]" : "bg-[#fffbf5] text-[#21201b]"
        }`}
    >
        <CardHeader icon={icon} title={title} theme={theme} />
        <CardContent title={title} description={description} />
    </div>
);

const CardHeader = ({ icon, title, theme }: CardProps) => (
    <div className={`pb-5 border-b flex items-center ${
        theme === "dark" ? "border-[#ffffff33]" : "border-[#14141433]"
    }`}>
        <div className={`w-15 h-15 flex items-center justify-center rounded-lg ${
            theme === "dark" ? "bg-[#ffffff1a]" : "bg-[#211f1a]"
        }`}>
            <Image src={icon as string} alt={title as string} className="w-10 h-5" />
        </div>
    </div>
);

const CardContent = ({ title, description }: CardProps) => (
    <div className="pt-5 flex flex-col gap-[10px] font-medium tracking-tight">
        <h1 className="text-xl max-w-[400px]">{title}</h1>
        <p className="opacity-80">{description}</p>
    </div>
);

export const Cards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    theme={card.theme}
                />
            ))}
        </div>
    );
}