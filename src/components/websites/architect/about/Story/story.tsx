import { Cards } from "./Cards";
import { Section } from "../Section";



export const Story = () => {
  return (
    <Section>
      <div id="story" className="flex flex-col gap-7 max-w-[1000px] text-[#FFFBF5] text-2xl max-lg:text-[20px] font-medium">
        <p>
          It all started with a sketch on a coffee-stained napkin. Our founder, Oliver Vance, had a vision—a dream of building not just structures, but experiences. Armed with boundless creativity, a small but mighty team, and a shared love for great design, Architectured was born in 2005.
        </p>
        <p>
        Fast forward to today, and we’re proud to be a thriving team, working on projects of all shapes and sizes, still fueled by the same passion and curiosity that got us started. While our tools and techniques have evolved, our commitment to quality, sustainability, and building meaningful connections remains stronger than ever.
        </p>
      </div>


      <div className="pt-10 flex gap-4 overflow-x-auto overflow-y-hidden rounded-md ">
        <Cards year="2005" title="Where it all began" description="Armed with a vision to create inspiring spaces, our journey started in a small studio with big dreams. Our first project? Designing a cozy family home that's still standing strong today." />
        <Cards year="2005" title="Where it all began" description="Armed with a vision to create inspiring spaces, our journey started in a small studio with big dreams. Our first project? Designing a cozy family home that's still standing strong today." />
        <Cards year="2005" title="Where it all began" description="Armed with a vision to create inspiring spaces, our journey started in a small studio with big dreams. Our first project? Designing a cozy family home that's still standing strong today." />
        <Cards year="2005" title="Where it all began" description="Armed with a vision to create inspiring spaces, our journey started in a small studio with big dreams. Our first project? Designing a cozy family home that's still standing strong today." />
        <Cards year="2005" title="Where it all began" description="Armed with a vision to create inspiring spaces, our journey started in a small studio with big dreams. Our first project? Designing a cozy family home that's still standing strong today." />
      </div>

        <div>
            <video src="/websites/architect/about/story.mp4" autoPlay muted loop className="w-full h-full object-cover rounded-md"></video>
        </div>
    </Section>
  );
};