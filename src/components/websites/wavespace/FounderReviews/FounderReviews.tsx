import AnimatedHeading from "../AnimatedHeading";
import Container from "../Container";
import Card from "./Card";
import person1 from "/public/websites/wavespace/founderReviews/person1.webp";
import person2 from "/public/websites/wavespace/founderReviews/person2.webp";
import person3 from "/public/websites/wavespace/founderReviews/person3.webp";

const FounderReviews = () => {
  const founderReviews = [
    {
      image: person1,
      imageSize: "max-w-80",
      founderName: "Matt Kabus",
      designation: "CEO & Founder @LifeTales",
      about:
        "Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended",
    },
    {
      image: person2,
      imageSize: "max-w-[400px]",
      founderName: "Ishraq Khan",
      designation: "CEO @Kodezi",
      about:
        "Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive An absolute pleasure to work with and I'm super satisfied with the results. Highly recommended!",
    },
    {
      image: person3,
      imageSize: "max-w-80",
      founderName: "Nikita Ribakovs",
      designation: "Founder & CEO @Tournated",
      about:
        "Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great quality and smooth communication",
    },
  ];
  const founderReviewsMd = [
    {
      image: person1,
      founderName: "Matt Kabus",
      designation: "CEO & Founder @LifeTales",
      about:
        "Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended",
    },
    {
      image: person2,
      founderName: "Ishraq Khan",
      designation: "CEO @Kodezi",
      about:
        "Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive An absolute pleasure to work with and I'm super satisfied with the results. Highly recommended!",
    },
    {
      image: person3,
      founderName: "Nikita Ribakovs",
      designation: "Founder & CEO @Tournated",
      about:
        "Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great quality and smooth communication",
    },
    {
      image: person1,
      founderName: "Matt Kabus",
      designation: "CEO & Founder @LifeTales",
      about:
        "Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended",
    },
    {
      image: person2,
      founderName: "Ishraq Khan",
      designation: "CEO @Kodezi",
      about:
        "Wavespace very reliable at all times and we have enjoyed working & designs are truly impressive An absolute pleasure to work with and I'm super satisfied with the results. Highly recommended!",
    },
    {
      image: person3,
      founderName: "Nikita Ribakovs",
      designation: "Founder & CEO @Tournated",
      about:
        "Highly happy with a design delivered by Wavespace. Definitely will keep working with Wavespace. Great quality and smooth communication",
    },
  ];
  return (
    <>
      <Container className="pt-24 pb-20 max-sm:pb-5 max-md:pt-8">
        <div className="max-md:hidden">
          <AnimatedHeading
            text={[
              "500+ Founders trusted us. Get return on ",
              "your investment, multiplied!",
            ]}
            initialColor1="#c6c6c6 50%"
            targetColor1="#000 50%"
            initialColor2="#e9e8e8 50%"
            targetColor2="#29242469 50%"
          />
        </div>
        <div className="md:hidden">
          <AnimatedHeading
            text={["500+ Founders trusted ", "us. Multiply your ROI!"]}
            line1Style="max-sm:text-[30px]"
            initialColor1="#c6c6c6 50%"
            targetColor1="#000 50%"
            initialColor2="#c6c6c6 50%"
            targetColor2="#000 50%"
          />
        </div>
        <div className="flex mt-20 max-md:hidden space-x-16 justify-between">
          {founderReviews.map((review, index) => (
            <Card
              key={index}
              image={review.image}
              imageSize={review.imageSize}
              founderName={review.founderName}
              designation={review.designation}
              about={review.about}
            />
          ))}
        </div>
        <div className="flex mt-8 space-x-7 md:hidden overflow-hidden justify-between">
          {founderReviewsMd.map((review, index) => (
            <Card
              key={index}
              image={review.image}
              imageSize="w-60 h-64"
              founderName={review.founderName}
              designation={review.designation}
              about={review.about}
              aboutStyle="font-normal text-[12.6px]"
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default FounderReviews;
