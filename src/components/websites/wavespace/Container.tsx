import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-[1340px] ${className} mx-auto px-4 lg:px-[50px]`}>
      {children}
    </div>
  );
};

export default Container;
