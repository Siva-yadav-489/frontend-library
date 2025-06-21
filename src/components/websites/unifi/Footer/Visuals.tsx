import grassHexagon from "/public/websites/unifi/header/visuals/grassHexagon.jpg";
import greyHexagon from "/public/websites/unifi/header/visuals/greyHexagon.jpg";
import HexagonImage from "../HexagonImage";

const Visuals = () => {
  return (
    <div className="inline-flex -space-x-[15vw] lg:-space-x-[10vw] xs:-space-x-[9vw] lg:-mt-[11.5vw]">
      <HexagonImage
        image={grassHexagon}
        className="lg:w-[20vw] xs:w-[18vw] w-[30vw] static self-end lg:-mb-[11.5vw] md:-mb-[12vw] xs:-mb-[13vw] -mb-[21vw] z-10"
      />
      <HexagonImage
        image={greyHexagon}
        className="lg:w-[20vw] xs:w-[18vw] w-[30vw] static self-start md:-mb-[1.5vw] xs:-mb-[2.2vw] -mb-[3.5vw]"
      />
    </div>
  );
};

export default Visuals;
