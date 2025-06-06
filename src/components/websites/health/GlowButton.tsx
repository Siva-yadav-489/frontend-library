type GlowButtonProps = {
  text?: string;
  adjustStyle?: string;
};
const GlowButton = ({
  text = "Join waitlist",
  adjustStyle,
}: GlowButtonProps) => {
  return (
    <div>
      <div
        className={`${adjustStyle} font-sans hover:px-5 transition-all duration-400 px-7 py-3 text-sm inset-shadow-sm inset-shadow-white/70 mt-8 rounded-full text-[#4b4d4a] cursor-pointer`}
      >
        <div className="flex items-center justify-between">
          <span>{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GlowButton;
