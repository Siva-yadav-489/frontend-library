"use client";
import img1 from "/public/websites/unifi/hexagonGrid/greenblackHexagon.jpg";
import img2 from "/public/websites/unifi/hexagonGrid/greyHexagon.jpg";
import img3 from "/public/websites/unifi/hexagonGrid/grassHexagon.jpg";
import img4 from "/public/websites/unifi/hexagonGrid/videoHexagon.svg";
import img5 from "/public/websites/unifi/hexagonGrid/greenblackHexagon.jpg";
import img6 from "/public/websites/unifi/hexagonGrid/videoHexagon.svg";
import img7 from "/public/websites/unifi/hexagonGrid/centerHexagon.jpg";
import img8 from "/public/websites/unifi/hexagonGrid/greyHexagon.jpg";
import img9 from "/public/websites/unifi/hexagonGrid/greenblackHexagon.jpg";
import img10 from "/public/websites/unifi/hexagonGrid/videoHexagon.svg";
import img11 from "/public/websites/unifi/hexagonGrid/grassHexagon.jpg";
import img12 from "/public/websites/unifi/hexagonGrid/greyHexagon.jpg";
import img13 from "/public/websites/unifi/hexagonGrid/grassHexagon.jpg";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const HexagonSVG = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z"
      fill="none"
      stroke="#97979739"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const HalfHexagonSVGRight = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="50 0 50 100"
    className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M0 0 L50 25 L50 75 L0 100 L0 75 L0 25 Z"
      fill="none"
      stroke="#97979739"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const HalfHexagonSVGLeft = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="50 0 50 100"
    className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
    preserveAspectRatio="none"
  >
    <path
      d="M50 25 L0 0 L0 100 L50 75 L50 25"
      fill="none"
      stroke="#97979739"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

const HexagonGrid = () => {
  const containerRef = useRef(null);
  // 12 hexagons in total (4 + 4 + 4), but row 2 has 2 half-hexagons
  // We'll treat half-hexagons as individual steps for animation
  // For animation, treat half-hexagons as individual steps
  // Row 1: 4, Row 2: 1 (half) + 3 + 1 (half) = 5, Row 3: 4
  const animHexes = [
    { type: "full", img: img1 },
    { type: "full", img: img2 },
    { type: "full", img: img3 },
    { type: "full", img: img4 },
    { type: "half-right", img: img5 },
    { type: "full", img: img6 },
    { type: "full", img: img7 },
    { type: "full", img: img8 },
    { type: "half-left", img: img9 },
    { type: "full", img: img10 },
    { type: "full", img: img11 },
    { type: "full", img: img12 },
    { type: "full", img: img13 },
  ];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track the current value of scrollYProgress
  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  // Helper to calculate opacity for each hexagon
  const getOpacity = (i: number) => {
    const start = i / animHexes.length;
    const end = (i + 0.5) / animHexes.length;
    if (progress <= start) return 0;
    if (progress >= end) return 1;
    return (progress - start) / (end - start);
  };

  return (
    <div className="relative w-full bg-[#272727] py-[12vw]">
      <div ref={containerRef} className="h-[300vh] relative">
        <div className="sticky top-0 inset-x-0 h-screen w-full flex flex-col justify-center items-center pointer-events-none">
          <div className="-space-y-[7.30vw] pointer-events-auto max-w-full">
            {/* Row 1 */}
            <section className="flex items-center justify-center overflow-x-hidden">
              {[img1, img2, img3, img4].map((img, i) => (
                <div key={i} className="w-[25vw] h-[29vw]">
                  <div className="relative w-full h-full">
                    <HexagonSVG />
                    <motion.div
                      style={{ opacity: getOpacity(i) }}
                      className="w-full h-full"
                    >
                      <Image
                        src={img}
                        alt="hexagonImage"
                        className="w-full h-full object-cover"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </section>
            {/* Row 2 */}
            <section className="flex items-center justify-center overflow-x-hidden">
              {/* Half right hex*/}
              <div className="w-[12.5vw] h-[29vw] relative">
                <div className="w-[25vw] h-full -translate-x-1/2">
                  <HalfHexagonSVGRight />
                  <motion.div
                    style={{ opacity: getOpacity(4) }}
                    className="w-full h-full"
                  >
                    <Image
                      src={img5}
                      alt="hexagonImage"
                      className="w-full h-full object-cover z-10"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 50% 75%, 50% 25%)",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
              {/* center 3 images */}
              {[img6, img7, img8].map((img, i) => (
                <div key={i + 5} className="w-[25vw] h-[29vw]">
                  <div className="relative w-full h-full">
                    <HexagonSVG />
                    <motion.div
                      style={{ opacity: getOpacity(i + 5) }}
                      className="w-full h-full"
                    >
                      <Image
                        src={img}
                        alt="hexagonImage"
                        className="w-full h-full object-cover"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
              {/* Half left hex*/}
              <div className="w-[12.5vw] h-[29vw] relative">
                <div className="w-[25vw] h-full">
                  <HalfHexagonSVGLeft className="rotate-180" />
                  <motion.div
                    style={{ opacity: getOpacity(8) }}
                    className="w-full h-full"
                  >
                    <Image
                      src={img9}
                      alt="hexagonImage"
                      className="w-full h-full object-cover z-10"
                      style={{
                        clipPath:
                          "polygon(0% 25%, 50% 0%, 50% 25%, 50% 75%, 50% 100%, 0% 75%)",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </section>
            {/* Row 3 */}
            <section className="flex items-center justify-center overflow-x-hidden">
              {[img10, img11, img12, img13].map((img, i) => (
                <div key={i + 9} className="w-[25vw] h-[29vw]">
                  <div className="relative w-full h-full">
                    <HexagonSVG />
                    <motion.div
                      style={{ opacity: getOpacity(i + 9) }}
                      className="w-full h-full"
                    >
                      <Image
                        src={img}
                        alt="hexagonImage"
                        className="w-full h-full object-cover"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonGrid;
