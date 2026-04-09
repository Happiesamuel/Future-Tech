import FadeUpText, { TextReveal } from "@/lib/TextReveal";
import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const animateCountUp = (
  ref: React.RefObject<HTMLElement | null>,
  target: number,
  suffix = "",
) => {
  if (!ref.current) return;
  gsap.to(
    { val: 0 },
    {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: function () {
        if (ref.current) {
          ref.current.textContent = Math.round(this.targets()[0].val) + suffix;
        }
      },
    },
  );
};
export default function ResourcesHeader() {
  const countRef = useRef<HTMLSpanElement>(null);
  const countRef2 = useRef<HTMLSpanElement>(null);
  const countRef3 = useRef<HTMLSpanElement>(null);
  const countRef4 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateCountUp(countRef, 300);
      animateCountUp(countRef2, 12);
      animateCountUp(countRef3, 10);
      animateCountUp(countRef4, 100);
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="  ">
      <div className="space-y-2 px-4 md:px-6 lg:px-12 xl:px-20">
        <TextReveal className="font-medium text-2xl md:text-4xl text-white">
          Unlock a World of Knowledge
        </TextReveal>
        <FadeUpText className="font-normal text-justify max-w-full md:max-w-[95%] lg:max-w-[85%] text-sm text-zinc-300">
          Dive deep into the AI universe with our collection of insightful
          podcasts. Explore the latest trends, breakthroughs, and discussions on
          artificial intelligence. Whether you&apos;re an enthusiast or a
          professional, our AI podcasts offer a gateway to knowledge and
          innovation.
        </FadeUpText>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4  md:items-center mt-8 md:mt-14  justify-evenly border-y border-zinc-700">
        <div className="flex flex-col items-center flex-1 py-4 md:py-7 gap-1 md:gap-2">
          <h2 className="text-xl md:text-3xl font-medium text-white">
            <span ref={countRef}>0</span>
            <span className="text-[#FFD11A]">+</span>{" "}
          </h2>
          <p className="text-xs md:text-sm text-zinc-400">
            Resources available
          </p>
        </div>

        <div className="flex border-zinc-700 border-l flex-col items-center flex-1 px-4 py-4 md:py-7 gap-1 md:gap-2">
          <h2 className="text-xl md:text-3xl font-medium text-white">
            <span ref={countRef2}>0</span>
            <span>k</span>
            <span className="text-[#FFD11A]">+</span>
          </h2>
          <p className="text-xs md:text-sm text-zinc-400">Total Downloads</p>
        </div>

        <div className="flex border-zinc-700 border-l border-t lg:border-t-0 flex-col items-center flex-1 px-4 py-4 md:py-7 gap-1 md:gap-2">
          <h2 className="text-xl md:text-3xl font-medium text-white">
            <span ref={countRef3}>0</span>
            <span>k</span>
            <span className="text-[#FFD11A]">+</span>
          </h2>
          <p className="text-xs md:text-sm text-zinc-400">Active Users</p>
        </div>
        <div className="flex border-zinc-700 border-l border-t lg:border-t-0 flex-col items-center flex-1 px-4 py-4 md:py-7 gap-1 md:gap-2">
          <h2 className="text-xl md:text-3xl font-medium text-white">
            <span ref={countRef4}>0</span>
            <span className="text-[#FFD11A]">+</span>
          </h2>
          <p className="text-xs text-center md:text-sm text-zinc-400">
            Countries Accesses Our Content{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
