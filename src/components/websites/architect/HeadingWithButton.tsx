import Image from "next/image";

type HeadingWithButtonProps = {
  svg: string;
  align: "center" | "start";
  heading: string[];
  btnText: string;
  color: "light" | "dark" | "light-dark";
  optionalAlign?: string;
  extraStyle?: string;
};

const HeadingWithButton = ({
  svg,
  align,
  heading,
  btnText,
  color,
  optionalAlign,
  extraStyle,
}: HeadingWithButtonProps) => {
  return (
    <div className="my-5">
      <button
        className={`flex items-center rounded-[4px] font-bold p-[4px] pr-2 text-[11px] ${
          optionalAlign ? "" : "max-md:mx-auto"
        } ${
          color === "dark"
            ? "text-[#fffbf5] bg-[#ffffff1a]"
            : color === "light-dark"
            ? "bg-[#f7f2e9] text-[#141414cc]"
            : "text-[#141414cc] bg-[#fffbf5]"
        }   ${align === "center" ? "mx-auto" : ""}`}
      >
        <Image
          src={svg}
          alt="services"
          className={`p-1 mr-2 w-4 h-4 rounded-[3px] box-content ${
            color === "dark"
              ? "bg-white"
              : color === "light-dark"
              ? "bg-[#fffbf5] text-[#211f1a]"
              : "bg-[#f7f2e9] text-[#211f1a]"
          }`}
        />
        {btnText}
      </button>
      <p
        className={`text-[31px] max-lg:text-[26px] font-medium max-md:text-center max-lg:leading-8 leading-10 max-sm:leading-7 max-sm:tracking-tighter tracking-tight mt-4 mb-16 ${
          color === "dark" ? "text-[#fffbf5]" : "text-[#21201b]"
        } ${align === "center" ? "text-center" : "text-start"} ${extraStyle} ${
          optionalAlign ? "max-md:text-start max-xs:pr-3" : "max-xs:px-3"
        }`}
      >
        {heading[0]}{" "}
        <br
          className={`max-sm:hidden ${extraStyle ? "max-[1085px]:hidden max-md:block" : ""}`}
        />
        {heading[1]}{" "}
        <br
          className={`max-sm:hidden ${extraStyle ? "max-[1085px]:hidden max-md:block" : ""}`}
        />
        {heading[2]}
      </p>
    </div>
  );
};

export default HeadingWithButton;
