type HeadingProps = {
  text: string[];
};
const Headings = ({ text }: HeadingProps) => {
  return (
    <div className="text-5xl max-md:text-3xl text-black font-semibold my-10 text-center">
      {text[0]}
      <br className="max-md:hidden" />
      {text[1]}
    </div>
  );
};

export default Headings;
