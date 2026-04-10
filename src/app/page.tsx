"use client";

import ExploreBlogs from "../components/home/ExploreBlogs";
import Marquee from "../components/home/Marquee";
import Research from "../components/home/Research";
import Resources from "../components/home/Resources";
import {
  ShortSectionFour,
  ShortSectionOne,
  ShortSectionThree,
  ShortSectionTwo,
} from "../components/layout/ShortSection";
import Testimonial from "@/components/home/Testimonial";
import HomeHeroSection from "../components/home/HomeHeroSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <Marquee />
      <ShortSectionOne />
      <Research />
      <ShortSectionTwo />
      <ExploreBlogs type="home" />
      <ShortSectionFour />
      <Resources />
      <ShortSectionThree />
      <Testimonial />
    </>
  );
}
