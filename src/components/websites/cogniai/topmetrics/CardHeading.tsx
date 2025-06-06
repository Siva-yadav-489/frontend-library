const CardHeading = ({ title }: { title: string }) => {
  return (
    <>
      <p className="text-lg font-medium text-black">{title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-3 bg-white/80 text-black rounded-full p-3 box-content justify-self-end"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </>
  );
};

export default CardHeading;
