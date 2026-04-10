"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const accent = accentRef.current;
    const logo = logoRef.current;
    const dots = dotsRef.current;

    if (!overlay || !accent || !logo || !dots) return;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
      },
    });

    tl
      // Start: small, rotated back
      .set(logo, { opacity: 0, scale: 0.3, rotation: -25 })

      // Scale up + rotate forward into place
      .to(logo, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
      })

      // Tilt back
      .to(logo, {
        rotation: -8,
        scale: 0.92,
        duration: 0.25,
        ease: "power1.inOut",
      })

      // Snap forward
      .to(logo, {
        rotation: 6,
        scale: 1.05,
        duration: 0.2,
        ease: "power1.inOut",
      })

      // Settle to center
      .to(logo, {
        rotation: 0,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      })

      // Accent bar sweeps in
      .to(
        accent,
        {
          scaleX: 1,
          duration: 0.7,
          ease: "power2.inOut",
          transformOrigin: "left center",
        },
        "-=0.3",
      )

      // Dots appear
      .to(dots, { opacity: 1, duration: 0.2 }, "-=0.2")

      // Dots bounce
      .to(dots.querySelectorAll("span"), {
        y: -6,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: 0.15,
        repeat: 2,
        yoyo: true,
      })

      // Logo pulses then spins out
      .to(logo, {
        scale: 1.15,
        rotation: 5,
        duration: 0.2,
        ease: "power1.in",
      })
      .to(logo, {
        scale: 0,
        rotation: 30,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
      })

      // Overlay slides up and out
      .to(overlay, {
        yPercent: -100,
        duration: 0.7,
        ease: "power3.inOut",
      })

      .set(overlay, { display: "none" });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-[#1a1a1a] overflow-hidden"
      style={{ height: "100dvh", width: "100dvw" }}
    >
      <div
        ref={accentRef}
        className="absolute top-0 left-0 w-full h-1 bg-[#ffd11a] scale-x-0"
      />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#ffd11a] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[#ffd11a] opacity-5 blur-2xl pointer-events-none" />

      <div className="flex flex-col items-center gap-5">
        <img ref={logoRef} src="/logo.svg" className="size-20" alt="Logo" />
        <div ref={dotsRef} className="flex gap-2 opacity-0">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="size-1.5 rounded-full bg-[#ffd11a]"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffd11a] opacity-30" />
    </div>
  );
}
