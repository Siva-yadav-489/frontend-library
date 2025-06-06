function Button({ text, margin }: { text: string; margin?: string }) {
  return (
    <>
      <button
        className={`text-lg py-4 px-6 max-sm:text-base  bg-black text-white ${margin} rounded-full font-light`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
