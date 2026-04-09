import gsap from "gsap";
import { BsArrowUpRight } from "react-icons/bs";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FadeUpText from "@/lib/TextReveal";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

export default function ResourceResources() {
  return (
    <div className="">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <div className="flex-[0.7] justify-start w-full">
          <div className="space-y-4 mx-4 md:mx-0 pb-8 md:px-6 lg:px-12 xl:px-20 border-b md:border-b-0 border-zinc-600">
            <Image
              width={40}
              height={2}
              alt="research"
              className="size-10"
              src="/res_1.svg"
            />
            <div className="flex items-center justify-between">
              <FadeUpText className="font-medium text-2xl text-white">
                Quantum Computing Whitepaper
              </FadeUpText>
            </div>

            <p className="mt-6  text-sm  text-zinc-400">
              Provides technical specifications and requirements for
              implementing quantum computing systems.
            </p>
          </div>
        </div>

        <div className="flex-1 lg:border-l  border-b lg:border-t-0 border- lg:pb-0 lg:border-b-0 border-zinc-600 px-4">
          <div className=" py-6 md:py-10   lg:pl-8 lg:pr-20   w-fit gap-4">
            <Quantity />
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col lg:flex-row justify-between lg:border-t  border-zinc-600">
        <div className="flex-[0.7] justify-start w-full">
          <div className="space-y-4 mx-4 md:mx-0 pb-8 md:px-6 lg:px-12 xl:px-20 border-b md:border-b-0 border-zinc-600">
            <Image
              width={40}
              height={2}
              alt="research"
              className="size-10"
              src="/res_2.svg"
            />
            <div className="flex items-center justify-between">
              <FadeUpText className="font-medium text-2xl text-white">
                Space Exploration Whitepaper
              </FadeUpText>
            </div>
            <p className="mt-6  text-sm  text-zinc-400">
              Provides technical specifications and requirements for
              implementing quantum computing systems.
            </p>
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
    <div className="space-y-3">
      <img className="w-full" ref={imgRef} src="/res_4.svg" />

      <div className="flex flex-col  gap-3 ">
        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2 items-center justify-between">
          <div className="flex-[0.8]">
            <FadeUpText className=" font-medium text-sm text-white">
              Space Exploration Whitepaper
            </FadeUpText>
            <FadeUpText className=" font-normal text-sm text-justify text-zinc-400">
              An in-depth whitepaper covering the latest advancements in space
              exploration, including Mars missions and asteroid mining.
            </FadeUpText>
          </div>
          <div className="w-full md:w-fit lg:w-full xl:w-fit">
            <p
              className={`text-zinc-400 w-full lg:w-full xl:w-fit justify-center bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 md:w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
            >
              Download PDF Now
              <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-full  gap-5">
          <div className="rounded   flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 w-full py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">
                Publication Date
              </p>
              <p className="text-sm font-medium text-white">September 2023</p>
            </div>
          </div>
          <div className="rounded   flex gap-3 items-center justify-between cursor-pointers border border-[#262626]  px-4 w-full py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">Category</p>
              <p className="text-sm font-medium text-white">
                Space Exploration
              </p>
            </div>
          </div>
          <div className="rounded w-full lg:last:col-span-2 last:col-span-2 md:last:col-span-1 xl:last:col-span-1  flex gap-3 items-center cursor-pointers border border-[#262626]  px-4  py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">Author</p>
              <p className="text-sm font-medium text-white">
                FutureTech Space Division
              </p>
            </div>
          </div>
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
      <img className="w-full" ref={imgRef} src="/res_3.svg" />

      <div className="flex flex-col  gap-3 ">
        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2 items-center justify-between">
          <div className="flex-[0.8]">
            <FadeUpText className=" font-medium text-sm text-white">
              Quantum Computing Whitepaper
            </FadeUpText>
            <FadeUpText className=" font-normal text-sm text-justify text-zinc-400">
              An in-depth whitepaper exploring the principles, applications, and
              potential impact of quantum computing.
            </FadeUpText>
          </div>
          <div className="w-full md:w-fit lg:w-full xl:w-fit">
            <p
              className={`text-zinc-400 w-full lg:w-full xl:w-fit justify-center bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 md:w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
            >
              Download PDF Now
              <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 w-full  gap-5">
          <div className="rounded   flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 w-full py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">
                Publication Date
              </p>
              <p className="text-sm font-medium text-white">July 2023</p>
            </div>
          </div>
          <div className="rounded   flex gap-3 items-center justify-between cursor-pointers border border-[#262626]  px-4 w-full py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">Category</p>
              <p className="text-sm font-medium text-white">
                Quantum Computing
              </p>
            </div>
          </div>
          <div className="rounded w-full lg:last:col-span-2 last:col-span-2 md:last:col-span-1 xl:last:col-span-1  flex gap-3 items-center cursor-pointers border border-[#262626]  px-4  py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">Author</p>
              <p className="text-sm font-medium text-white">Dr. Quantum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
