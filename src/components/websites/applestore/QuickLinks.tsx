const QuickLinks = () => {
  return (
    <div className="pb-10">
      <p className="mx-auto max-lg:mx-10 max-sm:mx-5 lg:max-w-5/6 text-3xl text-black font-semibold mb-5">
        Quick Links
      </p>
      <div className="flex max-w-screen pr-5 lg:pl-28 xl:pl-36 max-sm:px-5 max-lg:px-10 max-md:overflow-x-scroll no-scrollbar">
        <button className="border border-black rounded-full py-2 px-4 mr-3 text-nowrap font-light text-sm text-black flex items-center">
          Find a Store{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 ms-1"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <button className="border border-black rounded-full py-2 px-4 mr-3 text-nowrap font-light text-sm text-black flex items-center">
          Order Status{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 ms-1"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <button className="border border-black rounded-full py-2 px-4 mr-3 text-nowrap font-light text-sm text-black flex items-center">
          Shopping Help{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 ms-1"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <button className="border border-black rounded-full py-2 px-4 mr-3 text-nowrap font-light text-sm text-black flex items-center">
          Your Saves{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 ms-1"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuickLinks;
