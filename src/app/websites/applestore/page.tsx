import Accessories from "@/components/websites/applestore/Accessories";
import AppleDifference from "@/components/websites/applestore/AppleDifference";
import AppleExperiance from "@/components/websites/applestore/AppleExperiance";
import Footer from "@/components/websites/applestore/footer/Footer";
import Header from "@/components/websites/applestore/Header";
import Help from "@/components/websites/applestore/Help";
import Hero from "@/components/websites/applestore/heroSection/Hero";
import Navbar from "@/components/websites/applestore/Navbar";
import Personalisation from "@/components/websites/applestore/Personalisation";
import QuickLinks from "@/components/websites/applestore/QuickLinks";
import SpecialStories from "@/components/websites/applestore/SpecialStories";
import TheLatest from "@/components/websites/applestore/TheLatest";
import "./applestore.css";

import localFont from "next/font/local";
const sfPro = localFont({
  src: [
    {
      path: "../../../../public/websites/applestore/fonts/SF-Pro-Display-Thin.otf",
      weight: "100",
    },
    {
      path: "../../../../public/websites/applestore/fonts/SF-Pro-Display-Ultralight.otf",
      weight: "200",
    },
    {
      path: "../../../../public/websites/applestore/fonts/SF-Pro-Display-Light.otf",
      weight: "300",
    },
    {
      path: "../../../../public/websites/applestore/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
    },
    {
      path: "../../../../public/websites/applestore/fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
    },
    {
      path: "../../../../public/websites/applestore/fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
    },
    {
      path: "../../../../public/websites/applestore/fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-sf-pro-Display",
});

export default function AppleStore() {
  return (
    <div className={`${sfPro.variable} apple-store-font antialiased`}>
      <div className="bg-[#f5f5f7] ">
        <Navbar />
        <Header />
        <Hero />
        <TheLatest />
        <Accessories />
        <Personalisation />
        <AppleDifference />
        <Help />
        <AppleExperiance />
        <SpecialStories />
        <QuickLinks />
        <Footer />
      </div>
    </div>
  );
}
