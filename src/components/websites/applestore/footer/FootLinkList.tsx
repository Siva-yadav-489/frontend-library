type FootLinkListProps = {
  title: string;
  list: string[];
};
const FootLinkList = ({ title, list }: FootLinkListProps) => {
  return (
    <ul className="space-y-2.5 mb-5">
      <li className="flex justify-between items-center text-xs font-medium max-md:font-light tracking-widest text-black">
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 text-gray-500 md:hidden"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </li>
      <hr className="md:hidden text-gray-300" />
      {list.map((item, index) => (
        <li
          key={index}
          className="text-xs font-light text-[#000000b8] tracking-widest  max-md:hidden"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FootLinkList;
