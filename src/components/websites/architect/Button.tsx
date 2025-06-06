type ButtonProps = {
  text?: string;
  buttonBg: "white" | "black" | "orange";
};

const Button = ({ text = "Get Template", buttonBg }: ButtonProps) => {
  return (
    <>
      <button
        className={`flex items-center text-base ${
          buttonBg === "white"
            ? "bg-[#fffbf5] text-black border border-gray-300"
            : buttonBg === "black"
            ? "bg-[#211f1a] text-[#fffbf5]"
            : "bg-[#ff833b] text-black"
        } pr-4 font-medium w-fit rounded-sm cursor-pointer`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`size-5 p-2 rounded-sm my-px ml-px mr-3 ${
            buttonBg === "orange"
              ? "bg-[#211f1a] text-[#ff833b]"
              : buttonBg === "black"
              ? "bg-[#ff833b] text-[#211f1a]"
              : "bg-[#ff833b]"
          } box-content`}
        >
          <path
            fillRule="evenodd"
            d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
            clipRule="evenodd"
          />
        </svg>
        {text}
      </button>
    </>
  );
};

export default Button;
