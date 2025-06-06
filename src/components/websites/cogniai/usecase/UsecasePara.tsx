const UsecasePara = ({ text }: { text: string[] }) => {
  return (
    <>
      <p className="text-lg font-regular text-stone-400">
        {text[0]}
        <br className="max-lg:hidden" />
        {text[1]} <br className="max-lg:hidden" />
        {text[2]}
      </p>
    </>
  );
};

export default UsecasePara;
