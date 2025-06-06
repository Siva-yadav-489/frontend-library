import Image from "next/image";
type BlogDetailsProps = {
  date: string;
  topic: string;
  authorImage: string;
  author: string;
  desc: string;
  order?: string;
  hr?: string;
  descStyle?: string;
};

const BlogDetails = ({
  date,
  topic,
  authorImage,
  author,
  desc,
  order,
  hr,
  descStyle,
}: BlogDetailsProps) => {
  return (
    <div className={`text-[#141414cc] ${order}`}>
      <p
        className={`text-lg max-lg:text-base font-medium my-2 max-lg:my-1.5 ${descStyle}`}
      >
        {desc}
      </p>
      <div className="flex flex-wrap items-center max-sm:space-y-1 space-x-4 mt-2 mb-3 max-lg:mb-2">
        <span className="bg-[#f7f2e9] font-bold text-[11px] max-lg:text-[10px] rounded-sm px-1 py-[5px]">
          {date}
        </span>{" "}
        <span className="bg-[#f7f2e9] font-bold text-[11px] max-lg:text-[10px] rounded-sm px-1 py-[5px]">
          {topic}
        </span>{" "}
        <p className="bg-[#f7f2e9] font-bold text-[11px] max-lg:text-[10px] rounded-sm p-[3px] pr-2 flex items-center">
          <Image
            src={authorImage}
            alt={author}
            width={20}
            height={20}
            className="rounded-sm mr-2"
          />{" "}
          {author}
        </p>
      </div>
      <hr className={`text-stone-200 mt-4 mb-7 ${hr}`} />
    </div>
  );
};

export default BlogDetails;
