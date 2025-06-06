import { Container } from "@/components/websites/architect/Container";
import { Story } from "./Story/story";
import { Mission } from "./Mission/Mission";
import { Vision } from "./Vision/Vision";
import { Values } from "./Values/Values";

const components = [
    { name: 'Story', component: <Story /> },
    { name: 'Mission', component: <Mission /> },
    { name: 'Vision', component: <Vision /> },
    { name: 'Values', component: <Values /> },
];

export const AboutUs = () => {
    return (
        <Container>
            <div className="sticky top-[58px] z-30">
                <ul className="flex gap-2 bg-[#211f1a] py-5 overflow-x-auto">
                    {components.map((item, index) => (
                        <li key={index} id={item.name.toLowerCase()} className={`px-6 py-3 rounded-md ${item.name === "Story" ? 'bg-[#FF833B]' : 'bg-[#FFFFFF1A] text-[#FFFBF5]'}`}>{item.name}</li>
                    ))}
                </ul>
            </div>
            {components.map((item) => (
                <div id={item.name.toLowerCase()} key={item.name} className="section">
                    {item.component}
                </div>
            ))}
        </Container>

    );
}