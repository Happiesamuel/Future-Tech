import FadeUpText, { TextReveal } from "@/lib/TextReveal";
import { BsArrowUpRight } from "react-icons/bs";

export function ShortSectionOne() {
  return (
    <div
      className="space-y-3 py-10 md:py-16 lg:py-20 md:px-6 px-4 lg:px-12 xl:px-20    w-full relative"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
        backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
        backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
      }}
    >
      <FadeUpText className="rounded px-2 w-fit py-1 bg-[#333333] text-white text-xs font-medium ">
        Unlock the Power of
      </FadeUpText>
      <TextReveal className="text-white  font-medium text-xl md:text-2xl lg:text-4xl">
        FutureTech Features
      </TextReveal>
    </div>
  );
}
export function ShortSectionTwo() {
  return (
    <div
      className=" flex flex-col sm:flex-row  sm:items-center justify-between gap-6 py-10 md:py-16 lg:py-20 md:px-6 px-4 lg:px-12 xl:px-20    w-full relative"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
        backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
        backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
      }}
    >
      <div className="space-y-3">
        <FadeUpText className="rounded px-2 w-fit py-1 bg-[#333333] text-white text-xs font-medium ">
          A Knowledge Treasure Trove
        </FadeUpText>
        <TextReveal className="text-white  font-medium text-xl md:text-2xl lg:text-4xl">
          Explore FutureTech&apos;s In-Depth Blog Posts
        </TextReveal>
      </div>
      <div className="rounded flex items-center cursor-pointers border border-[#262626] gap-2 px-4 w-fit py-2 bg-[#141414]  text-white text-xs font-medium ">
        <p className="text-xs font-normal"> View All Blogs</p>
        <BsArrowUpRight className="text-[#FFD11A] font-bold" />
      </div>
    </div>
  );
}
export function ShortSectionFour() {
  return (
    <div
      className=" flex flex-col sm:flex-row  sm:items-center justify-between gap-6 py-10 md:py-16 lg:py-20 md:px-6 px-4 lg:px-12 xl:px-20    w-full relative"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
        backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
        backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
      }}
    >
      <div className="space-y-3">
        <FadeUpText className="rounded px-2 w-fit py-1 bg-[#333333] text-white text-xs font-medium ">
          Your Gateway to In-Depth Information
        </FadeUpText>
        <TextReveal className="text-white lg:max-w-[85%]  font-medium text-xl md:text-2xl lg:text-4xl">
          Unlock Valuable Knowledge with FutureTech&apos;s Resources
        </TextReveal>
      </div>
      <div className="rounded flex items-center cursor-pointers border border-[#262626] gap-2 px-4 w-fit py-2 bg-[#141414]  text-white text-xs font-medium ">
        <p className="text-xs font-normal"> View All Resources</p>
        <BsArrowUpRight className="text-[#FFD11A] font-bold" />
      </div>
    </div>
  );
}
export function ShortSectionThree() {
  return (
    <div
      className=" flex flex-col sm:flex-row  sm:items-center justify-between gap-6 py-10 md:py-16 lg:py-20 md:px-6 px-4 lg:px-12 xl:px-20    w-full relative"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
        backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
        backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
      }}
    >
      <div className="space-y-3">
        <FadeUpText className="rounded px-2 w-fit py-1 bg-[#333333] text-white text-xs font-medium ">
          What Our Readers Say
        </FadeUpText>
        <TextReveal className="text-white  font-medium text-xl md:text-2xl lg:text-4xl">
          Real Words from Real Readers
        </TextReveal>
      </div>
      <div className="rounded flex items-center cursor-pointers border border-[#262626] gap-2 px-4 w-fit py-2 bg-[#141414]  text-white text-xs font-medium ">
        <p className="text-xs font-normal"> View All Testimonials</p>
        <BsArrowUpRight className="text-[#FFD11A] font-bold" />
      </div>
    </div>
  );
}

export function NewsShortSectionOne() {
  return (
    <div
      className=" flex flex-col sm:flex-row  sm:items-center justify-between gap-6 py-10 md:py-16 lg:py-20 md:px-6 px-4 lg:px-12 xl:px-20    w-full relative"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
        backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
        backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
      }}
    >
      <div className="space-y-3">
        <FadeUpText className="rounded px-2 w-fit py-1 bg-[#333333] text-white text-xs font-medium ">
          Welcome to Our News Hub
        </FadeUpText>
        <TextReveal className="text-white  font-medium text-xl md:text-2xl lg:text-4xl">
          Discover the World of Headlines
        </TextReveal>
      </div>
      <div className="rounded flex items-center cursor-pointers border border-[#262626] gap-2 px-4 w-fit py-2 bg-[#141414]  text-white text-xs font-medium ">
        <p className="text-xs font-normal"> View All News</p>
        <BsArrowUpRight className="text-[#FFD11A] font-bold" />
      </div>
    </div>
  );
}
export function NewsShortSectionTwo() {
  return (
    <div
      className=" flex flex-col sm:flex-row  sm:items-center justify-between gap-6 py-10 md:py-16 lg:py-20 md:px-6 px-4 lg:px-12 xl:px-20    w-full relative"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
        backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
        backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
      }}
    >
      <div className="space-y-3">
        <FadeUpText className="rounded px-2 w-fit py-1 bg-[#333333] text-white text-xs font-medium ">
          Featured Videos
        </FadeUpText>
        <TextReveal className="text-white  font-medium text-xl md:text-2xl lg:text-4xl">
          Visual Insights for the Modern Viewer
        </TextReveal>
      </div>
      <div className="rounded flex items-center cursor-pointers border border-[#262626] gap-2 px-4 w-fit py-2 bg-[#141414]  text-white text-xs font-medium ">
        <p className="text-xs font-normal"> View All</p>
        <BsArrowUpRight className="text-[#FFD11A] font-bold" />
      </div>
    </div>
  );
}
export function PodShortSectionOne() {
  return (
    <div
      className="space-y-3 py-10 md:py-16 lg:py-20 md:px-6 px-4 lg:px-12 xl:px-20    w-full relative"
      style={{
        backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
        backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
        backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
      }}
    >
      <FadeUpText className="rounded px-2 w-fit py-1 bg-[#333333] text-white text-xs font-medium ">
        Stay Informed with Fresh Content
      </FadeUpText>
      <TextReveal className="text-white  font-medium text-xl md:text-2xl lg:text-4xl">
        Latest Podcast Episodes
      </TextReveal>
    </div>
  );
}
