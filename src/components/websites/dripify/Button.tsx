type ButtonProps = {
  text: string;
  colors: string;
};
const Button = ({ text, colors }: ButtonProps) => {
  return (
    <div>
      <button
        className={`text-md font-semibold ${colors} py-3 px-8 rounded-lg`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
