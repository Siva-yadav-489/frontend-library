type SubtextProps = {
  text: string;
  textPosition?: string;
};
const Subtext = ({ text, textPosition }: SubtextProps) => {
  return (
    <>
      <p
        className={`text-2xl text-stone-400 text-center ${textPosition} font-regular`}
      >
        {text}
      </p>
    </>
  );
};

export default Subtext;
