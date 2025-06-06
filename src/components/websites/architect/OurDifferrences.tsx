import bgImage from "/public/websites/architect/ourDifferences/ourDifferences.avif";
import btnIcon from "/public/websites/architect/ourDifferences/btnIcon.svg";
import HeadingWithButton from "./HeadingWithButton";

const OurDifferrences = () => {
  return (
    <div
      className="bg-cover bg-center w-full max-h-[45rem] max-md:px-5 md:py-20 flex justify-end"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="md:w-[30rem] max-md:w-full max-md:mb-5 max-md:mt-28 my-auto md:mr-16 bg-[#fffbf5] rounded-xl text-black max-md:p-4 max-md:pb-5 pt-5 md:pb-10 px-10">
        <div className="max-md:hidden">
          <HeadingWithButton
            svg={btnIcon}
            heading={["what makes us different", "(and totally awesome)"]}
            align="start"
            btnText="OUR DIFFERENCES"
            color="light-dark"
          />
        </div>
        <div className="md:hidden">
          <HeadingWithButton
            svg={btnIcon}
            heading={["what makes us different (and totally awesome)", ""]}
            align="start"
            btnText="OUR DIFFERENCES"
            color="light-dark"
            optionalAlign="md:start"
          />
        </div>
        <div>
          <section className="flex items-center justify-between border-dashed border-b border-black">
            <div className=" flex items-start text-[17px] md:text-xl font-medium my-4">
              <p>001</p> &nbsp;&nbsp; <p>Designs with heart and soul</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-stone-400"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </section>
          <section className="flex items-center justify-between border-dashed border-b border-black">
            <div className=" flex items-start text-[17px] md:text-xl font-medium my-4">
              <p>002</p> &nbsp;&nbsp; <p>Expert guidence</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-stone-400"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </section>
          <section className="flex items-center justify-between border-dashed border-b border-black">
            <div className=" flex items-start text-[17px] md:text-xl font-medium my-4">
              <p>003</p> &nbsp;&nbsp; <p>Smooth and stress-free process</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-stone-400"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </section>
          <section className="flex items-center justify-between ">
            <div className=" flex items-start text-[17px] md:text-xl font-medium my-4">
              <p>004</p> &nbsp;&nbsp; <p>Save time and stay on budget</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-stone-400"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurDifferrences;
