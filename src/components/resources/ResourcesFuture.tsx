import gsap from "gsap";
import FadeUpText from "@/lib/TextReveal";
import { useEffect, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
const animateCards = (ref: React.RefObject<HTMLImageElement | null>) => {
  if (!ref.current) return;
  const cards = ref.current.querySelectorAll(".imgs");
  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      // y: 80,
      scale: 0.9,
      filter: "blur(20px)",
      duration: 1,
      ease: "back.out(1.7)",
      delay: i * 0.15,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
};

export default function ResourceFuture() {
  const videos = [
    {
      img: "/future_1.svg",
      title: "FutureTech Trends 2024",
      text: "An ebook that predicts upcoming technology trends for the next year, including AI developments.",
    },
    {
      img: "/future_2.svg",
      title: "Space Exploration Ebook",
      text: "An ebook that predicts upcoming technology trends for the next year, including AI developments.",
    },
    {
      img: "/future_3.svg",
      title: "Quantum Computing Whitepaper",
      text: "An in-depth whitepaper exploring the principles, applications.",
    },
  ];
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateCards(imgRef);
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={imgRef}
      className=" justify-between grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
    >
      {videos.map((video, i) => (
        <div
          key={video.text}
          className={`space-y-2.5 py-10 px-4 border-y  border-zinc-600   md:px-6 lg:px-12 xl:px-20 ${i < 3 && "border-b border-zinc-600 "} ${i % 2 === 0 && " md:border-r border-zinc-500"} ${i !== 2 && i !== 5 && " lg:border-r border-zinc-500"}`}
        >
          <img src={video.img} alt="video-img" className="w-full  imgs" />
          <FadeUpText className="text-white text-base font-medium text-justify">
            {video.title}
          </FadeUpText>
          <FadeUpText className="text-zinc-300 font-normal text-justify text-xs">
            {video.text}
          </FadeUpText>
          <div className="flex items-center gap-6 justify-between">
            <p
              className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border  gap-1 w-full text-center border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
            >
              View Details
            </p>
            <p
              className={`text-zinc-400  bg-[#1A1A1A] cursor-pointer text-xs font-normal border  gap-1 w-full text-center border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
            >
              Download PDF Now
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
