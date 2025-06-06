const StaticSegmentedBar = ({ segments = 10, filled = 6 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-6 rounded-xs ${
            i < filled ? "bg-[#1778ee]" : "bg-stone-200"
          }`}
        />
      ))}
    </div>
  );
};

export default StaticSegmentedBar;
