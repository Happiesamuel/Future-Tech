"use client";
import { PodShortSectionOne } from "@/components/layout/ShortSection";
import PodcastHeader from "@/components/podcast/PodcastHeader";
import PodcastResources from "@/components/podcast/PodcastResources";
import PodcastVideos from "@/components/podcast/PodcastVideos";

export default function Page() {
  return (
    <div className=" pt-30 lg:pt-40 ">
      <PodcastHeader />
      <PodcastResources />
      <PodShortSectionOne />
      <PodcastVideos />
    </div>
  );
}
