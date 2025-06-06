import Image from "next/image";
import mainImage from "/public/websites/architect/Inspiration/mainImage.png";
import person1 from "/public/websites/architect/Inspiration/person1.avif";
import person2 from "/public/websites/architect/Inspiration/person2.avif";
import person3 from "/public/websites/architect/Inspiration/person3.avif";
import person4 from "/public/websites/architect/Inspiration/person4.avif";

const Inspiration = () => {
  const people = [person2, person3, person4];
  return (
    <div className="bg-[#211f1a] w-full h-screen max-md:h-fit max-md:pb-14 pt-40 max-md:px-5">
      <div className="mx-auto ">
        <Image
          src={mainImage}
          alt="image"
          className="mx-auto rounded-md w-80"
        />
        <p className="text-xl max-md:text-lg max-sm:w-[80%] max-sm:mx-auto px-3 text-[#fffbf5] py-5 rounded-lg backdrop-blur-sm -mt-5 font-semibold max-sm:font-medium text-center">
          "We came in with a Pinterest board full of{" "}
          <br className="max-sm:hidden" /> ideas and left with the home of our
          dreams! <br className="max-sm:hidden" />
          The team made everything so easy, <br className="max-sm:hidden" />
          listening to every little detail and turning our{" "}
          <br className="max-sm:hidden" />
          scattered thoughts into something magical."x`
        </p>
        <div className="flex flex-wrap max-sm:w-[80%] max-sm:mx-auto items-center space-x-1 justify-center my-11">
          <section className="bg-[#fffbf5] flex justify-between items-center rounded-md p-1">
            <Image
              src={person1}
              alt="person1"
              width={45}
              height={45}
              className="rounded-sm"
            />
            <p className="text-[11px] pl-2 pr-5 max-sm:pr-8 font-bold text-[#141414cc]">
              ORION CALDWELL,
              <br /> HOME OWNER
            </p>
          </section>
          {people.map((person, index) => (
            <Image
              key={index}
              src={person}
              alt={`person ${index}`}
              width={54}
              height={54}
              className="rounded-sm m-0.5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
