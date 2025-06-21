import * as motion from "motion/react-client";

const SectionHeading = ({
  text,
  className,
}: {
  text: string[];
  className?: string;
}) => {
  return (
    <div className="overflow-hidden">
      <motion.p
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          staggerChildren: 0.05,
        }}
        className={`text-[7vw] max-lg:text-[9vw] max-sm:text-[12.5vw] leading-[1.1] ${className} tracking-normal font-medium`}
      >
        {text.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.split("").map((char, charIndex) => (
              <span
                key={`${lineIndex}-${charIndex}`}
                className="inline-block h-[7vw] max-lg:h-[9vw] max-sm:h-[12.5vw]"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            {lineIndex < text.length - 1 && <br />}
          </span>
        ))}
      </motion.p>
    </div>
  );
};

export default SectionHeading;
