import FadeUpText, { TextReveal } from "@/lib/TextReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);
export default function NewArticle() {
  const [active, setAcive] = useState(false);
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
    <div className="flex flex-col md:flex-row items-center gap-6 border-y border-zinc-600 py-10 px-4 md:px-6 lg:px-12 xl:px-20">
      <div className="aspect-video flex-[0.6] w-full  relative">
        <img alt="img" className="w-full" src={"/headlines.svg"} ref={imgRef} />
      </div>
      <div className="flex-1 space-y-4">
        <TextReveal className="text-white font-medium text-lg">
          Global Climate Summit Addresses Urgent Climate Action
        </TextReveal>
        <FadeUpText className="text-sm font-normal text-zinc-400 max-w-full md:max-w-[90%] text-justify">
          World leaders gathered at the Global Climate Summit to discuss urgent
          climate action, emissions reductions, and renewable energy targets.
        </FadeUpText>
        <div className="flex items-start md:items-center gap-8">
          <div className="space-y-1.5">
            <p className="text-xs font-normal text-zinc-400">Category</p>
            <p className="text-xs font-normal text-white">Environment</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-normal text-zinc-400">
              Publication Date
            </p>
            <p className="text-xs font-normal text-white">October 10, 2023</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-normal text-zinc-400">Author</p>
            <p className="text-xs font-normal text-white">Jane Smith</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div
                onClick={() => setAcive(true)}
                className="flex items-center cursor-pointer gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5"
              >
                {active ? (
                  <FaHeart className="text-red-600" />
                ) : (
                  <FaRegHeart className="text-zinc-400" />
                )}
                <p className="text-xs font-normal text-zinc-400">14k</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5">
                <IoIosShareAlt className="text-zinc-400" />
                <p className="text-xs font-normal text-zinc-400">204</p>
              </div>
            </div>
          </div>

          <div className="font-normal text-xs cursor-pointer text-zinc-400 py-2 px-3 bg-[#141414] border border-[#262626] rounded-[8px]">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
}
