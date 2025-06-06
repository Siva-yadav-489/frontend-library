export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`px-[50px] max-md:px-[20px] py-[100px] max-md:py-[50px] ${className}`}>{children}</div>;
};