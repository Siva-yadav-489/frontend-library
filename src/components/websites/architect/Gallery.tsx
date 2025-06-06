import Image from "next/image";
import HeadingWithButton from "./HeadingWithButton";
import galleryIcon from "/public/websites/architect/gallery/galleryIcon.svg";
import image1 from "/public/websites/architect/gallery/image1.avif";
import image2 from "/public/websites/architect/gallery/image2.avif";
import image3 from "/public/websites/architect/gallery/image3.avif";
import image4 from "/public/websites/architect/gallery/image4.avif";
import Button from "./Button";

const Gallery = () => {
  return (
    <div className="bg-[#f7f2e9] flex flex-col-reverse lg:flex-row justify-start gap-10 p-6">
      <div className="grid grid-cols-2  gap-4 lg:max-w-[50%] py-8 -ml-20">
        <Image
          src={image1}
          alt="image1"
          className="rounded-md object-cover h-40 sm:h-60 lg:h-80 w-full place-self-end"
        />
        <Image
          src={image2}
          alt="image2"
          className="rounded-md object-cover h-48 sm:h-72 lg:h-96 w-full"
        />
        <Image
          src={image3}
          alt="image3"
          className="rounded-md object-cover h-48 sm:h-72 lg:h-96 w-full -ml-4"
        />
        <Image
          src={image4}
          alt="image4"
          className="rounded-md object-cover h-36 sm:h-60 lg:h-72 w-3/4  -ml-4"
        />
      </div>
      <div className="my-auto flex-1 xl:mr-20">
        <HeadingWithButton
          svg={galleryIcon}
          heading={[
            "Don’t just take our word for it—see how we",
            "turn ideas into stunning spaces. Our gallery is full of inspiration for your next big project!",
          ]}
          align="start"
          btnText="GALLERY"
          color="light"
        />
        <div className=" flex max-lg:justify-center">
          <Button text="Browse Gallery" buttonBg="black" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
