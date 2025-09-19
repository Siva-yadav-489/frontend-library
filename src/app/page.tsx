import * as motion from "motion/react-client";
import eyes from "/public/eyes_emoji.png";
import Image from "next/image";
import dripify from "/public/dripify.png";
import apple from "/public/apple.png";
import cogni from "/public/cogni.png";
import architect from "/public/architect.png";
import health from "/public/health.png";
import wavespace from "/public/wavespace.png";
import unifi from "/public/unifi.png";

export default function Home() {
  const websites = [
    { name: "Dripify", href: "dripify", image: dripify },
    { name: "Apple Store", href: "applestore", image: apple },
    { name: "CogniAI", href: "cogniai", image: cogni },
    { name: "Architect", href: "architect", image: architect },
    { name: "Health", href: "health", image: health },
    { name: "WaveSpace", href: "wavespace", image: wavespace },
    { name: "Unifi", href: "unifi", image: unifi },
  ];
  return (
    <div className="flex flex-col font-mono items-center justify-center min-h-screen">
      {/*   <motion.p className="text-3xl text-white text-nowrap text-center">
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
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-lg flex items-center text-neutral-400"
      >
        Meanwhile take a peek into it{" "}
        <motion.span
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 20, opacity: 1 }}
          transition={{ repeat: Infinity, repeatDelay: 2.5 }}
          className="inline-block w-5 h-5 mx-1"
        >
          <Image src={eyes} alt="eyes-emoji" className="w-full h-full" />
        </motion.span>
      </motion.p> */}
      <h1 className="font-bold text-3xl pt-28">Frontend Showcases</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-14 pb-28 max-w-3xl mx-auto max-md:mx-5 gap-5 place-content-center place-items-center">
        {websites.reverse().map((website, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium h-full px-5 w-full"
            href={`/websites/${website.href}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
            >
              <Image
                src={website.image}
                alt="image"
                className="w-96 h-48 mt-3"
              />
              <p className="my-3">
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
              </p>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
