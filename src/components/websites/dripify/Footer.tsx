import Image from "next/image";
import logo from "/public/websites/dripify/images/footer/logo.svg";

const Footer = () => {
  return (
    <div className="pb-8">
      <div className=" mx-6 max-lg:mx-2 py-10 px-8 rounded-3xl max-sm:px-4 bg-[#374151]">
        <div className="flex max-md:flex-col max-md:flex-wrap justify-between max-md:pt-0 pt-10">
          {/* col-1 */}
          <div className="max-md:self-center">
            <a href="##">
              <Image
                width="120"
                height="32"
                alt="Dripify"
                src={logo}
                className="brightness-0 invert-[1] mb-4"
              />
            </a>
            <p className="text-sm mb-3 text-[#9ca3af] font-semibold max-md:hidden">
              A smarter way to crush sales
            </p>
          </div>
          {/* col-2 */}
          <div className="flex flex-col ">
            <div className="mb-6 max-md:mb-2 max-md:flex max-md:items-center max-md:justify-between">
              <p className="text-sm text-[#9ca3af] font-bold mb-5 max-md:mb-0">
                PRODUCT
              </p>
              <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
                Features
              </p>
              <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
                Video tutorials
              </p>
              <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
                Pricing
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 text-gray-500 md:hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="md:hidden border-1 border-gray-600 mb-2" />
            <div className="max-md:flex max-md:items-center max-md:justify-between">
              <p className="text-sm text-[#9ca3af] font-bold mb-5 max-md:mb-2">
                PARTNERS
              </p>
              <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
                Affiliate program
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 text-gray-500 md:hidden"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="md:hidden border-1 border-gray-600 mb-2" />
          </div>
          {/* col-3 */}
          <div className="mb-5 max-md:mb-2 max-md:flex max-md:items-center max-md:justify-between">
            <p className="text-sm text-[#9ca3af] font-bold mb-5 max-md:mb-0">
              SOFTWARE
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Drip Campaigns
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              LinkedIn analytics
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Team management
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Hyper-personalized outreach
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Linkedin messenger tool
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Extra profile security
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-gray-500 md:hidden"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="md:hidden border-1 border-gray-600 mb-2" />
          {/* col-4 */}
          <div className="mb-5 max-md:mb-2 max-md:flex max-md:items-center max-md:justify-between">
            <p className="text-sm text-[#9ca3af] font-bold mb-5 max-md:mb-0">
              RESOURCES
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Blog
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              FAQ
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Profile makeover
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Talk to sales
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Help center
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Contact us
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-gray-500 md:hidden"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="md:hidden border-1 border-gray-600 mb-2" />
          {/* col-5 */}
          <div className="mb-5 max-md:mb-2 max-md:flex max-md:items-center max-md:justify-between">
            <p className="text-sm text-[#9ca3af] font-bold mb-5 max-md:mb-0">
              COMPARE
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Dripify VS Dux Soup
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Dripify VS Expandi
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Dripify VS Meet Alfred
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Dripify VS Phantombuster
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Dripify VS Linked Helper
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Dripify VS Waalaxy
            </p>
            <p className="text-white font-semibold text-sm mb-3 max-md:hidden">
              Dripify VS Zopto
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-gray-500 md:hidden"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <hr className="border-1 border-gray-600" />
        <div className="flex max-md:flex-col justify-between items-center mt-10">
          <p className="text-xs text-[#9ca3af] font-bold max-md:mb-2">
            &copy; 2025 ALL RIGHTS RESERVED. DRIPIFY - SALES AUTOMATION
            SOFTWARE. PRIVACY AND TERMS.
          </p>
          <div className="flex justify-between space-x-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="24"
              height="24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8.11914 11.1001V16.5001"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M11.7188 16.5001V13.3501C11.7188 12.1071 12.7257 11.1001 13.9688 11.1001V11.1001C15.2118 11.1001 16.2188 12.1071 16.2188 13.3501V16.5001"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8.11814 7.83799C7.99414 7.83799 7.89314 7.93899 7.89414 8.06299C7.89414 8.18699 7.99514 8.28799 8.11914 8.28799C8.24314 8.28799 8.34414 8.18699 8.34414 8.06299C8.34414 7.93799 8.24314 7.83799 8.11814 7.83799"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.002 15L15.198 12L10.002 9V15Z"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 3H16.504C18.987 3 21 5.013 21 7.496V16.505C21 18.987 18.987 21 16.504 21H7.496C5.013 21 3 18.987 3 16.504V7.5C3 5.015 5.015 3 7.5 3V3Z"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.684 11.314H14.315"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14.316 7.45508H13.506C12.249 7.45508 11.229 8.47508 11.229 9.72408V10.5421V16.5451"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
