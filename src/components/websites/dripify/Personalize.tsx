import Image from "next/image";
import Headings from "./Headings";
import Button from "./Button";
import messages from "/public/websites/dripify/images/personalize/personalize-messages.avif";
import ParagraphText from "./ParagraphText";

const Personalize = () => {
  return (
    <div className="max-sm:mx-2 max-xl:mx-6 max-w-[74rem] mx-auto my-10">
      <Headings text={["Hyper-personalize your outreach "]} />
      <ParagraphText
        text={[
          "Sending hundreds of generic LinkedIn messages and emails to your leads wont make a difference",
          "today. Due to the advanced personalization capabilities of Dripify, you can significantly improve quality ",
          "and convert more",
          "",
        ]}
        styling="mb-10"
      />
      <Image
        sizes="(max-width: 1160px) 100vw, 1160px"
        width="2320"
        height="992"
        alt="mesages"
        src={messages}
        className="max-md:max-w-11/12 mx-auto max-sm:mx-2"
      />
      <div className="flex max-md:flex-col max-md:items-start max-md:mx-6 justify-between mt-4 max-sm:mx-2">
        <div className="flex items-start justify-between py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7.84723 9.73428C7.95462 9.84154 7.9868 10.0029 7.92876 10.1432C7.87072 10.2834 7.7339 10.3749 7.58212 10.3749C7.43034 10.3749 7.29351 10.2834 7.23547 10.1432C7.17743 10.0029 7.20962 9.84154 7.31701 9.73428V9.73428C7.46348 9.58799 7.70076 9.58799 7.84723 9.73428"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12.2651 9.73428C12.3725 9.84154 12.4046 10.0029 12.3466 10.1432C12.2886 10.2834 12.1517 10.3749 12 10.3749C11.8482 10.3749 11.7114 10.2834 11.6533 10.1432C11.5953 10.0029 11.6275 9.84154 11.7349 9.73428V9.73428C11.8813 9.58799 12.1186 9.58799 12.2651 9.73428"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.9968 6.15975V13.8099C20.997 14.6526 20.6625 15.4609 20.0668 16.0569C19.4712 16.653 18.6631 16.988 17.8204 16.9883H12.9944L7.99234 20.9899V16.9883H6.16658C4.41179 16.9883 2.98926 15.5657 2.98926 13.8109V13.8109V6.15975C2.98926 4.40496 4.41179 2.98242 6.16658 2.98242H17.8194C19.5742 2.98242 20.9968 4.40496 20.9968 6.15975V6.15975Z"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.0021 13.0005H15.0012"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-base text-black font-medium ml-2 mr-3 max-lg:text-wrap">
            Use 20+ personalization <br className="max-lg:hidden" /> variables
            in your message
          </p>
        </div>
        <div className="flex items-start justify-between py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.95996 13.8101H12.65"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M10.31 8.37012L7.44995 15.0001"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M13.1601 15.0001L10.3101 8.37012"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15.95 8.37012V15"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-base text-black font-medium ml-2 mr-3 max-lg:text-wrap">
            Maximize your response rate <br className="max-lg:hidden" /> with
            AI-powered unique <br className="max-lg:hidden" /> personalization
            <span className="text-xs font-bold text-[#7760f9] bg-[#7760f91a] text-nowrap rounded-full py-2 px-3  ml-2">
              COMING SOON
            </span>
          </p>
        </div>
        <div className="flex items-start justify-between py-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="32"
            height="32"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 11.1821C20 15.7231 16.587 19.9691 12 21.0001C7.413 19.9691 4 15.7231 4 11.1821V7.61506C4 6.80306 4.491 6.07106 5.243 5.76406L10.243 3.71806C11.369 3.25706 12.631 3.25706 13.757 3.71806L18.757 5.76406C19.509 6.07206 20 6.80306 20 7.61506V11.1821V11.1821Z"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M15.25 10.125L11.5 13.875L9.25 11.625"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-base text-black font-medium ml-2 mr-3 max-lg:text-wrap">
            Get creative using rare <br className="max-lg:hidden" /> variables
            with Alternative <br className="max-lg:hidden" />
            Message backup
          </p>
        </div>
        <div className="flex items-start justify-between py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4.71899 11.396H11.095"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.91388 4L4.02588 13.014"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M11.7891 13.014L7.91406 4"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M20 7.56201V13"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M19.199 8.3491C20.267 9.4171 20.267 11.1481 19.199 12.2151C18.131 13.2831 16.4 13.2831 15.333 12.2151C14.265 11.1471 14.265 9.4161 15.333 8.3491C16.4 7.2811 18.132 7.2811 19.199 8.3491"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4 17H20"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16 21H4"
              stroke="#7760F9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-base text-black font-medium ml-2 mr-3 max-lg:text-wrap">
            Remove unnecessary text <br className="max-lg:hidden" /> and symbols
            from enrichment <br className="max-lg:hidden" /> data automatically
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          text={"Learn more"}
          colors={"text-black bg-white border border-stone-800 my-10"}
        />
      </div>
    </div>
  );
};

export default Personalize;
