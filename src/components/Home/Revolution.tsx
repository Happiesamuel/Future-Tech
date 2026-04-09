"use client";
import { BsArrowUpRight } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUpText, { TextReveal } from "@/lib/TextReveal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const arr = [
  {
    title: "Resource Access",
    text: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
  },
  {
    title: "Community Forum",
    text: "Join our active community forum to discuss industry trends and collaborate with peers.",
  },
  {
    title: "Tech Events",
    text: "Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.",
  },
];

// --- helper functions (outside component to avoid re-creation) ---
const animateKite = (ref: React.RefObject<HTMLImageElement | null>) => {
  if (!ref.current) return;
  gsap.to(ref.current, {
    rotation: 360,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 1.2,
  });
};

const animateScaleIn = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (!ref.current) return;
  const cards = ref.current.querySelectorAll(".quantity-card"); // ← queries children
  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.7,
      filter: "blur(8px)",
      duration: 0.7,
      delay: i * 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
};

export default function Revolution() {
  const kiteRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateKite(kiteRef);
      animateScaleIn(cardsRef);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="py-10 md:py-16 lg:py-20 md:px-6 px-4 lg:px-12 xl:px-20 w-full relative "
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
      <div className="flex gap-6 items-center">
        <Image
          width={64}
          height={64}
          ref={kiteRef}
          className="size-16"
          alt="logo"
          src="/logo.svg"
        />
        <div className="space-y-3">
          <FadeUpText className="rounded px-2 w-fit py-1 bg-[#333333] text-white text-xs font-medium">
            Learn, Connect, and Innovate
          </FadeUpText>
          <TextReveal className="text-white font-medium text-xl md:text-2xl lg:text-4xl">
            Be Part of the Future Tech Revolution
          </TextReveal>
          <FadeUpText className="text-xs text-justify font-normal text-zinc-400">
            Immerse yourself in the world of future technology. Explore our
            comprehensive resources, connect with fellow tech enthusiasts, and
            drive innovation in the industry. Join a dynamic community of
            forward-thinkers.
          </FadeUpText>
        </div>
      </div>

      {/* ref on wrapper, NO quantity-card here */}
      <div
        ref={cardsRef}
        className="border mt-8 mx-auto w-fit place-items-center gap-4 border-[#262626] bg-[#141414] rounded-[10px] p-2 grid grid-cols-1 md:grid-cols-3"
      >
        {arr.map((ar) => (
          <div
            key={ar.title}
            className="quantity-card p-4 border h-full border-[#262626] max-w-xs md:max-w-77.5 bg-[#262626] rounded-[10px]" // ← quantity-card on each child
          >
            <div className="flex items-center justify-between">
              <h6 className="font-medium text-white text-sm">{ar.title}</h6>
              <div className="bg-[#ffd11a] rounded-full flex items-center justify-center size-6">
                <BsArrowUpRight className="text-[#141414] font-bold" />
              </div>
            </div>
            <p className="text-xs mt-3 text-justify font-normal text-zinc-400">
              {ar.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
