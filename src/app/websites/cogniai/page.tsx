import localFont from "next/font/local";
import "./cogniai.css";
import Navbar from "@/components/websites/cogniai/Navbar";
import Hero from "@/components/websites/cogniai/Hero";
import Grid from "@/components/websites/cogniai/topmetrics/Grid";
import BelowMetrics from "@/components/websites/cogniai/BelowMetrics";
import HowItWorks from "@/components/websites/cogniai/HowItWorks";
import KeyFeatures from "@/components/websites/cogniai/KeyFeatures";
import Usecase from "@/components/websites/cogniai/usecase/Usecase";
import RealStories from "@/components/websites/cogniai/RealStories";
import Testimonial from "@/components/websites/cogniai/Testimonial";
import PricingPlan from "@/components/websites/cogniai/pricingPlan/PricingPlan";
import FreqAskedQues from "@/components/websites/cogniai/FreqAskedQues";
import Footer from "@/components/websites/cogniai/Footer";

const matterFont = localFont({
  src: [
    {
      path: "../../../../public/websites/cogniai/fonts/Matter-Light.otf",
      weight: "300",
    },
    {
      path: "../../../../public/websites/cogniai/fonts/Matter-Regular.otf",
      weight: "400",
    },
    {
      path: "../../../../public/websites/cogniai/fonts/Matter-Medium.otf",
      weight: "500",
    },
    {
      path: "../../../../public/websites/cogniai/fonts/Matter-SemiBold.otf",
      weight: "600",
    },
  ],
  variable: "--font-matter",
});

const CogniAI = () => {
  return (
    <div className={`${matterFont.variable} cogniai-content-font antialiased`}>
      <div className="bg-white sm:px-16  max-xs:px-2  max-sm:px-4">
        <Navbar />
        <Hero />
        <Grid />
        <BelowMetrics />
        <HowItWorks />
        <KeyFeatures />
        <Usecase />
        <RealStories />
        <Testimonial />
        <PricingPlan />
        <FreqAskedQues />
        <Footer />
      </div>
    </div>
  );
};

export default CogniAI;
