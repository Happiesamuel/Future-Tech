import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUpText from "@/lib/TextReveal";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
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

export default function NewVideos() {
  const videos = [
    {
      img: "/video_1.svg",
      title:
        "Mars Exploration: Unveiling Alien LandscapesMars Exploration: Unveiling Alien Landscapes",
      text: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
    },
    {
      img: "/video_2.svg",
      title: "Blockchain Explained: A Revolution in Finance",
      text: "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    },
    {
      img: "/video_3.svg",
      title: "Breaking the Silence: Mental Health Awareness in the Workplace",
      text: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.",
    },
    {
      img: "/video_4.svg",
      title: "Revolutionizing Investment Strategies",
      text: "An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.",
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
      className=" justify-between grid grid-cols-1  md:grid-cols-2"
    >
      {videos.map((video, i) => (
        <div
          key={video.text}
          className={`space-y-2.5 py-10 px-4 border-b border-zinc-600 last:border-b-0 md:nth-last-[2]:border-b-0 md:px-6 lg:px-12 xl:px-20 ${i < 2 && "border-b border-zinc-600 "} ${i % 2 === 0 && " md:border-r border-zinc-500"}`}
        >
          <img src={video.img} alt="video-img" className="w-full imgs" />
          <FadeUpText className="text-white text-base font-medium text-justify">
            {video.title}
          </FadeUpText>
          <FadeUpText className="text-zinc-300 font-normal text-justify text-xs">
            {video.text}
          </FadeUpText>
        </div>
      ))}
    </div>
  );
}
