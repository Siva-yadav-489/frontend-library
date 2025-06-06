import Image from "next/image";
import Button from "./Button";
import abTestImg from "/public/websites/dripify/images/testMessage/ab-test.avif";
import ParagraphText from "./ParagraphText";

const TestMessage = () => {
  return (
    <div className="flex max-md:flex-col justify-between items-start max-sm:mx-2 max-xl:mx-6 max-w-[74rem] mx-auto py-5 my-20">
      <Image
        sizes="(max-width: 992px) 100vw, 992px"
        width="992"
        height="992"
        alt="ab-test"
        src={abTestImg}
        className="w-[45%] max-md:w-11/12 mx-auto max-sm:mr-2 max-sm:w-12/12"
      />
      <div className="flex flex-col items-start justify-between max-lg:pl-2 max-md:mx-6 max-sm:mx-2">
        <span className=" text-xs font-bold text-[#7760f9] bg-[#7760f91a] rounded-full py-2 px-3  ml-0 -mt-8 max-md:mt-5">
          COMING SOON
        </span>
        <p className="text-5xl text-black font-semibold max-lg:text-3xl my-10 text-start">
          A/B test your <br className="max-lg:hidden" /> message{" "}
        </p>
        {/* <p className="font-medium text-base mb-10 text-start text-stone-500">
          Test different versions of your emails, LinkedIn messages and
          <br className="max-lg:hidden" />
          connection requests to identify the winner variant that produces the
          <br className="max-lg:hidden" />
          best values for the performance metrics
        </p> */}
        <ParagraphText
          text={[
            "Test different versions of your emails, LinkedIn messages and",
            "connection requests to identify the winner variant that produces the",
            "best values for the performance metrics",
            "",
          ]}
          styling="mb-10 mt-0 text-start"
        />
        <div className="grid grid-cols-2 gap-8 gap-y-12 mb-14">
          <div className="flex max-md:items-center items-start justify-between max-md:justify-start max-md:col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M13 17H18C19.657 17 21 15.657 21 14V6C21 4.343 19.657 3 18 3H6C4.343 3 3 4.343 3 6V14C3 15.657 4.343 17 6 17H8V21L13 17"
                stroke="#7760F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.4361 6.8394H10.4161V9.2274C10.5841 9.0034 10.8321 8.8154 11.1601 8.6634C11.4961 8.5114 11.8521 8.4354 12.2281 8.4354C12.9001 8.4354 13.4441 8.5794 13.8601 8.8674C14.2841 9.1554 14.5841 9.5194 14.7601 9.9594C14.9441 10.3994 15.0361 10.8634 15.0361 11.3514C15.0361 11.9434 14.9201 12.4714 14.6881 12.9354C14.4641 13.3914 14.1241 13.7514 13.6681 14.0154C13.2201 14.2794 12.6681 14.4114 12.0121 14.4114C11.1401 14.4114 10.4401 14.1954 9.91211 13.7634C9.38411 13.3314 9.06811 12.7594 8.96411 12.0474H10.2961C10.3841 12.4234 10.5801 12.7234 10.8841 12.9474C11.1881 13.1634 11.5681 13.2714 12.0241 13.2714C12.5921 13.2714 13.0161 13.0994 13.2961 12.7554C13.5841 12.4114 13.7281 11.9554 13.7281 11.3874C13.7281 10.8114 13.5841 10.3714 13.2961 10.0674C13.0081 9.7554 12.5841 9.5994 12.0241 9.5994C11.6321 9.5994 11.3001 9.6994 11.0281 9.8994C10.7641 10.0914 10.5721 10.3554 10.4521 10.6914H9.15611V5.6394H14.4361V6.8394Z"
                fill="#7760F9"
              ></path>
            </svg>
            <p className="text-sm font-medium ml-4 text-black">
              Test up to 4 versions of each <br className="max-lg:hidden" />{" "}
              message
            </p>
          </div>
          <div className="flex max-md:items-center items-start justify-between max-md:justify-start max-md:col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6.99793 20.0035C5.61665 20.0035 4.49689 18.8837 4.49689 17.5025V14.5012C4.49689 13.8379 4.23339 13.2017 3.76435 12.7327C3.29532 12.2637 2.65917 12.0002 1.99585 12.0002C2.65917 12.0002 3.29532 11.7367 3.76435 11.2676C4.23339 10.7986 4.49689 10.1624 4.49689 9.49912V6.49787C4.49689 5.11658 5.61665 3.99683 6.99793 3.99683"
                stroke="#7760F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.9147 9.08398L9.08594 14.9161"
                stroke="#7760F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.08398 9.08594L14.9161 14.9147"
                stroke="#7760F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M17.0022 3.99683C18.3835 3.99683 19.5032 5.11658 19.5032 6.49787V9.49912C19.5032 10.8804 20.623 12.0002 22.0043 12.0002C20.623 12.0002 19.5032 13.1199 19.5032 14.5012V17.5025C19.5032 18.8837 18.3835 20.0035 17.0022 20.0035"
                stroke="#7760F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-sm font-medium ml-2 max-md:ml-4 text-black">
              Advance your variants with <br className="max-lg:hidden" />
              different variables
            </p>
          </div>
          <div className="flex max-md:items-center items-start justify-between max-md:justify-start max-md:col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8.99916 21.523L8.99927 21.523L8.99878 21.5099L8.8112 16.492L8.81059 16.4758L8.80929 16.4596C8.79939 16.337 8.82806 16.2144 8.89128 16.1089C8.95451 16.0034 9.04912 15.9203 9.16189 15.8713C9.27467 15.8222 9.39996 15.8096 9.52025 15.8352C9.64053 15.8609 9.7498 15.9235 9.83276 16.0143L9.844 16.0266L9.85577 16.0383L15.0077 21.1969L15.0195 21.2088L15.0318 21.22C15.122 21.3027 15.1843 21.4114 15.2101 21.531C15.2358 21.6507 15.2237 21.7753 15.1754 21.8878C15.1271 22.0002 15.045 22.0949 14.9406 22.1586C14.8361 22.2224 14.7144 22.252 14.5923 22.2435L14.5768 22.2424L14.5613 22.242L9.59032 22.1013L9.59032 22.1012L9.58021 22.1011C9.42731 22.0988 9.28128 22.0373 9.17288 21.9294C9.06448 21.8216 9.0022 21.6759 8.99916 21.523Z"
                fill="white"
                stroke="#7760F9"
                strokeWidth="1.5"
              ></path>
              <path
                d="M2.25258 14.1601L2.25876 14.1564L2.26486 14.1526L6.51234 11.4728L6.52725 11.4634L6.54169 11.4533C6.64289 11.3826 6.76371 11.3454 6.88714 11.347C7.01058 11.3486 7.1304 11.3888 7.22974 11.4621C7.32908 11.5354 7.40292 11.638 7.44087 11.7555L8.15455 11.5249L7.44087 11.7555C7.47883 11.8729 7.47897 11.9993 7.44129 12.1169L7.43573 12.1342L7.43102 12.1518L5.54177 19.2064L5.53769 19.2216L5.53426 19.237C5.5076 19.3564 5.44449 19.4645 5.35366 19.5465C5.26283 19.6284 5.14877 19.6801 5.02728 19.6943C4.90578 19.7086 4.78286 19.6847 4.67553 19.626C4.56819 19.5673 4.48176 19.4767 4.4282 19.3668L4.42125 19.3525L4.4137 19.3385L2.04878 14.9637L2.04886 14.9637L2.04316 14.9536C1.96826 14.82 1.94823 14.6625 1.98731 14.5145C2.02639 14.3664 2.12151 14.2393 2.25258 14.1601Z"
                fill="white"
                stroke="#7760F9"
                strokeWidth="1.5"
              ></path>
              <path
                d="M5.2557 4.63592L5.25566 4.636L5.26582 4.64137L9.70088 6.98619L9.71563 6.99399L9.73072 7.00113C9.84183 7.05369 9.93375 7.13964 9.99364 7.24699C10.0535 7.35433 10.0784 7.4777 10.0647 7.59986C10.0511 7.72202 9.99962 7.83686 9.91753 7.92835L10.4757 8.42924L9.91753 7.92835C9.83543 8.01983 9.72682 8.08339 9.60684 8.11014L9.59118 8.11363L9.57569 8.11778L2.53452 10.007L2.52278 10.0102L2.51115 10.0137C2.3955 10.0488 2.27187 10.0475 2.15697 10.01C2.04207 9.97257 1.94145 9.9007 1.86873 9.80417C1.79602 9.70764 1.7547 9.5911 1.75038 9.47032C1.74606 9.34955 1.77893 9.23035 1.84457 9.12887L1.84955 9.12117L1.85434 9.11335L4.46044 4.85918L4.46049 4.85921L4.46524 4.85123C4.54345 4.71995 4.66955 4.62413 4.817 4.58397C4.96444 4.54381 5.12172 4.56243 5.2557 4.63592Z"
                fill="white"
                stroke="#7760F9"
                strokeWidth="1.5"
              ></path>
              <path
                d="M14.9964 2.47256L14.9963 2.47257L14.9968 2.48558L15.1843 7.5035L15.185 7.51968L15.1863 7.53583C15.1962 7.65842 15.1675 7.78104 15.1043 7.88653C15.041 7.99203 14.9464 8.07512 14.8336 8.1242C14.7209 8.17327 14.5956 8.18587 14.4753 8.16023C14.355 8.13459 14.2457 8.072 14.1628 7.9812L14.1515 7.9689L14.1398 7.95712L8.98787 2.79851L8.97592 2.78655L8.96345 2.77513C8.87293 2.69232 8.81048 2.58335 8.7848 2.46339C8.75912 2.34343 8.77148 2.21844 8.82015 2.10583C8.86883 1.99322 8.95141 1.89859 9.05639 1.83511C9.16137 1.77163 9.28353 1.74246 9.40587 1.75166L9.42331 1.75297L9.44078 1.75347L14.385 1.89416L14.3957 1.89447L14.4065 1.89446C14.5609 1.89443 14.7092 1.95496 14.8195 2.06305C14.9298 2.17114 14.9933 2.31817 14.9964 2.47256Z"
                fill="white"
                stroke="#7760F9"
                strokeWidth="1.5"
              ></path>
              <path
                d="M21.7578 9.82994L21.7473 9.83608L21.7371 9.84256L17.4896 12.5224L17.4896 12.5223L17.4839 12.526C17.3826 12.5912 17.2638 12.6238 17.1435 12.6195C17.0231 12.6152 16.907 12.5741 16.8107 12.5019C16.7143 12.4296 16.6424 12.3296 16.6046 12.2153L15.8926 12.4509L16.6046 12.2153C16.5667 12.101 16.5648 11.9778 16.599 11.8624L16.602 11.8523L16.6047 11.8422L18.4805 4.79432L18.4845 4.77965L18.4878 4.76483C18.5144 4.64544 18.5775 4.53729 18.6684 4.45535C18.7592 4.37342 18.8732 4.32174 18.9947 4.30749C19.1162 4.29323 19.2392 4.3171 19.3465 4.37579C19.4538 4.43447 19.5403 4.52508 19.5938 4.63505L19.6009 4.64954L19.6085 4.66372L21.9735 9.03178L21.9734 9.03179L21.9761 9.03652C22.0502 9.17114 22.0689 9.32939 22.0281 9.47757C21.9873 9.62576 21.8904 9.75218 21.7578 9.82994Z"
                fill="white"
                stroke="#7760F9"
                strokeWidth="1.5"
              ></path>
              <path
                d="M18.7408 19.3567L18.7408 19.3567L18.7357 19.354L14.3006 17.0092L14.2858 17.0014L14.2708 16.9942C14.1596 16.9417 14.0677 16.8557 14.0078 16.7484C13.948 16.641 13.9231 16.5177 13.9368 16.3955C13.9504 16.2734 14.0019 16.1585 14.084 16.067L13.5257 15.5661L14.084 16.067C14.166 15.9755 14.2747 15.912 14.3946 15.8852L14.4102 15.8818L14.4256 15.8776L21.4735 13.9884L21.483 13.9858L21.4924 13.983C21.6078 13.9488 21.731 13.9508 21.8453 13.9886C21.9596 14.0264 22.0596 14.0984 22.1319 14.1947C22.2041 14.291 22.2452 14.4072 22.2495 14.5275C22.2538 14.6479 22.2212 14.7666 22.156 14.8679L22.1519 14.8742L22.148 14.8807L19.5419 19.1148L19.5364 19.1236L19.5312 19.1326C19.4545 19.2654 19.329 19.3631 19.1814 19.4049C19.0339 19.4467 18.8758 19.4295 18.7408 19.3567Z"
                fill="white"
                stroke="#7760F9"
                strokeWidth="1.5"
              ></path>
            </svg>
            <p className="text-sm font-medium ml-4 text-black">
              Select your best variant or let <br className="max-lg:hidden" />
              Dripify optimize delivery
            </p>
          </div>
          <div className="flex max-md:items-center items-start justify-between max-md:justify-start max-md:col-span-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 15.889L10.071 10.818C10.462 10.427 11.095 10.427 11.485 10.818L13.626 12.959C14.017 13.35 14.65 13.35 15.04 12.959L21 7"
                stroke="#7760F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.333 7H21V9.667"
                stroke="#7760F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M21 20.9289H1.92505V3.22095"
                stroke="#7760F9"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-sm font-medium ml-4 text-black">
              Generate up to 40% higher <br className="max-lg:hidden" />
              ROI due to split testing
            </p>
          </div>
        </div>
        <Button
          text={"Notify me"}
          colors={"text-black bg-white border border-stone-800"}
        />
      </div>
    </div>
  );
};

export default TestMessage;
