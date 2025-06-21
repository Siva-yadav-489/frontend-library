type NavLinkListProps = {
  category: string;
  links: Array<{ name: string; href: string }>;
};
const NavLinkList = ({ category, links }: NavLinkListProps) => {
  return (
    <div className="flex flex-col tracking-wider max-sm:basis-1/2 relative">
      <span className="text-[1.6vw] max-md:text-[2.5vw] max-sm:text-base max-sm:mb-3 mb-6 text-[#38f997] font-neue-bit">
        {category}
      </span>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-[1.4vw] max-md:text-[2vw] max-sm:text-sm hover:text-[#636363] transition-colors duration-100 font-medium text-white text-nowrap mb-3"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default NavLinkList;
