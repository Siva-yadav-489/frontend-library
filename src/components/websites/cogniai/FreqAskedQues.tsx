import Button from "./Button";
import GradientHeading from "./GradientHeading";
import OrangeHeadText from "./OrangeHeadText";
import Subtext from "./Subtext";

const FreqAskedQues = () => {
  const questions = [
    "What industries benefit from CogniAI?",
    "Is my data secure with CogniAI?",
    "What kind of support is available?",
    "Does CogniAI offer a free trail?",
  ];
  return (
    <div className="flex items-start my-20 max-lg:flex-col">
      <div className="flex-1">
        <OrangeHeadText text="FREQUENTLY ASKED QUESTIONS" />

        <GradientHeading
          text={["Your Questions Answered-", "Everything You Need"]}
          styling="text-start my-3"
        />

        <Subtext
          text="Find clear answers to common questions about our services and features."
          textPosition="text-start my-3"
        />

        <Button text="See All FAQ's" margin="my-3" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start py-6 px-10 max-sm:px-4 rounded-3xl bg-[#fff2e2]">
          <div className="text-3xl font-medium text-black">
            What is CogniAI
            <br />
            <p className="text-xl font-light text-stone-700 mt-3">
              Cognio Al is a powerful analytics platform that delivers Al-{" "}
              <br />
              driven insights, enabling businesses to optimize <br />
              performance, enhance efficiency, and make smarter, data- <br />
              backed decisions effortlessly.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-11 text-[#ec8d2f] mt-2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {questions.map((question, index) => (
          <div
            key={index}
            className="flex justify-between items-center max-sm:p-3 p-9 my-5 rounded-3xl bg-[#f9f9f9]"
          >
            <p className="text-3xl font-medium text-black">{question}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 max-sm:w-5 max-sm:h-3 border p-2 box-content border-stone-300 rounded-full text-black"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreqAskedQues;
