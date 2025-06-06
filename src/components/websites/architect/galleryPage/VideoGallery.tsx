import HeadingWithButton from "../HeadingWithButton";
import videoIcon from "/public/websites/architect/galleryPage/videoGrid/videoIcon.svg";

const VideoGallery = () => {
  const videolinks = [
    "https://www.youtube.com/embed/i6yPDUZr_Q0",
    "https://www.youtube.com/embed/OP_fVIUTr9Y",
    "https://www.youtube.com/embed/yAxIo84SE5w",
    "https://www.youtube.com/embed/qOWCV8Hcn68",
  ];
  return (
    <div className="bg-[#f7f2e9] pt-16 px-12 max-[1200px]:px-5">
      <HeadingWithButton
        svg={videoIcon}
        align="center"
        heading={[
          "Why imagine when you can watch? See our ",
          "creative masterpieces come to life in these ",
          "awesome videos. Press play and get inspired!",
        ]}
        btnText="VIDEO GALLERY"
        color="light"
      />

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-2.5 pb-11">
        {videolinks.map((link, index) => (
          <div key={index} className="w-full aspect-[1.7/1] rounded-sm">
            <iframe
              className="w-full h-full rounded-sm"
              src={link}
              title="Architectural animation for the residence in New Zealand | 3D Visualization for Lamont&amp;Co and JASMAX"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
