import gsap from "gsap";
import { BsArrowUpRight } from "react-icons/bs";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FadeUpText from "@/lib/TextReveal";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

export default function PodcastResources() {
  return (
    <div className="">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <div className="flex-[0.7] pt-6 justify-start w-full">
          <div className="space-y-4 mx-4 md:mx-0 pb-8 md:px-6 lg:px-12 xl:px-20 border-b md:border-b-0 border-zinc-600">
            <Image
              width={40}
              height={2}
              alt="research"
              className="size-10"
              src="/podcast_resource_1.svg"
            />
            <div className="flex items-center justify-between">
              <FadeUpText className="font-medium text-2xl text-white">
                AI Revolution
              </FadeUpText>
              <div className="flex items-center gap-1 p-1 bg-[#141414] border rounded-full border-[#262626] ">
                {Array.from({ length: 5 }, (v, i) => (
                  <GoStarFill key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>
            </div>

            <div className="rounded mt-6 flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 w-fit py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
              <div className="space-y-1">
                <p className="text-[10px] text-white/60 font-normal">Host</p>
                <p className="text-sm font-medium text-white">
                  Dr. Sarah Mitchell
                </p>
              </div>
              <div className="">
                <p
                  className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
                >
                  Listen Podcast
                  <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
                </p>
              </div>
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
        <div className="flex-[0.7] pt-6 justify-start w-full">
          <div className="space-y-4 mx-4 md:mx-0 pb-8 md:px-6 lg:px-12 xl:px-20 border-b md:border-b-0 border-zinc-600">
            <Image
              width={40}
              height={2}
              alt="research"
              className="size-10"
              src="/podcast_resource_2.svg"
            />
            <div className="flex items-center justify-between">
              <FadeUpText className="font-medium text-2xl text-white">
                AI Conversations
              </FadeUpText>
              <div className="flex items-center gap-1 p-1 bg-[#141414] border rounded-full border-[#262626] ">
                {Array.from({ length: 5 }, (v, i) => (
                  <GoStarFill key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>
            </div>

            <div className="rounded mt-6 flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 w-fit py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
              <div className="space-y-1">
                <p className="text-[10px] text-white/60 font-normal">Host</p>
                <p className="text-sm font-medium text-white">Mark Anderson</p>
              </div>
              <div className="">
                <p
                  className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
                >
                  Listen Podcast
                  <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
                </p>
              </div>
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
    <div className="space-y-3">
      <img className="w-full" ref={imgRef} src="/podcast_resource_4.svg" />

      <div className="flex flex-col  gap-3 ">
        <FadeUpText className=" font-medium text-sm text-white">
          Engage in thought-provoking conversations with leading experts.
        </FadeUpText>
        <FadeUpText className=" font-normal text-sm text-justify text-zinc-400">
          Mark discusses the future of AI, the impact on society, and how
          it&apos;s shaping industries worldwide. Engage in thought-provoking
          conversations with leading experts.
        </FadeUpText>
        <div className="flex-col md:flex-row flex items-center justify-between  gap-5">
          <div className="rounded   flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 w-full py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">
                Total Episodes
              </p>
              <p className="text-sm font-medium text-white"> 40</p>
            </div>
          </div>
          <div className="rounded   flex gap-3 items-center justify-between cursor-pointers border border-[#262626]  px-4 w-full py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">
                Average Episode Length
              </p>
              <p className="text-sm font-medium text-white">40 min</p>
            </div>
          </div>
          <div className="rounded w-full  flex gap-3 items-center cursor-pointers border border-[#262626]  px-4  py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">
                Release Frequency
              </p>
              <p className="text-sm font-medium text-white">Monthly</p>
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
      <img className="w-full" ref={imgRef} src="/podcast_resource_3.svg" />

      <div className="flex flex-col  gap-3 ">
        <FadeUpText className=" font-medium text-sm text-white">
          Delves into the transformative impact of AI
        </FadeUpText>
        <FadeUpText className=" font-normal text-sm text-justify text-zinc-400">
          Join Dr. Sarah Mitchell as she delves into the transformative impact
          of AI on industries, featuring expert interviews and real-world case
          studies. Explore the possibilities of AI in healthcare, finance, and
          more.
        </FadeUpText>
        <div className="flex-col md:flex-row flex items-center justify-between  gap-5">
          <div className="rounded   flex gap-3 items-center cursor-pointers border border-[#262626]  px-4 w-full py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">
                Total Episodes
              </p>
              <p className="text-sm font-medium text-white"> 50</p>
            </div>
          </div>
          <div className="rounded   flex gap-3 items-center justify-between cursor-pointers border border-[#262626]  px-4 w-full py-2 bg-[#1a1a1a]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">
                Average Episode Length
              </p>
              <p className="text-sm font-medium text-white">30 min</p>
            </div>
          </div>
          <div className="rounded w-full  flex gap-3 items-center cursor-pointers border border-[#262626]  px-4  py-2 bg-[#141414]  text-white/60 text-xs font-medium ">
            <div className="space-y-2">
              <p className="text-[10px] text-white/60 font-normal">
                Release Frequency
              </p>
              <p className="text-sm font-medium text-white">Weekly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
