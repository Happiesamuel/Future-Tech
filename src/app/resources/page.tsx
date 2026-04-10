"use client";
import { ResourceShortSectionOne } from "@/components/layout/ShortSection";
import ResourceResources from "@/components/resources/ResourceResources";
import ResourceFuture from "@/components/resources/ResourcesFuture";
import ResourcesHeader from "@/components/resources/ResourcesHeader";

export default function Page() {
  return (
    <div className=" pt-30 lg:pt-40 ">
      <ResourcesHeader />
      <ResourceShortSectionOne />
      <ResourceResources />
      <ResourceFuture />
    </div>
  );
}
