import Image from "next/image";
import logo from "/public/websites/health/navbar/health_logo.svg";
import Link from "next/link";
import * as motion from "motion/react-client";

type NavButtonProps = {
  buttonName: string;
  href: string;
};
const NavButton = ({ buttonName, href }: NavButtonProps) => (
  <>
    <Link href={href}>
      <span className="text-white text-[13px] tracking-tight font-medium mx-2.5 hover:text-[#f4fb8c]">
        {buttonName}
      </span>
    </Link>
  </>
);

const Navbar = () => {
  const navItems = [
    { buttonName: "Optimize", href: "#" },
    { buttonName: "Services", href: "#" },
    { buttonName: "Testing", href: "#" },
    { buttonName: "Our process", href: "#" },
    { buttonName: "Membership", href: "#" },
  ];
  return (
    <div className="flex justify-center font-sans">
      <div className="bg-[#0000003d] fixed top-7 left-1/2 -translate-x-1/2 z-20 flex justify-between items-center w-full max-w-60 lg:max-w-[730px] pl-6 p-2.5 rounded-full">
        <Image src={logo} alt="logo" className="w-[74px]" />
        <section className="flex items-start ml-9 max-lg:hidden">
          {navItems.map((item, index) => (
            <NavButton
              key={index}
              buttonName={item.buttonName}
              href={item.href}
            />
          ))}
        </section>
        <button className="flex flex-col text-black overflow-hidden h-9 bg-white text-sm font-medium py-[8px] tracking-tight px-5 rounded-full max-lg:hidden">
          <motion.span
            initial={{ y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -40 }}
          >
            Join waitlist <br />
            <br />
            Join waitlist
          </motion.span>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white mr-3 lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
