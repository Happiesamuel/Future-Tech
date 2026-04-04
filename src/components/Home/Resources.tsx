import gsap from "gsap";
import { BsArrowUpRight } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FadeUpText from "@/lib/TextReveal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Resources() {
  return (
    <div className="pt-20">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <div className="flex-[0.55] justify-start w-full">
          <div className="space-y-4 mx-4 md:mx-0 pb-8 md:px-6 lg:px-12 xl:px-20 border-b md:border-b-0 border-zinc-600">
            <Image
              width={40}
              height={2}
              alt="research"
              className="size-10"
              src="/resource_3.svg"
            />
            <FadeUpText className="font-medium text-2xl text-white">
              Ebooks
            </FadeUpText>
            <FadeUpText className="text-zinc-400 text-xs">
              Explore our collection of ebooks covering a wide spectrum of
              future technology topics.
            </FadeUpText>

            <div className="rounded flex items-center cursor-pointers border border-[#262626] gap-2 px-4 w-fit py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
              <p className="text-xs font-normal"> Download Eboks Now</p>
              <BsArrowUpRight className="text-[#FFD11A] font-bold" />
            </div>
            <div className="rounded mt-6 flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 w-fit py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
              <div className="space-y-2">
                <p className="text-[10px] text-white/60 font-normal">
                  Downloaded by
                </p>
                <p className="text-sm font-medium text-white"> 10k+ Users</p>
              </div>
              <Image
                width={96}
                height={2}
                alt="research"
                className="w-24"
                src="/resource_1.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 lg:border-l  border-b lg:border-t-0 border- lg:pb-0 lg:border-b-0 border-zinc-600 px-4">
          <div className=" py-6 md:py-10   lg:pl-8 lg:pr-20   w-fit gap-4">
            <Quantity />
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col lg:flex-row justify-between lg:border-t  border-zinc-600">
        <div className="flex-[0.55] justify-start w-full">
          <div className="space-y-4 mx-4  lg:mx-0 py-10 md:px-6 lg:px-12 xl:px-20 ">
            <Image
              width={40}
              height={2}
              alt="research"
              className="size-10"
              src="/resource_4.svg"
            />
            <FadeUpText className="font-medium text-2xl text-white">
              Whitepapers
            </FadeUpText>
            <FadeUpText className="text-zinc-400 text-xs">
              Dive into comprehensive reports and analyses with our collection
              of whitepapers.
            </FadeUpText>
            <div className="rounded flex items-center cursor-pointers border border-[#262626] gap-2 px-4 w-fit py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
              <p className="text-xs font-normal"> Download Whitepapers Now</p>
              <BsArrowUpRight className="text-[#FFD11A] font-bold" />
            </div>
            <div className="rounded mt-6 flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 w-fit py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
              <div className="space-y-2">
                <p className="text-[10px] text-white/60 font-normal">
                  Downloaded by
                </p>
                <p className="text-sm font-medium text-white"> 10k+ Users</p>
              </div>
              <Image
                width={96}
                height={2}
                alt="research"
                className="w-24"
                src="/resource_2.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 lg:border-l border-b lg:border-y-0 border-y lg:pb-0 lg:border-b-0 border-zinc-600 px-4">
          <div className=" py-6 md:py-10   lg:pl-8 lg:pr-20   w-fit gap-4">
            <QuantityTwo />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuantityTwo() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        opacity: 0,
        scale: 0.9,
        filter: "blur(20px)",
        ease: "back.out(1.7)",
        duration: 1,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="space-y-3 ">
      <div className="flex gap-2 md:items-center items-start flex-col md:flex-row lg:flex-col lg:items-start xl:items-center xl:flex-row justify-between ">
        <FadeUpText className="font-medium text-white text-base flex-[0.3]">
          Topics Coverage
        </FadeUpText>
        <FadeUpText className="flex-1 font-normal text-sm text-justify text-zinc-300">
          Whitepapers cover quantum computing (20%), AI ethics (15%), space
          mining prospects (20%), AI in healthcare (15%), and renewable energy
          strategies (30%).
        </FadeUpText>
      </div>
      <img className="w-full" ref={imgRef} src="/resource_6.svg" />

      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:items-center lg:items-start xl:items-center gap-3 justify-between">
        <div className="rounded  md:flex-[0.2] w-full flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 md:w-fit lg:w-full xl:w-fit py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
          <div className="space-y-2">
            <p className="text-[10px] text-white/60 font-normal">
              Total Whitepapers
            </p>
            <p className="text-sm font-medium text-white">Over 50+ papers</p>
          </div>
        </div>
        <div className="rounded  flex-1 flex gap-3 items-center justify-between cursor-pointers border border-[#262626]  px-4 w-full md:w-fit lg:w-full xl:w-fit py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
          <div className="space-y-2">
            <p className="text-[10px] text-white/60 font-normal">
              Download Formats
            </p>
            <p className="text-sm font-medium text-white">
              PDF format for access.
            </p>
          </div>
          <div className="rounded   flex gap-2 items-center cursor-pointers border border-[#262626]  px-4 w-fit py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <p>Preview</p> <LuEye className="text-[#ffd11a]" />
          </div>
        </div>
      </div>
      <div className="rounded w-full  flex gap-3 items-center cursor-pointers border border-[#262626]  px-4  py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
        <div className="space-y-2">
          <p className="text-[10px] text-white/60 font-normal">
            Average Author Expertise
          </p>
          <p className="text-sm font-medium text-white">
            Whitepapers are authored by subject matter experts with an average
            of 20 years of experience.
          </p>
        </div>
      </div>
    </div>
  );
}
function Quantity() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        opacity: 0,
        // y: 80,
        scale: 0.9,
        filter: "blur(20px)", // ← add this
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="space-y-3">
      <div className="flex gap-2 md:items-center items-start flex-col md:flex-row lg:flex-col lg:items-start xl:items-center xl:flex-row  justify-between ">
        <FadeUpText className="font-medium text-white text-base flex-[0.3]">
          Variety of Topics
        </FadeUpText>
        <FadeUpText className="flex-1 font-normal text-sm text-justify text-zinc-300">
          Topics include AI in education (25%), renewable energy (20%),
          healthcare (15%), space exploration (25%), and biotechnology (15%).
        </FadeUpText>
      </div>

      <img className="w-full" ref={imgRef} src="/resource_5.svg" />

      <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:items-center lg:items-start xl:items-center gap-3 justify-between">
        <div className="rounded flex-[0.2] flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 md:w-fit lg:w-full xl:w-fit py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
          <div className="space-y-2">
            <p className="text-[10px] text-white/60 font-normal">
              Total Ebooks
            </p>
            <p className="text-sm font-medium text-white"> 100+ ebooks</p>
          </div>
        </div>
        <div className="rounded  flex-1 flex gap-3 items-center justify-between cursor-pointers border border-[#262626]  px-4 w-full md:w-fit lg:w-full xl:w-fit py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
          <div className="space-y-2">
            <p className="text-[10px] text-white/60 font-normal">
              Download Formats
            </p>
            <p className="text-sm font-medium text-white">
              PDF format for access.
            </p>
          </div>
          <div className="rounded   flex gap-2 items-center cursor-pointers border border-[#262626]  px-4 w-fit py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <p>Preview</p> <LuEye className="text-[#ffd11a]" />
          </div>
        </div>
      </div>
      <div className="rounded w-full  flex gap-3 items-center cursor-pointers border border-[#262626]  px-4  py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
        <div className="space-y-2">
          <p className="text-[10px] text-white/60 font-normal">
            Average Author Expertise
          </p>
          <p className="text-sm font-medium text-white">
            Ebooks are authored by renowned experts with an average of 15 years
            of experience
          </p>
        </div>
      </div>
    </div>
  );
}
