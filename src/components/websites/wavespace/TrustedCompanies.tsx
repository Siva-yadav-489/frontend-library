import Container from "./Container";
import Image from "next/image";
import activeSync from "/public/websites/wavespace/trustedCompanies/activeSync.webp";
import aisa from "/public/websites/wavespace/trustedCompanies/aisa.webp";
import mimo from "/public/websites/wavespace/trustedCompanies/mimo.webp";
import neocoin from "/public/websites/wavespace/trustedCompanies/neocoin.webp";
import ladeplus from "/public/websites/wavespace/trustedCompanies/ladeplus.webp";
import offWhite from "/public/websites/wavespace/trustedCompanies/offWhite.webp";
import door2day from "/public/websites/wavespace/trustedCompanies/door2day.webp";
import houseMade from "/public/websites/wavespace/trustedCompanies/houseMade.webp";
import mavis from "/public/websites/wavespace/trustedCompanies/mavis.webp";
import medicalStudentAI from "/public/websites/wavespace/trustedCompanies/medicalStudentAI.webp";
import krispy from "/public/websites/wavespace/trustedCompanies/krispy.webp";
import kodesi from "/public/websites/wavespace/trustedCompanies/kodesi.webp";
import oppaTravel from "/public/websites/wavespace/trustedCompanies/oppaTravel.webp";
import portant from "/public/websites/wavespace/trustedCompanies/portant.webp";
import solon from "/public/websites/wavespace/trustedCompanies/solon.webp";
import verbue from "/public/websites/wavespace/trustedCompanies/verbue.webp";
import yCombinator from "/public/websites/wavespace/trustedCompanies/yCombinator.webp";
import * as motion from "motion/react-client";

const TrustedCompanies = () => {
  const companies = [
    { src: activeSync, alt: "Active Sync" },
    { src: aisa, alt: "Aisa" },
    { src: mimo, alt: "Mimo" },
    { src: neocoin, alt: "Neocoin" },
    { src: ladeplus, alt: "Ladeplus" },
    { src: offWhite, alt: "Off White" },
    { src: door2day, alt: "Door2Day" },
    { src: houseMade, alt: "House Made" },
    { src: mavis, alt: "Mavis" },
    { src: medicalStudentAI, alt: "Medical Student AI" },
    { src: krispy, alt: "Krispy" },
    { src: kodesi, alt: "Kodesi" },
    { src: oppaTravel, alt: "Oppaa Travel" },
    { src: portant, alt: "Portant" },
    { src: solon, alt: "Solon" },
    { src: verbue, alt: "Verbue" },
    { src: yCombinator, alt: "Y Combinator" },
  ];

  return (
    <>
      <Container className="py-11">
        <p className="text-xl max-md:text-[15px] font-semibold text-center">
          Trusted by 500+ global companies
        </p>
        <div className="overflow-hidden">
          <motion.div
            className="flex justify-between items-center my-10 max-md:my-5 "
            animate={{
              x: [0, -3000],
            }}
            transition={{
              x: {
                duration: 40,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            {/* First set of companies */}
            <div className="flex space-x-14 max-md:space-x-5 shrink-0">
              {companies.map((company, index) => (
                <Image
                  key={index}
                  src={company.src}
                  alt={company.alt}
                  className="object-contain w-28 max-md:w-24 shrink-0"
                />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-14 max-md:space-x-5 shrink-0">
              {companies.map((company, index) => (
                <Image
                  key={`dup-${index}`}
                  src={company.src}
                  alt={company.alt}
                  className="object-contain w-28 max-md:w-24 shrink-0"
                />
              ))}
            </div>
          </motion.div>
        </div>
        <video autoPlay loop muted playsInline className="w-full h-auto">
          <source
            src="/websites/wavespace/trustedCompanies/trustedCompaniesVideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Container>
    </>
  );
};

export default TrustedCompanies;
