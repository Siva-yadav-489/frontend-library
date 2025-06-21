import React from "react";

const VerticalLines = ({ lineCount = 5 }: { lineCount?: number }) => {
  return (
    <div className="flex justify-evenly w-full h-full absolute inset-0 bg-transparent">
      {Array.from({ length: lineCount }).map((_, index) => (
        <div key={index} className="w-px h-full bg-[#97979739] relative"></div>
      ))}
    </div>
  );
};

export default VerticalLines;
