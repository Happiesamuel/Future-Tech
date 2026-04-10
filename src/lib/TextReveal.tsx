"use client";
import { ElementType, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function TextReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "words,chars" });

    const ctx = gsap.context(() => {
      gsap.from(split.words, {
        opacity: 0,
        y: 60,
        filter: `blur(8px)`,
        stagger: 0.08,
        duration: 0.8,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <p ref={textRef} className={className} style={{ overflow: "hidden" }}>
      {children}
    </p>
  );
}

gsap.registerPlugin(ScrollTrigger);

type FadeUpTextProps = {
  children: string;
  className?: string;
  as?: ElementType; // h1, h2, p, span etc
  stagger?: number;
  duration?: number;
  blur?: number;
};

export function FadeUpText({
  children,
  className = "",
  as: Tag = "p",
  stagger = 0.08,
  duration = 0.7,
  blur = 8,
}: FadeUpTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "words" });

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        filter: `blur(${blur}px)`,
        stagger,
        duration,
        ease: "back.out(2)",

        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <Tag ref={textRef} className={className}>
      {children}
    </Tag>
  );
}

export default FadeUpText;
