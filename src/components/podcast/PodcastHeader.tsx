import FadeUpText, { TextReveal } from "@/lib/TextReveal";
import React from "react";

export default function PodcastHeader() {
  return (
    <div className="pb-8 md:pb-20 space-y-2 px-4 md:px-6 lg:px-12 xl:px-20 border-b border-zinc-600">
      <TextReveal className="font-medium text-2xl md:text-4xl text-white">
        Unlock the World of Artificial Intelligence through Podcasts
      </TextReveal>
      <FadeUpText className="font-normal text-justify max-w-full md:max-w-[95%] lg:max-w-[85%] text-sm text-zinc-300">
        Dive deep into the AI universe with our collection of insightful
        podcasts. Explore the latest trends, breakthroughs, and discussions on
        artificial intelligence. Whether you&apos;re an enthusiast or a
        professional, our AI podcasts offer a gateway to knowledge and
        innovation.
      </FadeUpText>
    </div>
  );
}
