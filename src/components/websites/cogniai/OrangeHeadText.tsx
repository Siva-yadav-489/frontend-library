type OrangeHeadTextProps = {
  text: string;
  styling?: string;
};
const OrangeHeadText = ({ text, styling }: OrangeHeadTextProps) => {
  return (
    <>
      <p className={`text-xl text-amber-500 font-medium ${styling}`}>{text}</p>
    </>
  );
};

export default OrangeHeadText;
