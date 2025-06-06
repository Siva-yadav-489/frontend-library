import { Section } from "../Section";
import HeadingWithButton from "@/components/websites/architect/HeadingWithButton";
import graph from "/public/websites/architect/about/graph.svg";
import design from "/public/websites/architect/about/design.png";
import avatar from "/public/websites/architect/about/avatar.png";
import Image from "next/image";

export const Mission = () => {
  return (
    <Section>
      <div id="mission" className="bg-[#ffffff0d] rounded-md p-10 max-md:p-5 flex max-lg:flex-col gap-[30px]">
        <div className="h-auto w-full">
          <div className="lg:sticky lg:top-[170px]">
          <HeadingWithButton
            heading={["The purpose behind every blueprint"]}
            btnText="Our Vision"
            svg={graph}
            align="start"
            color="dark"
          />
          </div>
        </div>

        <div className="h-screen w-full relative overflow-hidden">
          <Image src={design} alt="design" className="w-full h-full object-cover rounded-md" />
          <div className="absolute bottom-5 left-5 right-5 p-6 rounded-md bg-[#14141413] backdrop-blur-sm text-[#FFFBF5]">
            <div className="flex flex-col gap-10">
              <p className="text-2xl font-medium max-md:text-[20px]">
                — Our mission is to design thoughtful, sustainable, and inspiring spaces that enhance the way people live, work, and connect. we aim to turn visions into reality by blending creativity, functionality, and care for the environment.
              </p>

              <div className="flex gap-4">
                <Image src={avatar} alt="avatar" className="w-16 h-16 rounded-full" />
                <div>
                  <p className="text-xl max-md:text-[18px] font-medium">Oliver Vance</p>
                  <p className="opacity-80 font-medium text-[#FFFFF80] text-[12px] max-lg:max-w-20 uppercase">CEO, Architectured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </Section>
  );
};