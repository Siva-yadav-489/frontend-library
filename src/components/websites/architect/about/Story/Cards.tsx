export const Cards = ({ year, title, description }: { year: string, title: string, description: string }) => {
  return (
    <div className="p-[20px] rounded-md bg-[#ffffff0d] flex flex-col justify-between text-[#FFFBF5] h-[364px] min-w-[450px]">
      <div>
        <h1 className="text-4xl font-medium">{year}</h1>
        <h2 className="text-[20px] font-medium">{title}</h2>
      </div>

      <p className="opacity-80">{description}</p>
    </div>
  );
};