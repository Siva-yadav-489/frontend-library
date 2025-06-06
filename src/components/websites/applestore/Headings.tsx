type HeadingProps = {
  text: string[];
  textColor: string;
};
const Headings = ({ text, textColor }: HeadingProps) => {
  return (
    <div className={`text-[28px] font-semibold text-[#6e6e73]`}>
      <span className={`${textColor}`}>{text[0]}</span>
      <span>&nbsp;{text[1]}</span>
    </div>
  );
};

export default Headings;
