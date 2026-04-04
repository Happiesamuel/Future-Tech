import { BsArrowUpRight } from "react-icons/bs";

export default function HeroUpdate({
  svg,
  title,
  slug,
  content,
  index,
}: {
  svg: string;
  title: string;
  slug: string;
  content: string;
  index: number;
}) {
  return (
    <div
      className={`space-y-3 flex-1 ${index === 0 && "pl-0 md:pr-5 lg:pr-10"}  py-4 md:py-8 lg:py-10 ${index > 0 && "md:border-l md:px-5 lg:px-10 md:border-t-0 border-t border-zinc-600"} `}
    >
      <img src={svg} />
      <div className="flex items-center gap-2 justify-between">
        <div className="space-y-1">
          <h6 className="font-medium text-white">{title}</h6>
          <p className="text-sm text-zinc-400">{slug}</p>
        </div>
        <div className="bg-[#ffd11a] rounded-full flex items-center justify-center size-8">
          <BsArrowUpRight className="text-[#141414]  font-bold" />
        </div>
      </div>
      <p className="text-sm text-zinc-400">{content}</p>
    </div>
  );
}
