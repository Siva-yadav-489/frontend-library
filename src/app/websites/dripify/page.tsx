import Campaigns from "@/components/websites/dripify/Campaigns";
import Companies from "@/components/websites/dripify/companies/Companies";
import Footer from "@/components/websites/dripify/Footer";
import Header from "@/components/websites/dripify/Header";
import Hero from "@/components/websites/dripify/heroSection/Hero";
import Insights from "@/components/websites/dripify/insights/Insights";
import IntegrateTools from "@/components/websites/dripify/integrationTools/IntegrateTools";
import Personalize from "@/components/websites/dripify/Personalize";
import Reviews from "@/components/websites/dripify/reviews/Reviews";
import SignupAtBottom from "@/components/websites/dripify/SignupAtBottom";
import TestMessage from "@/components/websites/dripify/TestMessage";
import WorksBestFor from "@/components/websites/dripify/WorksBestFor";
import localFont from "next/font/local";
import "./dripify.css";

const thiccboiFont = localFont({
  src: [
    {
      path: "../../../../public/websites/dripify/fonts/THICCCBOI-Thin.ttf",
      weight: "100",
    },
    {
      path: "../../../../public/websites/dripify/fonts/THICCCBOI-Light.ttf",
      weight: "300",
    },
    {
      path: "../../../../public/websites/dripify/fonts/THICCCBOI-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../../public/websites/dripify/fonts/THICCCBOI-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../../public/websites/dripify/fonts/THICCCBOI-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../../../public/websites/dripify/fonts/THICCCBOI-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../../public/websites/dripify/fonts/THICCCBOI-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../../../../public/websites/dripify/fonts/THICCCBOI-ThicccAF.ttf",
      weight: "900",
    },
  ],
  variable: "--font-thicccboi",
});

export default function Dripify() {
  return (
    <div
      className={`${thiccboiFont.variable} dripify-content-font antialiased`}
    >
      <div className="bg-white">
        <Header />
        <Hero />
        <Companies />
        <Campaigns />
        <Insights />
        <Personalize />
        <TestMessage />
        <WorksBestFor />
        <IntegrateTools />
        <Reviews />
        <SignupAtBottom />
        <Footer />
      </div>
    </div>
  );
}
