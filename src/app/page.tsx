import * as motion from "motion/react-client";
export default function Home() {
  const websites = [
    { name: "Dripify", href: "dripify" },
    { name: "Apple Store", href: "applestore" },
    { name: "CogniAI", href: "cogniai" },
    { name: "Architect", href: "architect" },
    { name: "Health", href: "health" },
    { name: "WaveSpace", href: "wavespace" },
  ];
  return (
    <div className="flex flex-col gap-8 items-center justify-around h-screen">
      <motion.p className="text-3xl text-white text-nowrap text-center">
        {"Work in progress...".split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 50 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
      <div className="flex gap-4 items-center justify-center flex-col sm:flex-row w-full flex-wrap">
        {websites.map((website, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href={`/websites/${website.href}`}
          >
            {website.name.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.2 + charIndex * 0.05,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
