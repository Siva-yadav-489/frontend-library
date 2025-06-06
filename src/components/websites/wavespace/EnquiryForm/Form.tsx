import Image from "next/image";
import ceo from "/public/websites/wavespace/enquiryForm/ceo.webp";
import calendarIcon from "/public/websites/wavespace/enquiryForm/calendarIcon.webp";

const Form = () => {
  const topics = [
    "UI/UX Design",
    "SaaS Design",
    "Branding",
    "CRO",
    "Mobile app",
    "Development",
    "MVP Development",
    "Web Design",
  ];
  return (
    <div className="lg:basis-1/2 max-lg:max-w-2xl max-lg:mr-auto bg-white max-md:p-4 p-10 lg:ml-1 max-md:py-8 pt-14">
      <section className="grid grid-cols-2 max-md:flex max-md:flex-col gap-5">
        <input
          type="email"
          placeholder="Email"
          name="Email"
          className="border-2 border-[#f0f0f0] text-[#333] text-base font-semibold py-2.5 pl-5 max-md:pl-2 align-middle outline-0 focus:border-[#2a1ad4]"
        />
        <input
          type="email"
          placeholder="Full name"
          name="Fullname"
          className="border-2 border-[#f0f0f0] text-[#333] text-base font-semibold py-2.5 pl-5 max-md:pl-2 align-middle outline-0 focus:border-[#2a1ad4]"
        />
        <select
          name="projectBudget"
          className="border-2 border-[#f0f0f0] py-2.5 pl-5 max-md:pl-2 focus:border-[#2a1ad4]"
        >
          <option value="ProjectBudget" className="text-[#333]">
            Project budget
          </option>
          <option value="$2000-5000USD">$2000-5000 USD</option>
          <option value="$5000-10000USD">$5000-10000 USD</option>
          <option value="$2000-5000USD">$10000-20000 USD</option>
          <option value="$2000-5000USD">$20000-50000 USD</option>
          <option value="$5000+USD">$50000+ USD</option>
        </select>
        <select
          name="whereYouFoundUs"
          className="border-2 border-[#f0f0f0] py-2.5 pl-5 max-md:pl-2 focus:border-[#2a1ad4]"
        >
          <option value="whereYouFoundUs" className="text-[#333]">
            How did you hear about us?
          </option>
          <option value="Clutch.co">Clutch.co</option>
          <option value="ChatGPT">ChatGPT</option>
          <option value="Google or Other Search Engine">
            Google or Other Search Engine
          </option>
          <option value="Perplexity">Perplexity</option>
          <option value="Dribbble/Behance">Dribbble/Behance</option>
          <option value="Blog/Article">Blog/Article</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Instagram">Instagram</option>
          <option value="Youtube">Youtube</option>
          <option value="Referral">Referral</option>
          <option value="Twitter">Twitter</option>
        </select>
        <textarea
          name="aboutProject"
          placeholder="Tell us about your product and goals."
          className="col-span-2 border-2 border-[#f0f0f0] py-5 pl-5 max-md:pl-2 font-medium outline-0 mt-3 text-[#333] focus:border-[#2a1ad4]"
        ></textarea>
      </section>
      <section className="mt-4">
        <p className="text-lg font-semibold mb-2">How can we help you?</p>
        <div className="flex flex-wrap gap-3 max-md:gap-1.5">
          {topics.map((topic, index) => (
            <span
              key={index}
              className={`py-2.5 px-4 max-md:px-2.5 max-md:py-2 text-xs max-md:text-[11px] text-[#7e7e81] font-medium border-2 border-[#f0f0f0]`}
            >
              {topic}
            </span>
          ))}
        </div>
      </section>
      <section className="mt-10 max-sm:mt-5 flex justify-between items-center">
        <a
          href="#"
          className="bg-[#3f2fee] px-[26px] py-4 max-sm:py-2.5 max-sm:mb-5 hover:bg-black text-[15px] leading-5 font-semibold max-sm:text-xs text-white max-sm:px-4 rounded-full w-fit"
        >
          Send message
        </a>
        <div className="text-end max-sm:hidden">
          <p className="text-[13px] leading-3 font-normal text-[#7e7e81]">
            Prefer email?
          </p>
          <p className="text-sm font-bold">hello@wavespace.agency</p>
        </div>
      </section>
      <p className="text-base font-medium my-3 sm:hidden ">Schedule a call:</p>
      <div className="flex items-center bg-white sm:hidden">
        <Image src={ceo} alt="ceo" className="w-16 max-sm:w-14 mr-5" />
        <section className="mr-8">
          <p className="text-[21px] max-sm:text-base text-nowrap font-semibold tracking-wider">
            Shahid Miah
          </p>
          <p className="text-base max-sm:text-xs text-[#7e7e81] font-medium">
            Founder & CEO
          </p>
        </section>
        <Image
          src={calendarIcon}
          alt="calendarIcon"
          className="w-11 max-sm:w-9 mx-3 content-end hover:scale-125 transition-all ease-linear"
        />
      </div>
    </div>
  );
};

export default Form;
