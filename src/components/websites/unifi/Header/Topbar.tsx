import Image from "next/image";
import unifiLogo from "/public/websites/unifi/unifiLogo.svg";

const Topbar = () => {
  return (
    <div className="w-full px-[min(6.94vw,3.25em)] pt-[min(6.94vw,2.75em)] bg-transparent">
      <div className="w-[max(9vw,6.7em)]">
        <Image src={unifiLogo} alt="unifiLogo" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Topbar;
