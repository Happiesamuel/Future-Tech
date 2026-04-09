import FadeUpText, { TextReveal } from "@/lib/TextReveal";

export default function NewsHeader() {
  return (
    <div className="pb-8 md:pb-20 space-y-2 px-4 md:px-6 lg:px-12 xl:px-20">
      <TextReveal className="font-medium text-2xl md:text-4xl text-white">
        Today&apos;s Headlines: Stay Informed
      </TextReveal>
      <FadeUpText className="font-normal text-justify max-w-full md:max-w-[95%] lg:max-w-[85%] text-sm text-zinc-300">
        Explore the latest news from around the world. We bring you
        up-to-the-minute updates on the most significant events, trends, and
        stories. Discover the world through our news coverage.
      </FadeUpText>
    </div>
  );
}
