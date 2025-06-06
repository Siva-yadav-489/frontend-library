import Navbar from "@/components/websites/architect/Navbar";
import Footer from "@/components/websites/architect/Footer";
import ProjectHero from "@/components/websites/architect/projects/projectHero";
import ProjectDetails from "@/components/websites/architect/projects/projectDetails";
import { Inter } from "next/font/google";
import ProjectShots from "@/components/websites/architect/projects/projectShots";
import OtherProjects from "@/components/websites/architect/projects/otherProjects";
import "./projects.css";
const inter = Inter({
  subsets: ["latin"],
});
function Projects() {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      <ProjectHero />
      <ProjectDetails />
      <ProjectShots />
      <OtherProjects />
      <Footer />
    </div>
  );
}

export default Projects;
