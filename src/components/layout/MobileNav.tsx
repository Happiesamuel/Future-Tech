"use client";
import { BiMenuAltRight } from "react-icons/bi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
export default function MobileNav({
  links,
}: {
  links: { name: string; slug: string; route: string }[];
}) {
  const kiteRef = useRef<HTMLImageElement>(null);
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      animateKite(kiteRef);
    });

    return () => ctx.revert();
  }, []);
  return (
    <nav className="lg:hidden bg-[#1A1A1A] py-2.5 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          ref={kiteRef}
          width={32}
          height={32}
          alt="logo"
          src="/logo.svg"
          className="size-8"
        />
        <h4 className="text-white text-sm md:text-base font-semibold">
          Future Tech
        </h4>
      </div>

      <Sheet>
        <SheetTrigger>
          <BiMenuAltRight className="text-3xl cursor-pointer" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className={"px-4 py-6 mt-19.5   w-full bg-black  overflow-hidden"}
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
              backgroundSize:
                "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
              backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
            }}
          />
          <ul className="flex flex-col items-start gap-7">
            {links.map((link) => (
              <SheetClose key={link.name}>
                <li
                  className={`text-[#7E7E81] hover:text-[#FFD11A] text-sm ${link.route === "" && "text-[#ffd11a] "} cursor-pointer`}
                >
                  {link.name}
                </li>
              </SheetClose>
            ))}
          </ul>

          <Button size={"lg"} className="bg-[#FFD11A]  text-[#141414] text-sm">
            Contact Us
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
