import Image from "next/image";
import Container from "../Container";
import checkbox from "/public/websites/wavespace/enquiryForm/checkbox.webp";
import ceo from "/public/websites/wavespace/enquiryForm/ceo.webp";
import calendarIcon from "/public/websites/wavespace/enquiryForm/calendarIcon.webp";
import Form from "./Form";

const EnquiryForm = () => {
  return (
    <div className="bg-[#f0f0f0]">
      <Container className="py-28 max-md:py-11 flex max-lg:flex-col">
        <section className="basis-1/2 max-lg:mb-11">
          <h1 className="text-black text-[50px] max-sm:text-3xl font-extrabold sm:leading-16 mb-8">
            Have a Project?
            <br />
            Let’s talk!
          </h1>
          <div className="flex flex-col space-y-2 text-base font-medium max-sm:text-sm mb-20 max-sm:mb-0">
            <p className="flex items-center">
              <Image
                src={checkbox}
                alt="checkbox"
                className="w-4 max-sm:w-3 mr-2"
              />{" "}
              NDA? Absolutely just ask.
            </p>
            <p className="flex items-center">
              <Image
                src={checkbox}
                alt="checkbox"
                className="w-4 max-sm:w-3 mr-2"
              />{" "}
              We’ll respond in 24 hours fast & focused.
            </p>
            <p className="flex items-center">
              <Image
                src={checkbox}
                alt="checkbox"
                className="w-4 max-sm:w-3 mr-2"
              />{" "}
              Work with senior UX experts, not juniors.
            </p>
          </div>
          <p className="text-lg font-medium mb-3 max-sm:hidden">
            Schedule a call:
          </p>
          <div className="flex items-center bg-white p-2.5 w-fit max-sm:hidden">
            <Image src={ceo} alt="ceo" className="w-16 mr-5" />
            <section className="mr-8">
              <p className="text-[21px] font-semibold tracking-wider">
                Shahid Miah
              </p>
              <p className="text-base text-[#7e7e81] font-medium">
                Founder & CEO
              </p>
            </section>
            <Image
              src={calendarIcon}
              alt="calendarIcon"
              className="w-11 mx-3 content-end hover:scale-125 transition-all ease-linear"
            />
          </div>
        </section>
        <Form />
      </Container>
    </div>
  );
};

export default EnquiryForm;
