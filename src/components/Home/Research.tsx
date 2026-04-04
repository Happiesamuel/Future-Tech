import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUpText from "@/lib/TextReveal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Research() {
  const first = [
    {
      title: "Quantity",
      content: "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Variety",
      content:
        "Articles cover fields like AI, robotics, biotechnology, and more.",
    },
    {
      title: "Frequency",
      content: "Fresh content added daily to keep you up to date.",
    },
    {
      title: "Authoritative",
      content:
        "Written by our team of tech experts and industry professionals.",
    },
  ];
  const second = [
    {
      title: "Depth",
      content: "500+ research articles for in-depth understanding.",
    },
    {
      title: "Graphics",
      content: "Visual aids and infographics to enhance comprehension.",
    },
    {
      title: "Trends",
      content: "Explore emerging trends in future technology research.",
    },
    {
      title: "Contributors",
      content: "Contributions from tech researchers and academics.",
    },
  ];
  const gridRefs = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const kiteRef = useRef<HTMLImageElement>(null);
  const kiteRef2 = useRef<HTMLImageElement>(null);

  // --- helper functions ---
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

  const animateCards = (ref: React.RefObject<HTMLDivElement | null>) => {
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

  // --- single useEffect ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      animateKite(kiteRef);
      animateKite(kiteRef2);
      animateCards(gridRef);
      animateCards(gridRefs);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-20">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <div className="flex-[0.55] justify-start w-full">
          <div className="space-y-4 mx-4 md:mx-0 pb-8 md:px-6 lg:px-12 xl:px-20 border-b md:border-b-0 border-zinc-600">
            <Image
              ref={kiteRef}
              width={40}
              height={40}
              alt="research"
              className="size-10"
              src="/research_1.svg"
            />
            <FadeUpText className="font-medium text-2xl text-white">
              Future Technology Blog
            </FadeUpText>
            <FadeUpText className="text-zinc-400 text-xs">
              Stay informed with our blog section dedicated to future
              technology.
            </FadeUpText>
          </div>
        </div>

        <div className="flex-1 lg:border-l  border-b lg:border-t-0 border- lg:pb-0 lg:border-b-0 border-zinc-600">
          <div
            ref={gridRefs}
            style={{ perspective: "1000px" }}
            className="grid grid-cols-1 sm:grid-cols-2 py-6 md:py-10 md:pl-4 lg:pl-12 xl:pl-20 place-items-start w-fit gap-4"
          >
            {first.map((fir) => (
              <Quantity
                key={fir.title}
                title={fir.title}
                content={fir.content}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col lg:flex-row justify-between lg:border-t  border-zinc-600">
        <div className="flex-[0.55] justify-start w-full">
          <div className="space-y-4 mx-4  lg:mx-0 py-10 md:px-6 lg:px-12 xl:px-20 ">
            <Image
              width={40}
              height={40}
              alt="research"
              ref={kiteRef2}
              className="size-10"
              src="/research_2.svg"
            />
            <FadeUpText className="font-medium text-2xl text-white">
              Research Insights Blogs
            </FadeUpText>
            <FadeUpText className="text-zinc-400 text-xs">
              Dive deep into future technology concepts with our research
              section.
            </FadeUpText>
          </div>
        </div>

        <div className="flex-1 lg:border-l  border-b lg:border-y-0 border-y lg:pb-0 lg:border-b-0 border-zinc-600">
          <div
            ref={gridRef}
            style={{ perspective: "1000px" }}
            className="grid grid-cols-1 sm:grid-cols-2 py-6 md:py-10 md:pl-4 lg:pl-12 xl:pl-20 place-items-start w-fit gap-4"
          >
            {second.map((fir) => (
              <Quantity
                key={fir.title}
                title={fir.title}
                content={fir.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Quantity({ title, content }: { title: string; content: string }) {
  return (
    // ← add quantity-card class here
    <div
      className="quantity-card rounded-[12px] space-y-3 border border-[#262626] p-6 w-full max-w-75 bg-[#ffd11a]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <h4 className="text-lg text-[#1a1a1a] font-medium">{title}</h4>
      <p className="text-sm text-zinc-800">{content}</p>
    </div>
  );
}
