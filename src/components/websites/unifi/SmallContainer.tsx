const SmallContainer = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return <div className={`px-[6.9439vw]  ${className}`}>{children}</div>;
};

export default SmallContainer;
