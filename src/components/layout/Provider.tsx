"use client";
import { useRef, startTransition } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

export function Providers({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const tl = gsap.timeline({ onComplete: next });
        document.body.style.overflow = "hidden";
        tl.set(overlayRef.current, { display: "flex", xPercent: -100 })
          // panel slides in
          .to(overlayRef.current, {
            xPercent: 0,
            duration: 0.7,
            ease: "expo.inOut",
          })
          // accent bar sweeps in from left
          .fromTo(
            accentRef.current,
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, duration: 0.4, ease: "expo.out" },
            "-=0.3",
          )
          // logo zooms + rotates in
          .fromTo(
            logoRef.current,
            { scale: 2.5, opacity: 0, rotation: -180 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
            "-=0.2",
          )
          // logo yoyo rotation
          .to(logoRef.current, {
            rotation: 20,
            duration: 0.3,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 1,
          })
          // dots fade in
          .fromTo(
            dotsRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3 },
            "-=0.2",
          )
          // hold for user to see
          .to({}, { duration: 0.5 });

        return () => tl.kill();
      }}
      enter={(next) => {
        const tl = gsap.timeline();
        tl
          // logo rotates out
          .to(logoRef.current, {
            rotation: 180,
            scale: 0.5,
            opacity: 0,
            duration: 0.4,
            ease: "expo.in",
          })
          // accent bar shrinks
          .to(
            accentRef.current,
            {
              scaleX: 0,
              transformOrigin: "right",
              duration: 0.3,
              ease: "expo.in",
            },
            "-=0.2",
          )
          // dots fade out
          .to(dotsRef.current, { opacity: 0, duration: 0.2 }, "<")
          // panel slides out right
          .to(
            overlayRef.current,
            {
              xPercent: 100,
              duration: 0.7,
              ease: "expo.inOut",
            },
            "-=0.1",
          )
          .set(overlayRef.current, { display: "none" })
          .call(() => {
            document.body.style.overflow = "";
            requestAnimationFrame(() => {
              startTransition(next);
            });
          });

        return () => tl.kill();
      }}
    >
      <main>{children}</main>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 hidden flex-col items-center justify-center bg-[#1a1a1a] overflow-hidden"
        style={{ height: "100dvh", width: "100dvw" }}
      >
        <div
          ref={accentRef}
          className="absolute top-0 left-0 w-full h-1 bg-[#ffd11a] scale-x-0"
        />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#ffd11a] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[#ffd11a] opacity-5 blur-2xl pointer-events-none" />

        <div className="flex flex-col items-center gap-5">
          <img ref={logoRef} src="/logo.svg" className="size-20" />
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
    </TransitionRouter>
  );
}
