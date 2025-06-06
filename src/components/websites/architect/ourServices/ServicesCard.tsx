import Link from "next/link";

type ServicesCardProps = {
  name: string;
  concepts: string[];
  para: string[];
  sticky?: boolean;
};

const ServicesCard = ({ name, concepts, para, sticky = true }: ServicesCardProps) => {
  return (
      <div className={`bg-[#211f1a] mx-12 max-[1200px]:mx-5 ${sticky ? "lg:sticky top-16" : ""} text-[#fffbf5] lg:hover:text-amber-600 border-y border-stone-700`}>
      {/* <hr /> */}
      <div className="flex max-lg:flex-col max-lg:justify-between items-start lg:py-20 max-lg:py-10">
        <p className="text-[25px] tracking-tight max-lg:text-[22px] text-start font-semibold lg:w-[27%]">
          {name}
        </p>
        <p className="mt-10 text-base font-medium lg:hidden">
          {para[0]} <br className="max-sm:hidden" />
          {para[1]} <br className="max-sm:hidden" />
          {para[2]}
        </p>
        <div className="lg:w-[29%] max-sm:w-full max-md:w-[85%] max-lg:w-[70%] flex flex-wrap max-lg:my-10">
          {concepts.map((concept, index) => (
            <span
              key={index}
              className="text-[#fffbf5] bg-[#ffffff0d] py-1 px-3 rounded-sm text-[14px] font-semibold m-1"
            >
              {concept}
            </span>
          ))}
        </div>
        <div className="lg:w-[34%]"></div>
        <div className="lg:w-[10%] max-lg:hidden flex items-center justify-end">
          <p className="text-sm font-semibold">Show Details</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4 text-black/75 bg-white rounded-xs p-0.5 box-content ml-4"
          >
            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
          </svg>
        </div>
        <div className="flex items-center lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4 text-white"
          >
            <path
              fillRule="evenodd"
              d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
              clipRule="evenodd"
            />
          </svg>

          <Link href={"/"} className="text-[#ff833b] text-base ml-2">
            View Service
          </Link>
        </div>
      </div>
      {/* <hr className="text-stone-700" /> */}
    </div>
  );
};

export default ServicesCard;
