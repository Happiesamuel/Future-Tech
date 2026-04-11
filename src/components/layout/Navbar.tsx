"use client";
import { BsArrowUpRight } from "react-icons/bs";

import MobileNav from "./MobileNav";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
export default function Navbar() {
  const links = [
    {
      name: "Home",
      slug: "home",
      route: "/",
    },
    {
      name: "News",
      slug: "news",
      route: "/news",
    },
    {
      name: "Podcasts",
      slug: "podcasts",
      route: "/podcasts",
    },
    {
      name: "Resources",
      slug: "resources",
      route: "/resources",
    },
  ];
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
  const pathname = usePathname();
  const slug = pathname;
  return (
    <div className="fixed w-full z-100 max-w-480 mx-auto my-0">
      <div className="flex backdrop-blur-2xl items-center px-2 justify-between md:justify-center py-2 gap-2">
        <p className="md:text-sm text-[10px] text-center  text-[#98989A]">
          Subscribe to our Newsletter For New & latest Blogs and Resourcess
        </p>
        <BsArrowUpRight className="text-[#FFD11A] font-bold" />
      </div>
      <nav className="hidden bg-[#1A1A1A] py-1.5 lg:px-12 xl:px-20 lg:flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            ref={kiteRef}
            width={40}
            height={40}
            alt="logo"
            className="size-10"
            src="/logo.svg"
          />
          <h4 className="text-white text-base font-semibold">Future Tech</h4>
        </div>

        <ul className="flex items-center gap-7">
          {links.map((link) => (
            <Link
              href={link.route}
              key={link.name}
              className={`text-[#7E7E81] hover:text-[#FFD11A] text-sm ${slug === link.route && "text-white border bg-[#141414] border-[#333333] px-3 py-1.5 rounded-md"} cursor-pointer`}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <a className="" href="/contact-us">
          <Button
            size={"lg"}
            className="bg-[#FFD11A] cursor-pointer  text-[#141414] text-sm"
          >
            Contact Us
          </Button>
        </a>
      </nav>

      <div className=" lg:hidden">
        <MobileNav links={links} />
      </div>
    </div>
  );
}
