import localFont from "next/font/local";
import "./wavespace.css";
import Navbar from "@/components/websites/wavespace/Navbar";
import Hero from "@/components/websites/wavespace/Hero";
import TrustedCompanies from "@/components/websites/wavespace/TrustedCompanies";
import FounderReviews from "@/components/websites/wavespace/FounderReviews/FounderReviews";
import TurnYourIdeas from "@/components/websites/wavespace/TurnYourIdeas";
import DeliveryTime from "@/components/websites/wavespace/DeliveryTime";
import StickyCards from "@/components/websites/wavespace/StickyCards/StickyCards";
import Awards from "@/components/websites/wavespace/Awards";
import Reviews from "@/components/websites/wavespace/Reviews/Reviews";
import OurTeam from "@/components/websites/wavespace/OurTeam";
import FAQS from "@/components/websites/wavespace/FAQS";
import ContactUs from "@/components/websites/wavespace/ContactUs/ContactUs";
import EnquiryForm from "@/components/websites/wavespace/EnquiryForm/EnquiryForm";
import Footer from "@/components/websites/wavespace/Footer";

const GuminertFont = localFont({
  src: [
    {
      path: "../../../../public/websites/wavespace/fonts/Guminert Light.ttf",
      weight: "300",
    },
    {
      path: "../../../../public/websites/wavespace/fonts/Guminert Regular.ttf",
      weight: "450",
    },
    {
      path: "../../../../public/websites/wavespace/fonts/Guminert Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../../public/websites/wavespace/fonts/Guminert Semi Bold.ttf",
      weight: "600",
    },
    {
      path: "../../../../public/websites/wavespace/fonts/Guminert Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../../public/websites/wavespace/fonts/Guminert Extra Bold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-guminert",
});

const WaveSpace = () => {
  return (
    <div
      className={` ${GuminertFont.variable} guminert-font antialiased bg-white text-black`}
    >
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <FounderReviews />
      <TurnYourIdeas />
      <DeliveryTime />
      <StickyCards />
      <Awards />
      <Reviews />
      <OurTeam />
      <FAQS />
      <ContactUs />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default WaveSpace;
