import { useEffect, useRef, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeUpText from "@/lib/TextReveal";

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

export default function NewsAticle() {
  const articles = [
    {
      img: "/article_1.svg",
      title: "A Decisive Victory for Progressive Policies",
      text: "Politics",
      likes: "22k",
      share: "60",
    },
    {
      img: "/article_2.svg",
      title: "Tech Giants Unveil Cutting-Edge AI Innovations",
      text: "Technology",
      likes: "6k",
      share: "92",
    },
    {
      img: "/article_3.svg",
      title: "COVID-19 Variants",
      text: "Health",
      likes: "10k",
      share: "124",
    },
  ];
  const [id, setId] = useState<string[]>([]);

  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateCards(imgRef);
    });

    return () => ctx.revert();
  }, []);

  function handleClick(ind: number) {
    if (id.includes(ind.toString())) {
      setId(id.filter((x) => x !== ind.toString()));
    } else {
      setId((i: string[]) => [...i, ind.toString()]);
    }
  }
  return (
    <div
      ref={imgRef}
      className=" gap-8 border-b border-zinc-600 py-10 px-4 md:px-6 lg:px-12 xl:px-20 grid md:grid-cols-2 lg:grid-cols-3"
    >
      {articles.map((art, ind) => (
        <div key={art.title} className="space-y-2 w-full ">
          <img src={art.img} alt="article-img" className="w-full imgs " />
          <div className="space-y-1">
            <FadeUpText className="text-white text-sm font-medium">
              {art.title}
            </FadeUpText>
            <FadeUpText className="text-zinc-400 text-xs font-normal">
              {art.text}
            </FadeUpText>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div
                  onClick={() => handleClick(ind)}
                  className="flex items-center cursor-pointer gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5"
                >
                  {id.includes(ind.toString()) ? (
                    <FaHeart className="text-red-600" />
                  ) : (
                    <FaRegHeart className="text-zinc-400" />
                  )}
                  <p className="text-xs font-normal text-zinc-400">
                    {art.likes}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5">
                  <IoIosShareAlt className="text-zinc-400" />
                  <p className="text-xs font-normal text-zinc-400">
                    {art.share}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/blog"
              className="flex items-center gap-2 font-normal text-xs cursor-pointer text-zinc-400 py-2 px-3 bg-[#141414] border border-[#262626] rounded-[8px]"
            >
              Read More <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
