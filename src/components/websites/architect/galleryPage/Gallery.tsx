import HeadingWithButton from "../HeadingWithButton";
import ImageGrid from "./ImageGrid";
import VideoGallery from "./VideoGallery";
import galleryIcon from "/public/websites/architect/galleryPage/galleryIcon.svg";

const Gallery = () => {
  return (
    <div className="mt-14 pt-14 bg-[#fffbf5]">
      <div className="max-lg:hidden">
        <HeadingWithButton
          svg={galleryIcon}
          align="center"
          heading={[
            "See the bold ideas, innovative ",
            "concepts, and completed projects ",
            "that keep us inspired every day.",
          ]}
          btnText="OUR GALLERY"
          color="light-dark"
          extraStyle="xl:text-[36px]"
        />
      </div>
      <div className="lg:hidden px-5">
        <HeadingWithButton
          svg={galleryIcon}
          align="center"
          heading={[
            "See the bold ideas, innovative concepts, and ",
            "completed projects that keep us inspired every day.",
            "",
          ]}
          btnText="OUR GALLERY"
          color="light-dark"
          extraStyle="sm:px-14 max-md:text-[23px] max-md:leading-6"
        />
      </div>
      <div className="px-12 max-[1200px]:px-5"><ImageGrid /></div>
      <VideoGallery />
    </div>
  );
};

export default Gallery;
