import Image from "next/image";
import image1 from "/public/websites/architect/howWeWork/card1.avif";
import image2 from "/public/websites/architect/howWeWork/card2.avif";
import image3 from "/public/websites/architect/howWeWork/card3.avif";
import image4 from "/public/websites/architect/howWeWork/card4.avif";

const Card = () => {
  const cardDetails = [
    {
      image: image1,
      step: "01",
      title: "Initial Consultation",
      desc: "We begin by sitting down with you to understand your vision, goals, and preferences...",
    },
    {
      image: image2,
      step: "02",
      title: "Concept Development",
      desc: "Once we have a clear understanding of your goals, we move on to brainstorming...",
    },
    {
      image: image3,
      step: "03",
      title: "Planning & Preparation",
      desc: "With the concept approved, we focus on the practicalities...",
    },
    {
      image: image4,
      step: "04",
      title: "Execution & Delivery",
      desc: "This is the exciting part—bringing the plan to life...",
    },
  ];

  return (
    <div className=" max-w-[32rem] space-y-6">
      {cardDetails.map((card, index) => (
        <div
          key={index}
          className="bg-[#f7f2e9] rounded-md flex flex-col items-center p-1"
        >
          <div className="relative w-full">
            <Image
              src={card.image}
              alt="image"
              className="rounded-md w-full object-cover max-h-80"
            />
            <div className="absolute bottom-0 w-full p-2 my-1 rounded-md backdrop-blur-sm bg-[#ffffff0d] text-[#fffbf5] flex items-start space-x-2">
              <span className="text-xs font-semibold">STEP</span>
              <span className="text-7xl max-xl:text-5xl font-semibold">
                {card.step}
              </span>
              <div className="w-full">
                <hr />
                <p className="font-medium text-xl max-xl:text-lg mt-1">
                  {card.title}
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#21201b] text-sm font-semibold mt-5 px-4 pb-4">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Card;
