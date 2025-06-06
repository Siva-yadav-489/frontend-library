import Image from "next/image";
import Container from "./Container";
import logo from "/public/websites/wavespace/footer/logo.webp";
import yellowDownArrow from "/public/websites/wavespace/footer/yellowDownArrow.webp";
import Button from "./Button";
import blackRightTopArrow from "/public/websites/wavespace/blackRightTopArrow.webp";
import usaFlag from "/public/websites/wavespace/footer/usaFlag.webp";
import indonesiaFlag from "/public/websites/wavespace/footer/indonesiaFlag.webp";
import bangladeshFlag from "/public/websites/wavespace/footer/bangladeshFlag.webp";
import person1 from "/public/websites/wavespace/footer/person1.webp";
import person2 from "/public/websites/wavespace/footer/person2.webp";
import person3 from "/public/websites/wavespace/footer/person3.webp";
import fullLengthLogo from "/public/websites/wavespace/footer/fullLengthLogo.webp";
import * as motion from "motion/react-client";
import Popover from "./Popover";

const AnimatedLink = ({
  href,
  name,
  textSize,
}: {
  href: string;
  name: string;
  textSize?: string;
}) => {
  return (
    <motion.a
      href={href}
      className={`text-lg max-lg:text-base ${textSize} font-semibold tracking-wider w-fit text-[#b9b9b9] relative group`}
      whileHover="hover"
    >
      {name}
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-[#b9b9b9]"
        initial={{ width: 0 }}
        variants={{
          hover: {
            width: "100%",
            transition: { duration: 0.3, ease: "easeInOut" },
          },
        }}
      />
    </motion.a>
  );
};
const Footer = () => {
  const lists = [
    {
      title: "Services",
      points: [
        "Branding",
        "UI UX Design",
        "Web Design",
        "SaaS Design",
        "Webflow",
        "Build Product (MVP)",
      ],
    },
    {
      title: "  ",
      points: [
        "Mobile App",
        "Design System",
        "Webflow",
        "Build Product (MVP)",
        "Conversion Rate... (CRO)",
      ],
    },
    {
      title: "Case Studies",
      points: [
        "Better AI",
        "Spacebook",
        "Kodezi",
        "Solon Network",
        "View all work",
        "",
      ],
    },
    {
      title: "Contact",
      points: ["Clutch", "Behance", "Dribbble", "Awwwards"],
    },
  ];
  const people = [
    {
      image: person1,
      name: "Tamanna Azad",
      designation: "Social Media Manager",
    },
    {
      image: person2,
      name: "Ferdous Islam",
      designation: "Content Writer",
    },
    {
      image: person3,
      name: "Waliullah Rafi",
      designation: "Webflow Developer",
    },
    {
      image: person1,
      name: "Tamanna Azad",
      designation: "Social Media Manager",
    },
    {
      image: person2,
      name: "Ferdous Islam",
      designation: "Content Writer",
    },
    {
      image: person3,
      name: "Waliullah Rafi",
      designation: "Webflow Developer",
    },
    {
      image: person1,
      name: "Tamanna Azad",
      designation: "Social Media Manager",
    },
    {
      image: person2,
      name: "Ferdous Islam",
      designation: "Content Writer",
    },
    {
      image: person3,
      name: "Waliullah Rafi",
      designation: "Webflow Developer",
    },
  ];
  const socials = ["Instagram", "Facebook", "LinkedIn", "Twitter"];
  return (
    <div className="bg-[#090909]">
      <Container className="py-28 max-md:py-14">
        <div className="flex max-lg:flex-col justify-between items-start mb-24">
          <section className="flex flex-col items-start pr-10">
            <Image
              src={logo}
              alt="logo"
              className="w-48 max-md:w-44 -ml-2 mb-4 max-md:mb-2"
            />
            <p className="text-base max-md:text-sm mb-11 max-md:mb-5 max-w-[290px] max-lg:max-w-[350px] max-md:max-w-full font-semibold text-[#b9b9b9]">
              Wavespace is a global UI/UX design agency that boosts brand value
              with user-friendly, effective designs for web, mobile, and SaaS
              platforms.
            </p>
            {/* <motion.div className="relative" whileHover="hover"> */}
            <Button
              btnStyle="bg-[#ebfe5b] py-2 pr-2 max-md:py-1 max-md:pr-1"
              text="Company Deck"
              hoverColor="bg-white"
              textSize="text-[15.5px] max-md:text-xs"
              arrowAnimation={false}
            >
              <div className="relative bg-black box-content p-3 rounded-full w-5 h-5 max-md:w-3 max-md:h-3 overflow-hidden">
                <div className="relative flex justify-center items-center overflow-hidden w-full h-full">
                  <motion.div
                    initial={{ y: -18 }}
                    variants={{
                      hover: {
                        y: 3,
                        transition: {
                          duration: 0.3,
                          ease: "linear",
                        },
                      },
                    }}
                    className="flex flex-col space-y-1 w-4 h-4"
                  >
                    <Image
                      src={yellowDownArrow}
                      alt="yellowDownArrow"
                      className="w-4 box-content shrink-0"
                    />
                    <Image
                      src={yellowDownArrow}
                      alt="yellowDownArrow"
                      className="w-4 box-content shrink-0"
                    />
                  </motion.div>
                </div>
              </div>
            </Button>
            {/* </motion.div> */}
          </section>
          <div className="flex justify-between items-start flex-wrap gap-y-6 max-lg:w-full max-lg:mt-8">
            {lists.map((list, index) => (
              <section
                key={index}
                className="max-md:basis-1/2 flex flex-col space-y-3"
              >
                <h3 className="text-base text-white font-semibold">
                  {list.title} &nbsp;
                </h3>
                {list.points.map((point, index) => (
                  <AnimatedLink
                    key={index}
                    href="#"
                    name={point}
                    textSize="text-[19px] max-md:text-sm"
                  />
                ))}
              </section>
            ))}
          </div>
        </div>
        {/* social links and contact section */}
        <div className="flex justify-between items-center max-md:items-end border-b border-[#1b1b1b] pb-9">
          <div className="flex max-md:flex-col space-x-5 max-md:space-y-3">
            {socials.map((social, index) => (
              <AnimatedLink key={index} href="#" name={social} />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <section>
              <p className="text-lg max-lg:text-sm max-sm:text-[11px] font-semibold text-white">
                Let&apos;s work together
              </p>
              <h3 className="text-3xl max-lg:text-xl max-sm:text-base max-sm:font-semibold font-bold text-[#ebfe5b]">
                Call wavespace
              </h3>
            </section>
            <motion.a
              href="#"
              className="p-3.5 max-lg:p-2.5 bg-[#ebfe5b] hover:bg-white transition-all duration-300 rounded-full ml-3 overflow-hidden group cursor-pointer relative w-14 h-14 max-sm:w-11 max-sm:h-11 flex items-center justify-center gap-0.5"
              whileHover="hover"
            >
              <div className="relative flex justify-center items-center overflow-hidden">
                <motion.div
                  initial={{ x: -10, y: 10 }}
                  variants={{
                    hover: {
                      x: 10,
                      y: -10,
                      transition: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 0.5,
                        ease: "linear",
                      },
                    },
                  }}
                  className="flex flex-col w-5 h-5"
                >
                  <Image
                    src={blackRightTopArrow}
                    alt="blackRightTopArrow"
                    className="w-4 box-content bg-transparent absolute top-3 right-3 shrink-0"
                  />
                  <Image
                    src={blackRightTopArrow}
                    alt="blackRightTopArrow"
                    className="w-4 box-content bg-transparent absolute bottom-3 left-3 shrink-0"
                  />
                </motion.div>
              </div>
            </motion.a>
          </div>
        </div>
        <div className="text-[#7e7e81] text-sm max-lg:text-xs max-md:text-[11px] flex justify-between items-center mt-20 max-md:mt-9">
          <p>wavespace LLC © 2025</p>
          <div className="flex items-center">
            <p>
              <span className="max-md:hidden">
                Wavespace is a limited liability company
              </span>{" "}
              based in
            </p>
            <div className="flex items-center ml-1 space-x-1">
              <Image src={usaFlag} alt="usaFlag" className="w-4" />
              <Image src={indonesiaFlag} alt="indonesiaFlag" className="w-4" />
              <Image
                src={bangladeshFlag}
                alt="bangladeshFlag"
                className="w-4"
              />
            </div>
            <div className="flex space-x-2 ml-11 max-lg:hidden">
              <Popover people={people} bgColor="dark" />
            </div>
          </div>
        </div>
      </Container>
      <Image src={fullLengthLogo} alt="fullLengthLogo" className="w-full" />
    </div>
  );
};

export default Footer;
