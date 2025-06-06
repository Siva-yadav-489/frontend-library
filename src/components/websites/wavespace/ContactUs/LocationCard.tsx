import Image from "next/image";
import emailIcon from "/public/websites/wavespace/contactUs/emailIcon.webp";
import whatsAppIcon from "/public/websites/wavespace/contactUs/whatsAppIcon.webp";

type LocationCardProps = {
  location: string;
  email: string;
  contactNumber: string;
  address: string[];
};

const LocationCard = ({
  location,
  email,
  contactNumber,
  address,
}: LocationCardProps) => {
  return (
    <div className="flex flex-col space-y-11 max-md:space-y-4 max-lg:basis-1/2">
      <h3 className="text-xl max-md:text-lg font-semibold tracking-wider">
        {location}
      </h3>
      <div>
        <p className="flex items-center">
          <Image
            src={emailIcon}
            alt="emailIcon"
            className="w-4 mr-1.5 max-xs:hidden"
          />
          <span className="text-sm max-md:text-[11px] font-bold">{email}</span>
        </p>
        <p className="flex items-center max-xs:my-3">
          <Image src={whatsAppIcon} alt="whatsAppIcon" className="w-4 mr-1.5" />
          <span className="text-sm max-md:text-xs font-medium underline">
            {contactNumber}
          </span>
        </p>
      </div>
      <p className="text-[15px] max-md:text-xs leading-4 font-normal">
        {address[0]} <br /> {address[1]} <br />
        {address[2]}
      </p>
    </div>
  );
};

export default LocationCard;
