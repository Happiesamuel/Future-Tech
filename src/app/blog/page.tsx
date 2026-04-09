"use client";

import BlogBg from "@/components/blog/BlogBg";
import BlogIntro from "@/components/blog/BlogIntro";
import NewsAticle from "@/components/news/NewsAticle";
import { BsArrowUpRight } from "react-icons/bs";

export default function Page() {
  return (
    <div className=" pt-20 ">
      <BlogBg />
      <BlogIntro />
      <div className="border-t border-zinc-600 pt-5 md:pt-10">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-12 xl:px-20">
          <h6>Similar News</h6>
          <div className="flex items-center gap-2 font-normal text-xs cursor-pointer text-zinc-400 py-2 px-3 bg-[#141414] border border-[#262626] rounded-[8px]">
            Read More <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
          </div>
        </div>
        <NewsAticle />
      </div>
    </div>
  );
}
