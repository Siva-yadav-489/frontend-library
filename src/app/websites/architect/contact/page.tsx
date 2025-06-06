import Footer from "@/components/websites/architect/Footer";
import Navbar from "@/components/websites/architect/Navbar";
import ContactUs from "@/components/websites/architect/contactPage/ContactUs";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const ContactPage = () => {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContactPage;
