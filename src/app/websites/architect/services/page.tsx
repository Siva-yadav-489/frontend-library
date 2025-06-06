import Footer from "@/components/websites/architect/Footer";
import Navbar from "@/components/websites/architect/Navbar";
import OurServices from "@/components/websites/architect/services/OurServices";
import { Inter } from "next/font/google";
import OurServicesHeading from "@/components/websites/architect/services/OurServicesHeading";
import { WhyReallyUs } from "@/components/websites/architect/services/WhyReallyUs";


const inter = Inter({
  subsets: ["latin"],
});

const ServicesPage = () => {
  return (
    <div className={`${inter.className} bg-[#f7f2e9]`}>
      <Navbar />
      <OurServicesHeading />
      <OurServices />
      <WhyReallyUs />
      <Footer />
    </div>
  );
};

export default ServicesPage;
