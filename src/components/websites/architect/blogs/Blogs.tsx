import HeadingWithButton from "../HeadingWithButton";
import blogIcon from "/public/websites/architect/Blogs/blogIcon.svg";
import blogImage from "/public/websites/architect/Blogs/blogImage.avif";
import ryan from "/public/websites/architect/Blogs/ryan.avif";
import james from "/public/websites/architect/Blogs/james.avif";
import Image from "next/image";
import Button from "../Button";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const blogs = [
    {
      date: "DECEMBER 5,2024",
      topic: "DESIGN & INSPIRATION",
      authorImage: james,
      author: "JAMES MILLER",
      desc: "Turning Spaces into Stories: How We Create Meaningful Architecture",
    },
    {
      date: "SEPTEMBER 24,2024",
      topic: "INDUSTRY INSIGHTS",
      authorImage: james,
      author: "JAMES MILLER",
      desc: "Retail Revolution: How Architecture Is Transforming Shopping Experiences",
    },
    {
      date: "DECEMBER 5,2024",
      topic: "TIPS",
      authorImage: ryan,
      author: "RYAN MILFORD",
      desc: "Tiny but Mighty: 7 Genius Design Hacks for Compact Living",
    },
    {
      date: "DECEMBER 5,2024",
      topic: "TIPS",
      authorImage: ryan,
      author: "RYAN MILFORD",
      desc: "From Chaos to Cozy: Tips to Turn Your Cramped Space into a Stylish Sanctuary",
    },
  ];
  return (
    <div className="px-12 max-[1200px]:px-5 py-16 bg-[#fffbf5]">
      <HeadingWithButton
        svg={blogIcon}
        heading={[
          "No fluff, no jargon—just simple, practical advice",
          "for making your space look and feel amazing. .",
        ]}
        align="center"
        color="light-dark"
        btnText="BLOGS"
      />
      <div className="flex max-lg:flex-col space-x-10">
        <section className=" text-[#141414cc] max-lg:w-full max-xl:w-[90%] xl:w-1/2 ">
          <Image
            src={blogImage}
            alt="blogimage"
            width={792}
            height={493}
            className="rounded-lg max-lg:w-full object-cover max-lg:max-h-[20rem] max-xl:h-[85%] xl:h-[28rem]"
          />
          <BlogDetails
            authorImage={ryan.src}
            author="RYAN MILFORD"
            topic="TIPS"
            date="DECEMBER 5,2024"
            desc="How to turn “cozy” into “wow”: 5 Pro Tips for Making the Most of
            Small Spaces"
            order="flex flex-col-reverse"
            hr="hidden"
            descStyle="mt-0"
          />
        </section>
        <section className="text-[#141414cc]">
          <p className="text-2xl max-lg:text-xl text-[#141414] font-semibold max-lg:mt-5 mb-5">
            Latest Blogs
          </p>
          {blogs.map((blog, index) => (
            <BlogDetails
              key={index}
              date={blog.date}
              topic={blog.topic}
              authorImage={blog.authorImage.src}
              author={blog.author}
              desc={blog.desc}
            />
          ))}
          <div className="flex max-lg:justify-center items-end">
            <Button text="All Blogs" buttonBg="black" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
