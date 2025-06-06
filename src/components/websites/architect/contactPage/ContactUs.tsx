import React from "react";
import contactIcon from "/public/websites/architect/contactPage/contactIcon.svg";
import HeadingWithButton from "../HeadingWithButton";

const ContactUs = () => {
  const socialMedia = [
    "X",
    "LinkedIn",
    "Facebook",
    "Instagram",
    "Youtube",
    "Pinterest",
  ];
  return (
    <div>
      <div className="flex max-md:flex-col px-12 max-[1200px]:px-5 mt-14 pt-14 pb-20 bg-[#fffbf5] md:space-x-8">
        {/* left half */}
        <section className="md:flex-1/2 ">
          <HeadingWithButton
            svg={contactIcon}
            align="start"
            heading={[
              "Your perfect project won’t build itself",
              "—but we can help! Contact us today",
              "and let’s bring your vision to life.",
            ]}
            btnText="CONTACT US"
            color="light-dark"
            optionalAlign="left"
            extraStyle="xl:text-[36px]"
          />

          <div className="border-b border-b-[#14141433] pb-[22px] mt-2  max-sm:w-[95%] max-md:w-2/3 lg:w-[28rem]">
            <p className="mb-3 text-[#14141470] font-medium text-[15px]">
              Hotline:
            </p>
            <p className="text-black font-medium max-lg:text-lg text-[21px] tracking-tight">
              (555) 123-45679
            </p>
            <p className="text-black font-medium max-lg:text-lg text-[21px] tracking-tight">
              (555) 124-27834
            </p>
          </div>
          <div className="border-b border-b-[#14141433] py-[22px] mt-2  max-sm:w-[95%] max-md:w-2/3 lg:w-[28rem]">
            <p className="mb-3 text-[#14141470] font-medium text-[15px]">
              Email:
            </p>
            <p className="text-black font-medium max-lg:text-lg text-[21px] tracking-tight">
              architectured@gmail.com
            </p>
          </div>
          <div className="border-b border-b-[#14141433] py-[22px] mt-2  max-sm:w-[95%] max-md:w-2/3 lg:w-[28rem]">
            <p className="mb-3 text-[#14141470] font-medium text-[15px]">
              Address:
            </p>
            <p className="text-black font-medium max-lg:text-lg text-[21px] tracking-tight">
              256 Eastern Street, Beside TNT Bridge,{" "}
              <br className="max-lg:hidden" />
              Stateburg, Texas, 4784
            </p>
          </div>
          <div className="border-b border-b-[#14141433] py-[22px] mt-2  max-sm:w-[95%] max-md:w-2/3 lg:w-[28rem]">
            <p className="mb-3 text-[#14141470] font-medium text-[15px]">
              Social Media:
            </p>
            {socialMedia.map((item, index) => (
              <div key={index} className="flex items-center">
                <p className="text-black font-medium max-lg:text-lg text-[21px] tracking-tight">
                  {item}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ))}
          </div>
        </section>
        {/* right half */}
        <section className="flex-1/2 max-md:max-w-[70%] max-md:mt-8 max-lg:max-w-1/2 max-sm:max-w-full lg:max-w-[28.5rem] mt-3 max-md:self-end">
          <p className="max-lg:text-lg text-[21px] font-medium tracking-tight leading-7 mb-8">
            Got big plans but not sure where to start?{" "}
            <br className="max-lg:hidden" />
            Don’t worry—just share what’s on your{" "}
            <br className="max-lg:hidden" />
            mind, and we’ll handle the rest. The{" "}
            <br className="max-lg:hidden" />
            sooner you fill this out, the sooner we{" "}
            <br className="max-lg:hidden" />
            can get started on something amazing!
          </p>
          <div className="flex space-x-3 mb-2">
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="py-3.5 pl-2 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4 w-[100%]"
                placeholder="Jane Smith"
                id="name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                className="py-3.5 pl-2 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4 w-[100%]"
                placeholder="(123) 456-7890"
                id="phone"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="py-3.5 px-3 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4"
              placeholder="jane@gmail.com"
              id="email"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm font-medium" htmlFor="email">
              Project type
            </label>
            <select
              name="project"
              id="project"
              className="py-3.5 px-3 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4"
            >
              <option value="select">Select</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="office">Office</option>
            </select>
          </div>
          <div className="flex items-baseline-last mb-2 space-x-3">
            <div className="flex flex-col ">
              <label className="text-sm font-medium" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                className="py-3.5 pl-2 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4 w-[100%]"
                placeholder="City, State"
                id="location"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-sm font-medium" htmlFor="budget">
                Budget
              </label>
              <input
                type="text"
                className="py-3.5 pl-2 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4 w-[100%]"
                placeholder="Enter your budget"
                id="budget"
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-sm font-medium" htmlFor="projectSize">
                Project Size(SQFT)
              </label>
              <input
                type="text"
                className="py-3.5 pl-2 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4 w-[100%]"
                placeholder="e.g., 1500"
                id="projectsize"
              />
            </div>
          </div>
          <div className="flex space-x-3 mb-2">
            <div className="flex flex-col flex-1">
              <label
                className="text-sm flex-1/2 font-medium"
                htmlFor="startDate"
              >
                Preferred Start Date
              </label>
              <input
                type="text"
                className="py-3.5 pl-2 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4 w-[100%]"
                placeholder="dd-mm-yyyy"
                id="startdate"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-sm flex-1/2 font-medium" htmlFor="endDate">
                Desired Completion Date
              </label>
              <input
                type="text"
                className="py-3.5 pl-2 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4 w-[100%]"
                placeholder="dd-mm-yyyy"
                id="enddate"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={3}
              placeholder="Write your message here"
              className="pb-14 pt-2 px-3 bg-[#f7f2e9] text-[13px] rounded-sm mt-2 mb-4"
            ></textarea>
          </div>
          <button className="p-3 rounded-sm my-5 font-medium text-sm max-lg:text-sm bg-[#ff833b] hover:text-[#ff833b] hover:border hover:border-[#ff833b] hover:bg-black/85 w-full">
            Request free Estimate
          </button>
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d307.23740664883894!2d4.891295!3d52.37588!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDIyJzMzLjIiTiA0wrA1MycyOC43IkU!5e1!3m2!1sen!2sus!4v1747487842828!5m2!1sen!2sus"
        className="border-0 w-full h-[41rem]"
      ></iframe>
    </div>
  );
};

export default ContactUs;
