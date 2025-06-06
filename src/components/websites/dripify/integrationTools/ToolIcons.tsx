import Image from "next/image";

type ToolIconsProps = {
  link: string;
  alignment: string;
};

const ToolIcons = ({ link, alignment }: ToolIconsProps) => {
  return (
    <div
      className={`p-4 bg-white rounded-2xl ${alignment} absolute max-sm:static max-sm:inline-block shadow-lg size-[4.5rem]`}
    >
      <Image src={link} alt="icon" />
    </div>
  );
};

export default ToolIcons;
