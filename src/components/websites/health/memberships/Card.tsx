import React from "react";
import GlowButton from "../GlowButton";

type CardProps = {
  heading: string;
  cost: string;
  listItems: string[];
  btnStyle?: string;
  divStyle?: string;
};

const Card = ({ heading, cost, listItems, btnStyle, divStyle }: CardProps) => {
  return (
    <div
      className={`bg-white text-black py-8 px-8 rounded-2xl flex-1/3 ${divStyle}`}
    >
      <div
        className={`${
          divStyle?.includes("max-lg:flex") ? "w-full flex-1/2" : ""
        }`}
      >
        <p className="text-[11px] text-[#4b4d4a] font-medium tracking-tight mb-3">
          {heading}
        </p>
        <p className="font-sans font-semibold text-3xl ">
          {cost}
          <span className="text-xs text-[#4b4d4a] font-normal">per test</span>
        </p>
        <GlowButton
          text="Buy now"
          adjustStyle={`${btnStyle} border drop-shadow-[#000]/40 drop-shadow-lg/80`}
        />
      </div>
      <ul
        className={`${
          divStyle?.includes("max-lg:flex")
            ? "w-1/2 justify-self-start"
            : "mt-10 py-10 border-t border-accent"
        }`}
      >
        {listItems.map((item, index) => (
          <li
            key={index}
            className="font-sans flex text-sm text-[#4b4d4a] mb-3 items-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 mr-2 flex-shrink-0 mt-1"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
