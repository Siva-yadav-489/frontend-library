const LargeContainer = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`px-[16.666vw] max-lg:px-0 ${className}`}>{children}</div>
  );
};

export default LargeContainer;
