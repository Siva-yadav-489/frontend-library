type GradientHeadingProps = {
  text: string[];
  styling?: string;
};

const GradientHeading = ({ text, styling }: GradientHeadingProps) => {
  return (
    <>
      <p
        className={`text-5xl max-sm:text-3xl ${styling} text-center font-medium tracking-tight leading-tight  text-transparent bg-clip-text bg-gradient-to-r from-black via-stone-800 to-amber-600 `}
      >
        {text[0] && (
          <>
            {text[0]}
            <br className="max-lg:hidden" />
          </>
        )}
        {text[1] && (
          <>
            {text[1]}
            <br className="max-lg:hidden" />
          </>
        )}
        {text[2] && <>{text[2]}</>}
      </p>
    </>
  );
};

export default GradientHeading;
