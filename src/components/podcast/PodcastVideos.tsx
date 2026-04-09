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

export default function PodcastVideos() {
  const videos = [
    {
      img: "/pod_vid_1.svg",
      title: "AI in Healthcare",
      text: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    },
    {
      img: "/pod_vid_2.svg",
      title: "AI Ethics",
      text: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    },
    {
      img: "/pod_vid_3.svg",
      title: "Machine Learning Explained",
      text: "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
    },
    {
      img: "/pod_vid_4.svg",
      title: "AI and the Future of Work",
      text: "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
    },
    {
      img: "/pod_vid_5.svg",
      title: "AI in Education",
      text: "Explore the role of AI in education as Emily Turner discusses how AI is transforming...",
    },
    {
      img: "/pod_vid_6.svg",
      title: "AI in Entertainment",
      text: "David Smith as they explore the influence of AI in the entertainment industry.",
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
          className={`space-y-2.5 py-10 px-4 border-b  border-zinc-600 last:border-b-0 md:nth-last-[2]:border-b-0 lg:nth-last-[3]:border-b-0 md:px-6 lg:px-12 xl:px-20 ${i < 3 && "border-b border-zinc-600 "} ${i % 2 === 0 && " md:border-r border-zinc-500"} ${i !== 2 && i !== 5 && " lg:border-r border-zinc-500"}`}
        >
          <img src={video.img} alt="video-img" className="w-full  imgs" />
          <FadeUpText className="text-white text-base font-medium text-justify">
            {video.title}
          </FadeUpText>
          <FadeUpText className="text-zinc-300 font-normal text-justify text-xs">
            {video.text}
          </FadeUpText>
          <div className="">
            <p
              className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
            >
              Listen Podcast
              <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
