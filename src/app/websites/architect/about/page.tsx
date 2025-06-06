import Footer from "@/components/websites/architect/Footer";
import Hero from "@/components/websites/architect/about/Hero";
import Navbar from "@/components/websites/architect/Navbar";
import { AboutUs } from "@/components/websites/architect/about/AboutUs";
import { Inter } from "next/font/google";
import { Milestones } from "@/components/websites/architect/about/Milestones";
import { OurTeam } from "@/components/websites/architect/about/OurTeam";
import Inspiration from "@/components/websites/architect/Inspiration";
import {Recognition} from "@/components/websites/architect/about/Recognition";
import { OpenPostions } from "@/components/websites/architect/about/OpenPostions";
import { BrandCollabaration } from "@/components/websites/architect/about/BrandCollaboration/BrandCollaboration";

const inter = Inter({
  subsets: ["latin"],
});

const AboutPage = () => {
  return (
    <div className={`${inter.className} bg-[#211f1a] tracking-tighter`}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Milestones />
      <OurTeam />
      <OpenPostions />
      <BrandCollabaration />
      <Inspiration />
      <Recognition />
      <Footer />
    </div>
  );
};

export default AboutPage;
