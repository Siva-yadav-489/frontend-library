import HeadingWithButton from "../../HeadingWithButton";
import graph from "/public/websites/architect/about/graph.svg";
import { Cards } from "./Cards";
import house from "/public/websites/architect/about/house.png";
import "./BrandCollaboration.css";

export const BrandCollabaration = () => {
  return (
    <div className="bg-[#fffbf5] py-[100px]">
      <div className="flex flex-col">
        <div className="px-[50px]">
          <HeadingWithButton
            heading={[
              "Here's a look at the incredible companies, we've worked with along the way!",
            ]}
            svg={graph}
            align="start"
            btnText="Brand Collabaration"
            color="light"
          />
        </div>

        <div className="relative flex overflow-hidden w-full h-[465px]">
            <div className="scroll-left flex gap-[10px]">
              {/* First set of cards */}
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={`card-${index}`} className="flex-shrink-0">
                  <Cards logo={graph} image={house} />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={`card-duplicate-${index}`} className="flex-shrink-0">
                  <Cards logo={graph} image={house} />
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};
