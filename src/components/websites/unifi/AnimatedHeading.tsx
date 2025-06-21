"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const AnimatedHeading = ({
  text,
  className,
  initialColor,
  overlayColor,
  scrollProgress,
}: {
  text: string;
  className?: string;
  initialColor: string;
  overlayColor: string;
  scrollProgress?: MotionValue<number>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progress = scrollProgress || scrollYProgress;
  const animatedChars = useTransform(progress, [0, 1], [0, text.length]);

  // Create color transforms for each character at the top level
  const colorTransforms = text
    .split("")
    .map((_, index) =>
      useTransform(animatedChars, (value) =>
        index < Math.floor(value) ? overlayColor : initialColor
      )
    );

  return (
    <div ref={containerRef} className="flex items-center h-full">
      <p
        className={`text-[6.9vw] max-lg:text-[9vw] max-sm:text-[12.5vw] leading-[1.1] lg:w-3/4 ${className} tracking-normal font-medium`}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            style={{
              color: colorTransforms[index],
            }}
            transition={{ duration: 0.3 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </p>
    </div>
  );
};

export default AnimatedHeading;
