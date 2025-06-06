import Footer from "@/components/websites/architect/Footer";
import Gallery from "@/components/websites/architect/galleryPage/Gallery";
import Navbar from "@/components/websites/architect/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const GalleryPage = () => {
  return (
    <div className={`${inter.className} text-black`}>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
