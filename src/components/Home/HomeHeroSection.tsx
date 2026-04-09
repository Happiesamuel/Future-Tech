import { BsArrowUpRight } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUpText from "@/lib/TextReveal";
import { Button } from "../ui/button";
import Image from "next/image";
import HeroUpdate from "./HeroUpdate";
gsap.registerPlugin(ScrollTrigger);
export default function HomeHeroSection() {
  const updates = [
    {
      svg: "/update-1.svg",
      title: "Latest News Updates",
      slug: "Stay Current",
      content: "Over 1,000 articles published monthly",
    },
    {
      svg: "/update-2.svg",
      title: "Expert Contributors",
      slug: "Trusted Insights",
      content: "50+ renowned AI experts on our team",
    },
    {
      svg: "/update-3.svg",
      title: "Global Readership",
      slug: "Worldwide Impact",
      content: "2 million monthly readers",
    },
  ];
  const countRef = useRef<HTMLSpanElement>(null);
  const countRef2 = useRef<HTMLSpanElement>(null);
  const countRef3 = useRef<HTMLSpanElement>(null);
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
            ref.current.textContent =
              Math.round(this.targets()[0].val) + suffix;
          }
        },
      },
    );
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      animateCountUp(countRef, 300);
      animateCountUp(countRef2, 12);
      animateCountUp(countRef3, 10);
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="flex  flex-col lg:flex-row ">
        <div className="flex-1 mt-30 lg:mt-40">
          <div className="space-y-4 px-4 pl-2 md:pl-6 lg:pl-12 xl:pl-20 ">
            <p className="font-medium text-zinc-500 text-base md:text-lg">
              Your Journey to Tomorrow Begins Here
            </p>

            <FadeUpText className="font-medium lg:leading-15 text-3xl md:text-[48px] from-white via-gray-50 to-white/60 bg-linear-to-b bg-clip-text text-transparent">
              Explore the Frontiers of Artificial Intelligence
            </FadeUpText>
            <FadeUpText className="text-zinc-400 md:max-w-[90%] text-sm text-justify ">
              Welcome to the epicenter of AI innovation. FutureTech AI News is
              your passport to a world where machines think, learn, and reshape
              the future. Join us on this visionary expedition into the heart of
              AI.
            </FadeUpText>
          </div>

          <div className="flex  md:items-center mt-8 md:mt-16 pl-4 md:pl-6 lg:pl-12 xl:pl-20 justify-evenly border-t border-zinc-700">
            <div className="flex flex-col flex-1 py-4 md:py-7 gap-1 md:gap-2">
              <h2 className="text-xl md:text-3xl font-medium text-white">
                <span ref={countRef}>0</span>
                <span className="text-[#FFD11A]">+</span>{" "}
              </h2>
              <p className="text-xs md:text-sm text-zinc-400">
                Resources available
              </p>
            </div>

            <div className="flex border-zinc-700 border-l flex-col flex-1 px-4 py-4 md:py-7 gap-1 md:gap-2">
              <h2 className="text-xl md:text-3xl font-medium text-white">
                <span ref={countRef2}>0</span>
                <span>k</span>
                <span className="text-[#FFD11A]">+</span>
              </h2>
              <p className="text-xs md:text-sm text-zinc-400">
                Total Downloads
              </p>
            </div>

            <div className="flex border-zinc-700 border-l flex-col flex-1 px-4 py-4 md:py-7 gap-1 md:gap-2">
              <h2 className="text-xl md:text-3xl font-medium text-white">
                <span ref={countRef3}>0</span>
                <span>k</span>
                <span className="text-[#FFD11A]">+</span>
              </h2>
              <p className="text-xs md:text-sm text-zinc-400">Active Users</p>
            </div>
          </div>
        </div>

        <div className="flex-[0.65]    lg:mt-10 relative border-l border-zinc-700">
          <Image
            className=" opacity-40 lg:top-8 z-1 absolute"
            height={2}
            width={350}
            alt="sun"
            src="/sun.svg"
          />

          <div className="space-y-3 lg:absolute bottom-0 lg:mt-0 mt-32 relative z-10 px-5 md:px-10 pb-12">
            <Image
              width={150}
              height={2}
              className="w-37.5"
              src="/sub.svg"
              alt="sub"
            />
            <div className="space-y-1">
              <FadeUpText className="font-medium text-base text-white">
                Exploring 1000+ resources
              </FadeUpText>
              <FadeUpText className="text-zinc-400 text-sm">
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </FadeUpText>
            </div>
            <Button
              size={"lg"}
              className="text-[#141414] cursor-pointer bg-[#ffd11a]  text-sm"
            >
              Explore Resources{" "}
              <BsArrowUpRight className="text-[#141414]  font-bold" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col border-y border-zinc-600 px-4 md:px-5 lg:px-12 xl:px-20 lg:items-center justify-between">
        {updates.map((update, i) => (
          <HeroUpdate
            index={i}
            key={i}
            svg={update.svg}
            title={update.title}
            slug={update.slug}
            content={update.content}
          />
        ))}
      </div>
    </>
  );
}
