import Image from "next/image";
import logo from "/public/websites/architect/logo.png";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const navitems = [
    "About",
    "Services",
    "Projects",
    "Gallery",
    "Reviews",
    "Blogs",
    "Contact",
  ];
  return (
    <nav className="flex justify-between items-center fixed top-0 w-full bg-[#fffbf5] px-12 max-[1200px]:px-5 h-[59px] border-b border-[#d0d2d0] z-50">
      <Link href="/websites/architect">
        <Image src={logo} alt="logo" className="w-[136px] " />
      </Link>
      <div className="flex justify-around">
        {navitems.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/websites/architect/${item.toLowerCase()}`}
              className="flex items-center ml-0.5 text-sm font-medium text-[#21201b] px-2.5 hover:text-stone-400 max-[1200px]:hidden"
            >
              {item}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`${item === "Services" ? "block" : "hidden"} size-5`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          );
        })}
      </div>
      <div className=" max-[1200px]:hidden">
        <Button buttonBg="white" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 min-[1200px]:hidden text-stone-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
    </nav>
  );
};

export default Navbar;
