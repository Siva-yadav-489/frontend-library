type WideCardProps = {
  link: string;
  text: string[];
  widthAndHeight: string;
  textZeroStyle: string | undefined;
  textOneStyle: string | undefined;
  textTwoStyle: string | undefined;
  textThreeStyle: string | undefined;
};
const WideCard = ({
  link,
  text,
  widthAndHeight,
  textZeroStyle,
  textOneStyle,
  textTwoStyle,
  textThreeStyle,
}: Partial<WideCardProps>) => {
  return (
    <div
      style={{ backgroundImage: `url(${link})` }}
      className={` rounded-2xl font-regular leading-tight ${widthAndHeight}  bg-contain p-7 pt-14 shadow-xl hover:scale-[101%] hover:shadow-xl/15 transition ease-in`}
    >
      <p className={`${textZeroStyle} text-[#6e6e73]`}>{text?.[0] || ""}</p>
      <p className={`${textOneStyle} text-[1.75rem] font-semibold mb-2`}>
        {text?.[1] || ""}
      </p>
      <p className={`${textTwoStyle} font-semibold text-black text-3xl mb-2`}>
        {text?.[2] || ""}
      </p>
      <p className={`${textThreeStyle}`}>{text?.[3] || ""}</p>
    </div>
  );
};

export default WideCard;
