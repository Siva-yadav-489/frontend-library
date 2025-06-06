import OurServices from "@/components/websites/architect/ourServices/OurServices";
import Hero from "@/components/websites/architect/hero/Hero";
import Navbar from "@/components/websites/architect/Navbar";
import { Inter } from "next/font/google";
import OurBestProjects from "@/components/websites/architect/OurBestProjects/OurBestProjects";
import KnowAboutUs from "@/components/websites/architect/KnowAboutUs";
import OurDifferrences from "@/components/websites/architect/OurDifferrences";
import Inspiration from "@/components/websites/architect/Inspiration";
import HowWeWork from "@/components/websites/architect/howWeWork/HowWeWork";
import Gallery from "@/components/websites/architect/Gallery";
import Blogs from "@/components/websites/architect/blogs/Blogs";
import FAQS from "@/components/websites/architect/FAQS";
import Footer from "@/components/websites/architect/Footer";

const inter = Inter({
  subsets: ["latin"],
});

const Architect = () => {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <Hero />
      <OurServices />
      <OurBestProjects />
      <KnowAboutUs />
      <OurDifferrences />
      <Inspiration />
      <HowWeWork />
      <Gallery />
      <Blogs />
      <FAQS />
      <Footer />
    </div>
  );
};

export default Architect;
