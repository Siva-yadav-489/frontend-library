import * as motion from "motion/react-client";

type ButtonProps = {
  btnStyle?: string;
  text?: string;
  textSize?: string;
  children?: React.ReactNode;
  hoverColor?: string;
  arrowAnimation?: boolean;
};

const Button = ({
  btnStyle,
  text = "Contact Us",
  textSize,
  children,
  hoverColor = "bg-black",
  arrowAnimation = true,
}: ButtonProps) => {
  return (
    <motion.div className="relative" whileHover="hover">
      <motion.a
        href="#"
        className={`relative bg-[#3f2fee] px-[26px] max-sm:px-6 ${btnStyle} rounded-full flex items-center w-fit gap-2 overflow-hidden`}
        variants={{
          hover: {
            transition: {
              staggerChildren: 0,
              delayChildren: 0,
            },
          },
        }}
      >
        <motion.span
          className={`absolute inset-0 ${hoverColor} rounded-full w-[100%]`}
          initial={{ scaleY: 0, y: "100%" }}
          variants={{
            hover: {
              scaleY: 1,
              y: 0,
              transition: {
                duration: 0.3,
                ease: "linear",
              },
            },
          }}
          exit={{ scaleY: 0, y: "100%" }}
          style={{ transformOrigin: "bottom" }}
        />
        <motion.span className={`relative ${textSize} leading-5 font-semibold`}>
          {text}
        </motion.span>

        {arrowAnimation ? (
          <div className="relative flex justify-center items-center w-3 h-3 overflow-hidden">
            <motion.div
              initial={{ x: -6, y: 6 }}
              variants={{
                hover: {
                  x: 6,
                  y: -6,
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 0.5,
                    ease: "linear",
                  },
                },
              }}
              className="flex flex-col w-3 h-3"
            >
              {children}
            </motion.div>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </motion.a>
    </motion.div>
  );
};

export default Button;
