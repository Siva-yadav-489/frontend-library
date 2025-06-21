import Image from "next/image";
import HexagonImage from "../HexagonImage";
import grassHexagon from "/public/websites/unifi/header/visuals/grassHexagon.jpg";
import tilesHexagon from "/public/websites/unifi/header/visuals/tilesHexagon.jpg";
import greyHexagon from "/public/websites/unifi/header/visuals/greyHexagon.jpg";
import videoHexagon from "/public/websites/unifi/header/visuals/videoHexagon.svg";
import matteBlackBall from "/public/websites/unifi/header/visuals/matte-black-ball.png";
import moon from "/public/websites/unifi/header/visuals/moon.png";

const Visuals = () => {
  return (
    <div className="flex flex-col w-[52%] ml-auto -mt-[31vw] max-xl:-mt-[20vw] max-sm:mt-[12vw]">
      <div className="flex items-center -ml-[8vw]">
        <div className="flex space-x-[6vw] items-baseline-last  ml-[7vw] -mr-[5vw] -mb-[7vw]">
          <div className="w-[4.5vw] h-[4.5vw]">
            <Image src={moon} alt="hexagonImage" className="w-full h-full" />
          </div>
          <div className="w-[10vw] z-10">
            <Image
              src={matteBlackBall}
              alt="hexagonImage"
              className="w-full h-full"
            />
          </div>
        </div>
        {/* <div className="flex items-end"> */}
        <div className="flex">
          <HexagonImage image={grassHexagon} className="w-[20vw]" />
        </div>
        <div className="flex mt-[19.5vw]">
          <HexagonImage image={greyHexagon} className="w-[20vw]" />
        </div>
        {/* </div> */}
      </div>
      <div className="flex items-end self-end -mt-[15.5vw] mr-[6.5vw]">
        <HexagonImage image={tilesHexagon} className="w-[20vw]" />
        <HexagonImage image={videoHexagon} className="w-[20vw]" />
      </div>
    </div>
  );
};

export default Visuals;
