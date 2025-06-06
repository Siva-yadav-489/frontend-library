type ParagraphTextProps = {
  text: string[];
  styling?: string;
};

const ParagraphText = ({ text, styling }: ParagraphTextProps) => {
  return (
    <div>
      <p
        className={`font-medium text-base ${styling} text-center text-stone-500`}
      >
        {text[0]} <br className="max-lg:hidden" /> {text[1]}{" "}
        <br className="max-lg:hidden" /> {text[2]}{" "}
        <br className="max-lg:hidden" /> {text[3]}
      </p>
    </div>
  );
};

export default ParagraphText;
