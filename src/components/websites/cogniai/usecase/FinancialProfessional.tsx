"use client";
import Image from "next/image";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import turkeyFlag from "/public/websites/cogniai/images/usecase/FinancialProffesional/turkey-circular.png";
import usaFlag from "/public/websites/cogniai/images/usecase/FinancialProffesional/usa-circular.png";
import UsecaseHeading from "./UsecaseHeading";
import UsecasePara from "./UsecasePara";

const FinancialProfessional = () => {
  const amountCards = [
    { image: turkeyFlag, name: "Turkey" },
    { image: usaFlag, name: "United States" },
  ];
  return (
    <div className="col-span-3 bg-[#f7f7f7] max-sm:p-2 p-8 w-full h-full max-lg:col-span-6 rounded-3xl">
      <UsecaseHeading text="For Financial Proffesionals" />

      <UsecasePara
        text={[
          "Identify trends & opportunities in real-time to make data-driven",
          "desicions and stay ahead of competition.",
          "",
        ]}
      />
      <div className="bg-white rounded-3xl max-sm:p-3 p-6 mt-10 grid grid-cols-2 items-center">
        <p className="text-2xl text-black text-nowrap font-medium pt-4 ">
          Schedule Transfer
        </p>
        <button className="py-1 px-2 mt-4 max-sm:col-span-2 max-sm:place-self-start text-sm text-black text-nowrap font-light border place-self-end border-stone-400 rounded-full">
          6 months
        </button>
        {/* amount cards */}
        <div className="flex max-sm:flex-col col-span-2 py-5 mb-5">
          {amountCards.map((card, index) => {
            return (
              <div
                key={index}
                className="flex-1 mr-2 max-sm:m-1 border border-stone-200 rounded-2xl "
              >
                <div className="flex justify-between rounded-t-2xl items-center px-2 py-1 bg-[#f8f8f8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    className="bg-white p-2 rounded-full"
                  >
                    <path
                      fill="#1565C0"
                      d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                    ></path>
                    <path
                      fill="#FFC107"
                      d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                    ></path>
                  </svg>
                  <p className="text-sm text-black font-regular">Peoni Gibs</p>
                  <p className="text-xs text-black font-light">
                    <Image
                      width="48"
                      height="48"
                      src={card.image}
                      alt="turkey-circular"
                      className="inline bg-white p-2 rounded-full"
                    />
                    {card.name}
                  </p>
                </div>
                {/* $2500 */}
                <div className="flex justify-between items-center pt-8 px-2 pb-3">
                  <p className="text-3xl text-black font-semibold leading-[1.5rem]">
                    $2500 <br />
                    <span className="text-xs font-regular text-stone-400 leading-tight">
                      Thu, 27 Feb 2025
                    </span>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-black border border-stone-200 rounded-full p-2 box-content"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
        {/* row-3 */}
        <p className="text-lg text-stone-400 font-regular">
          Your Saving <br />{" "}
          <span className="text-2xl font-semibold text-black">$321,523.05</span>
        </p>
        <div className="flex space-x-2 justify-end items-center max-sm:col-span-2 max-sm:place-self-start max-sm:mt-2">
          {/* 1 */}
          <CircularProgressbarWithChildren
            className="size-12"
            value={30}
            styles={buildStyles({
              pathColor: "#1d79f3",
              trailColor: "#f3f3f3",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-black "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </CircularProgressbarWithChildren>
          {/* 2 */}
          <CircularProgressbarWithChildren
            className="size-12"
            value={70}
            styles={buildStyles({
              pathColor: "#1d79f3",
              trailColor: "#f3f3f3",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </CircularProgressbarWithChildren>
          {/* 3 */}
          <CircularProgressbarWithChildren
            className="size-12"
            value={80}
            styles={buildStyles({
              pathColor: "#1d79f3",
              trailColor: "#f3f3f3",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default FinancialProfessional;
