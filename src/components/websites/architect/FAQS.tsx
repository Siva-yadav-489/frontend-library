import HeadingWithButton from "./HeadingWithButton";
import faqsIcon from "/public/websites/architect/faqsIcon.svg";

const FAQS = () => {
  const questions = [
    "Do you handle all the permits and paperwork?",
    "Can I make changes during the design process?",
    "Do you only design residential spaces?",
    "How do you charge for your services?",
    "How do you charge for your services?",
    "Can you work within my budget?",
    "Can I see a 3D model of my design?",
    "Do you work with contractors?",
    "Can you help with interior design too?",
    "Do you handle the purchasing of furniture and materials?",
    "What happens if I still have questions?",
  ];
  return (
    <div className="bg-[#f7f2e9] text-sm px-12 py-20 max-[1200px]:px-5">
      <HeadingWithButton
        svg={faqsIcon}
        align="start"
        heading={[
          "We’ve answered the big questions, but if you still",
          " have something on your mind, we’re here to help.",
        ]}
        btnText="FAQS"
        color="light"
      />
      <div className="flex max-lg:flex-col-reverse space-x-10 ">
        <section className="bg-[#fffbf5] px-6 py-10 mb-3 text-[#141414cc] lg:sticky lg:top-24 rounded-lg  max-sm:w-full sm:max-w-fit lg:w-[30rem] h-fit">
          <p className="text-[25px] leading-8 max-sm:text-xl text-[#21201b] max-lg:leading-6 font-semibold mb-6">
            We’re just a form away— <br />
            send us your question, <br />
            and we’ll be happy to help!
          </p>
          <div className="flex max-sm:flex-col sm:space-x-3">
            <div className="flex flex-col flex-1">
              <label className="text-[11px] flex-1/2 font-bold" htmlFor="name">
                NAME
              </label>
              <input
                type="text"
                className="py-2.5 pl-2 bg-[#f7f2e9] text-sm rounded-sm mt-2 mb-4 max-md:w-full"
                placeholder="Jane Smith"
                id="name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-[11px] flex-1/2 font-bold" htmlFor="phone">
                PHONE
              </label>
              <input
                type="text"
                className="py-2.5 pl-2 bg-[#f7f2e9] text-sm rounded-sm mt-2 mb-4 max-md:w-full"
                placeholder="(123) 456-7890"
                id="phone"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[11px] font-bold" htmlFor="email">
              EMAIL
            </label>
            <input
              type="text"
              className="py-2.5 px-3 bg-[#f7f2e9] text-sm rounded-sm mt-2 mb-4"
              placeholder="jane@gmail.com"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[11px] font-bold" htmlFor="message">
              MESSAGE
            </label>
            <textarea
              name="message"
              id="message"
              rows={3}
              placeholder="Write your message here"
              className="py-2.5 px-3 bg-[#f7f2e9] text-sm rounded-sm mt-2 mb-4"
            ></textarea>
          </div>
          <button className="p-3 rounded-sm my-5 font-semibold text-base max-lg:text-sm bg-[#ff833b] hover:text-[#ff833b] hover:border hover:border-[#ff833b] hover:bg-black/85 w-full">
            Send Message
          </button>
        </section>
        <section className="w-full">
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex py-5 px-5 rounded-lg mb-2.5 bg-[#fffbf5] justify-between items-center"
            >
              <p className=" text-lg mx-sm:text-base tracking-tight font-medium text-black">
                {question}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-[#21201c] bg-white rounded-sm p-2 box-content hover:bg-black hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FAQS;
