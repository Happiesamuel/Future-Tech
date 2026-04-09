"use client";

import ExploreBlogs from "@/components/home/ExploreBlogs";
import {
  NewsShortSectionOne,
  NewsShortSectionTwo,
} from "@/components/layout/ShortSection";
import NewArticle from "@/components/news/NewArticle";
import NewsAticle from "@/components/news/NewsAticle";
import NewsHeader from "@/components/news/NewsHeader";
import NewVideos from "@/components/news/NewVideos";

export default function Page() {
  return (
    <div className=" pt-30 lg:pt-40 ">
      <NewsHeader />
      <NewArticle />
      <NewsAticle />
      <NewsShortSectionOne />
      <ExploreBlogs type="news" />
      <NewsShortSectionTwo />
      <NewVideos />
    </div>
  );
}
