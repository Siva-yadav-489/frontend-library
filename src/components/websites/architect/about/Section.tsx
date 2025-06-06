export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={`flex flex-col justify-between py-15 border-b border-[#ffffff1a] gap-15 ${className}`}>
      {children}
    </section>
  );
};