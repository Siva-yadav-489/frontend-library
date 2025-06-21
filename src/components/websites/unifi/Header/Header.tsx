import ButtonRow from "./ButtonRow";
import TextBox from "./TextBox";
import Topbar from "./Topbar";
import VerticalLines from "../VerticalLines";
import Visuals from "./Visuals";

const Header = () => {
  return (
    <header className="bg-[#e7e6e4] flex flex-col justify-between min-h-screen w-full overflow-hidden">
      <Topbar />
      <VerticalLines />
      <Visuals />
      <div className="-mt-[19vw] max-sm:mt-[8vw]">
        <TextBox />
        <ButtonRow />
      </div>
    </header>
  );
};

export default Header;
