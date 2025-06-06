import HoverImageCard from "./HoverImageCard";
import ImageCard from "./ImageCard";
import project1 from "/public/websites/architect/galleryPage/imageGrid/project1image.webp";
import p1image1 from "/public/websites/architect/galleryPage/imageGrid/hoverImageCard/Image1.webp";
import p1image2 from "/public/websites/architect/galleryPage/imageGrid/hoverImageCard/Image2.avif";
import p1image3 from "/public/websites/architect/galleryPage/imageGrid/hoverImageCard/Image3.avif";
import p1image4 from "/public/websites/architect/galleryPage/imageGrid/hoverImageCard/Image4.avif";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2.5 mb-24">
      <HoverImageCard
        image1={p1image1.src}
        image2={p1image2.src}
        image3={p1image3.src}
        image4={p1image4.src}
      />
      {[...Array(7)].map((_, index) => (
        <ImageCard key={index} image={project1.src} />
      ))}
    </div>
  );
};

export default ImageGrid;
