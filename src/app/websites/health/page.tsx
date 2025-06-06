import BeyondGenericTraining from "@/components/websites/health/BeyondGenericTraining";
import Hero from "@/components/websites/health/hero/Hero";
import Navbar from "@/components/websites/health/Navbar";
import UnlockYourPotential from "@/components/websites/health/UnlockYourPotential";
import { JetBrains_Mono } from "next/font/google";
import "./health.css";
import Testing from "@/components/websites/health/testing/Testing";
import YourJourney from "@/components/websites/health/yourJourney/YourJourney";
import Memberships from "@/components/websites/health/memberships/Memberships";
import JoinAtbottom from "@/components/websites/health/JoinAtbottom";
import Footer from "@/components/websites/health/Footer";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const Health = () => {
  return (
    <div className={`${jetBrainsMono.className} bg-black`}>
      <Navbar />
      <Hero />
      <UnlockYourPotential />
      <BeyondGenericTraining />
      <Testing />
      <YourJourney />
      <Memberships />
      <JoinAtbottom />
      <Footer />
    </div>
  );
};

export default Health;
