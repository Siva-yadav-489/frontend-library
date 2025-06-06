import Button from "../Button";
import Container from "../Container";
import Image from "next/image";
import rightTopArrow from "/public/websites/wavespace/rightTopArrow.webp";
import LocationCard from "./LocationCard";
import emailIcon from "/public/websites/wavespace/contactUs/emailIcon.webp";

const ContactUs = () => {
  const branches = [
    {
      location: "Bangladesh",
      email: "hello@wavespace.agency",
      contactNumber: "+880 1785 0871 48",
      address: [
        "Oriental Gofur Tower, ",
        "88/KA, Mohammadpur,",
        "Dhaka,Bangladesh.",
      ],
    },
    {
      location: "Indonesia",
      email: "hello@wavespace.agency",
      contactNumber: "+62 8211 6925 169",
      address: ["Podomoro Park, ", "Padmagriya 15/6 Bandung, ", "Indonesia."],
    },
    {
      location: "USA",
      email: "hello@wavespace.agency",
      contactNumber: "+1 470 504 3155",
      address: ["75 E 3rd St Sheridan, WY ", "82801, USA."],
    },
  ];
  return (
    <div>
      <Container className="pt-20 max-md:py-10 pb-32">
        <div className="flex max-lg:flex-col max-lg:items-start justify-between items-center">
          <h1
            className={`text-[#1b1b1b] text-6xl max-md:text-4xl max-md:font-semibold md:tracking-wider font-bold max-md:mb-5 md:leading-20`}
          >
            Got a project in mind?
            <br />
            Let’s talk.
          </h1>
          <Button
            btnStyle="py-3.5 max-sm:py-3"
            text="Book a call"
            textSize="text-[15px] max-sm:text-sm text-white"
            children={
              <>
                <Image
                  src={rightTopArrow}
                  alt="rightTopArrow"
                  className="w-3 box-content bg-transparent absolute top-1.5 right-1.5 shrink-0"
                />
                <Image
                  src={rightTopArrow}
                  alt="rightTopArrow"
                  className="w-3 box-content bg-transparent absolute bottom-1.5 left-1.5 shrink-0"
                />
              </>
            }
          />
        </div>
        <div className="flex max-lg:flex-wrap justify-between mt-24 max-md:mt-10 max-lg:gap-y-5">
          {branches.map((branch, index) => (
            <section
              key={index}
              className={`${
                index === 2
                  ? "lg:border-r lg:pr-10 xl:pr-24"
                  : "max-lg:basis-1/2"
              }`}
            >
              <LocationCard
                key={index}
                location={branch.location}
                email={branch.email}
                contactNumber={branch.contactNumber}
                address={branch.address}
              />
            </section>
          ))}
          <section className="xl:ml-24 lg:ml-10 max-lg:basis-1/2">
            <h3 className="text-xl max-md:text-lg font-semibold tracking-wider mb-4 max-md:mb-2">
              Business Inquiry
            </h3>
            <p className="text-base max-md:text-xs max-xs:hidden font-medium text-[#7e7e81]">
              Email
            </p>
            <p className="flex items-center mb-8 max-md:mb-3">
              <Image
                src={emailIcon}
                alt="emailIcon"
                className="w-4 mr-1 max-xs:hidden"
              />
              <span className="text-sm max-md:text-[11px] font-bold">
                hello@wavespace.agency
              </span>
            </p>
            <h3 className="text-xl max-md:text-lg font-semibold tracking-wider mb-4 max-md:mb-2">
              Career
            </h3>
            <p className="text-base max-md:text-xs max-xs:hidden font-medium text-[#7e7e81]">
              Join Us
            </p>
            <p className="flex items-center mb-8">
              <Image
                src={emailIcon}
                alt="emailIcon"
                className="w-4 mr-1 max-xs:hidden"
              />
              <span className="text-sm max-md:text-[11px] font-bold">
                career@wavespace.agency
              </span>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
