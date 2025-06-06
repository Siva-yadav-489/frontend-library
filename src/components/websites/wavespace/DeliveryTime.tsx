import Image from "next/image";
import AnimatedHeading from "./AnimatedHeading";
import Container from "./Container";
import rightTopArrow from "/public/websites/wavespace/rightTopArrow.webp";
import founder from "/public/websites/wavespace/deliveryTime/founder.webp";
import Button from "./Button";
import blackRightTopArrow from "/public/websites/wavespace/blackRightTopArrow.webp";

const DeliveryTime = () => {
  const deliveryPoints = [
    { number: "01", text: "Onboard in <1 day" },
    { number: "02", text: "Understand Scope & Strategy" },
    { number: "03", text: "First designs in 4-5 days" },
  ];
  return (
    <div className="bg-black">
      <Container className="pt-32 max-sm:pt-10 pb-16 max-md:pb-4">
        <AnimatedHeading
          text={["We deliver on time, in days and weeks ", "—not months."]}
          line1Style="max-sm:text-[30px] max-md:hidden"
          initialColor1="#5c5c5c 50%"
          targetColor1="#fff 50%"
          initialColor2="#313131 50%"
          targetColor2="#ffffff85 50%"
        />
        <AnimatedHeading
          text={["We deliver on time, in days and weeks ", "—not months."]}
          line1Style="max-sm:text-[30px] max-sm:w-2/3 md:hidden"
          initialColor1="#5c5c5c 50%"
          targetColor1="#fff 50%"
          initialColor2="#5c5c5c 50%"
          targetColor2="#fff 50%"
        />
        <div className="flex max-lg:flex-col w-full justify-betwee items-start mt-16 max-lg:mt-4 mb-32 max-lg:mb-14">
          <section className="bg-[#242424] lg:basis-2/3 max-lg:w-full max-lg:mb-11">
            {deliveryPoints.map((point, index) => (
              <p
                key={index}
                className={`flex items-center text-white font-medium py-8 px-7 text-xl max-md:text-base max-md:p-3 tracking-wider ${
                  index === 2 ? "" : "border-b"
                } border-[#3a3a3a]`}
              >
                <span className="text-[#7e7e81] text-base max-md:text-xs font-light mr-5">
                  {point.number}
                </span>
                {point.text}
                <Image
                  src={rightTopArrow}
                  alt="rightTopArrow"
                  className="w-4 h-4 max-md:w-2.5 max-md:h-2.5 ml-auto"
                />
              </p>
            ))}
          </section>
          <section className="lg:basis-1/3 flex flex-col lg:ml-auto lg:max-w-[340px] tracking-wide justify-center">
            <p className="text-white text-sm font-medium mb-5">
              “Wavespace is a fantastic design team, with a healthy blend of UI
              and UX skills. Highly recommended”
            </p>
            <div className="flex items-center mb-10 gap-4">
              <Image src={founder} alt="Founder" className="w-11" />
              <section>
                <p className="text-white font-semibold text-sm">/ Matt Kabus</p>
                <p className="text-xs font-normal text-[#7e7e81]">
                  CEO & Founder @LifeTales
                </p>
              </section>
            </div>
            <Button
              btnStyle="bg-[#ebfe5b] py-3.5 max-md:py-2.5"
              hoverColor="bg-white"
              text="Book a call"
              textSize="text-[15.5px] max-md:text-[14px]"
            >
              <>
                <Image
                  src={blackRightTopArrow}
                  alt="blackRightTopArrow"
                  className="w-3 box-content bg-transparent absolute top-1.5 right-1.5 shrink-0"
                />
                <Image
                  src={blackRightTopArrow}
                  alt="blackRightTopArrow"
                  className="w-3 box-content bg-transparent absolute bottom-1.5 left-1.5 shrink-0"
                />
              </>
            </Button>
          </section>
        </div>
        <AnimatedHeading
          text={[
            "From startup to enterprise, grow your business ",
            "with fast and creative designs!",
          ]}
          line1Style="text-white max-md:hidden"
          initialColor1="#5c5c5c 50%"
          targetColor1="#fff 50%"
          initialColor2="#313131 50%"
          targetColor2="#ffffff85 50%"
        />
        <AnimatedHeading
          text={["Startup to enterprise get designs that drive growth"]}
          line1Style="text-white text-[28px] leading-8 md:hidden"
          initialColor1="#5c5c5c 50%"
          targetColor1="#fff 50%"
          initialColor2="#5c5c5c 50%"
          targetColor2="#fff 50%"
        />
      </Container>
    </div>
  );
};

export default DeliveryTime;
