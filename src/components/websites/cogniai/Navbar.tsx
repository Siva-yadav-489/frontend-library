import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <p className="font-regular text-black text-4xl max-sm:text-3xl tracking-tight">
        Cogni<span className="font-medium ">AI</span>
      </p>
      <div className="flex items-center bg-stone-100 pr-6 text-stone-700 font-medium space-x-15 text-lg  rounded-full max-[1050px]:hidden ">
        <button className="text-lg text-white px-9 bg-[#f46800] rounded-full py-4 font-regular">
          Home
        </button>
        <button>Work</button>
        <button>Expertise</button>
        <button>Pricing</button>
        <button>Testimonial</button>
      </div>
      <Button text="Contact Us" />
    </div>
  );
};

export default Navbar;
