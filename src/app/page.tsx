"use client";

import ExploreBlogs from "@/components/Home/ExploreBlogs";
import HomeHeroSection from "@/components/Home/HomeHeroSection";
import Marquee from "@/components/Home/Marquee";
import Research from "@/components/Home/Research";
import Resources from "@/components/Home/Resources";
import Revolution from "@/components/Home/Revolution";
import {
  ShortSectionFour,
  ShortSectionOne,
  ShortSectionThree,
  ShortSectionTwo,
} from "@/components/Home/ShortSection";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <Marquee />
      <ShortSectionOne />
      <Research />
      <ShortSectionTwo />
      <ExploreBlogs />
      <ShortSectionFour />
      <Resources />
      <ShortSectionThree />
      <Testimonial />
      <Revolution />
    </>
  );
}
