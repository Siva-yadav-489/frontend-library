import localFont from "next/font/local";
import "./unifi.css";
import Header from "@/components/websites/unifi/Header/Header";
import ChallengingStandards from "@/components/websites/unifi/ChallengingStandards/ChallengingStandards";
import MatrixEffect from "@/components/websites/unifi/MatrixEffect/MatrixEffect";
import Timeline from "@/components/websites/unifi/Timeline/Timeline";
import AboutUs from "@/components/websites/unifi/AboutUs/AboutUs";
import Partnerships from "@/components/websites/unifi/Partnerships/Partnerships";
import WeAreOnline from "@/components/websites/unifi/WeAreOnline";
import Footer from "@/components/websites/unifi/Footer/Footer";
import HexagonGrid from "@/components/websites/unifi/HexagonGrid";

const neueMontreal = localFont({
  src: [
    {
      path: "../../../../public/websites/unifi/fonts/NeueMontreal-Light.otf",
      weight: "300",
    },
    {
      path: "../../../../public/websites/unifi/fonts/NeueMontreal-Regular.otf",
      weight: "400",
    },
    {
      path: "../../../../public/websites/unifi/fonts/NeueMontreal-Medium.otf",
      weight: "500",
    },
    {
      path: "../../../../public/websites/unifi/fonts/NeueMontreal-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-neue-montreal",
});
const neueBit = localFont({
  src: "../../../../public/websites/unifi/fonts/NeueBit-bold.otf",
  weight: "700",
  variable: "--font-neue-bit",
});
const Unifi = () => {
  return (
    <div
      className={`${neueMontreal.variable} ${neueBit.variable} antialiased font-neue-montreal bg-white text-[#252d29] text-[clamp(16px, 1.2vw, 21px)]`}
    >
      <Header />
      <ChallengingStandards />
      <MatrixEffect />
      <Timeline />
      <HexagonGrid />
      <AboutUs />
      <Partnerships />
      <WeAreOnline />
      <Footer />
    </div>
  );
};

export default Unifi;
