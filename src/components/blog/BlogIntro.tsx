import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";

export default function BlogIntro() {
  const content = [
    "Introduction",
    "AI in Diagnostic Imaging",
    "Predictive Analytics and Disease Prevention",
    "Personalized Treatment Plans",
    "Drug Discovery and Research",
    "AI in Telemedicine",
    "Ethical Considerations",
    "The Future of AI in Healthcare",
    "Conclusion",
  ];
  const [active, setActive] = useState(false);
  return (
    <div className="flex items-cente flex-col-reverse md:flex-row">
      <div className="flex-1 ">
        <div className="space-y-2 border-zinc-600 border-t md:border-t-0 border-b px-4 md:px-6 lg:px-12 xl:px-20 py-5 md:py-10">
          <h4 className="text-base text-white font-medium">Introduction</h4>
          <p className="text-zinc-400 text-sm text-justify">
            Artificial Intelligence (AI) has emerged as a transformative force
            in the healthcare industry, reshaping patient care, diagnostics, and
            research. In this blog post, we explore the profound impact of AI in
            healthcare, from revolutionizing diagnostic accuracy to enhancing
            patient outcomes.
          </p>
        </div>

        <div className="space-y-2 border-zinc-600 border-b px-4 md:px-6 lg:px-12 xl:px-20 py-5 md:py-10">
          <h4 className="text-base text-white font-medium">
            Artificial Intelligence (AI)
          </h4>
          <p className="text-zinc-400 text-sm text-justify">
            Artificial Intelligence (AI) has permeated virtually every aspect of
            our lives, and healthcare is no exception. The integration of AI in
            healthcare is ushering in a new era of medical practice, where
            machines complement the capabilities of healthcare professionals,
            ultimately improving patient outcomes and the efficiency of the
            healthcare system. In this blog post, we will delve into the diverse
            applications of AI in healthcare, from diagnostic imaging to
            personalized treatment plans, and address the ethical considerations
            surrounding this revolutionary technology.
          </p>
          <p className="text-zinc-400 text-sm text-justify">
            Artificial Intelligence (AI) has permeated virtually every aspect of
            our lives, and healthcare is no exception. The integration of AI in
            healthcare is ushering in a new era of medical practice, where
            machines complement the capabilities of healthcare professionals,
            ultimately improving patient outcomes and the efficiency of the
            healthcare system. In this blog post, we will delve into the diverse
            applications of AI in healthcare, from diagnostic imaging to
            personalized treatment plans, and address the ethical considerations
            surrounding this revolutionary technology.
          </p>
        </div>
        <div className="space-y-2 px-4 md:px-6 lg:px-12 xl:px-20 py-5 md:py-10">
          <h4 className="text-base text-white font-medium">
            Predictive Analytics and Disease Prevention
          </h4>
          <p className="text-zinc-400 text-sm text-justify">
            One of the most prominent applications of AI in healthcare is in
            diagnostic imaging. AI algorithms have demonstrated remarkable
            proficiency in interpreting medical images such as X-rays, MRIs, and
            CT scans. They can identify anomalies and deviations that might be
            overlooked by the human eye. This is particularly valuable in early
            disease detection. For instance, AI can aid radiologists in
            detecting minute irregularities in mammograms or identifying
            critical findings in chest X-rays, potentially indicative of
            life-threatening conditions.
          </p>
        </div>
      </div>
      <div className="flex-[0.65]  md:border-l border-zinc-600">
        <div className="flex items-center gap-3 py-6 border-b border-zinc-600 px-10 justify-center">
          <div className="flex items-center gap-3">
            <div
              onClick={() => setActive(true)}
              className="flex items-center cursor-pointer gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5"
            >
              {active ? (
                <FaHeart className="text-red-600" />
              ) : (
                <FaRegHeart className="text-zinc-400" />
              )}
              <p className="text-xs font-normal text-zinc-400">24.5k</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5">
                <FiEye className="text-zinc-400" />
                <p className="text-xs font-normal text-zinc-400">50k</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5">
                <IoIosShareAlt className="text-zinc-400" />
                <p className="text-xs font-normal text-zinc-400">206</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 px-4 md:px-10 py-5 md:py-10">
          <div className="flex items-start md:items-center gap-8">
            <div className="space-y-1.5">
              <p className="text-xs font-normal text-zinc-400">
                Publication Date
              </p>
              <p className="text-xs font-normal text-white">October 15, 2023</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-normal text-zinc-400">Category</p>
              <p className="text-xs font-normal text-white">Healthcare</p>
            </div>
          </div>
          <div className="flex items-start md:items-center gap-8">
            <div className="space-y-1.5">
              <p className="text-xs font-normal text-zinc-400">Reading Time</p>
              <p className="text-xs font-normal text-white">10 Min</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-normal text-zinc-400">Author Name</p>
              <p className="text-xs font-normal text-white">Dr. Emily Walker</p>
            </div>
          </div>

          <div className="space-y-2 pt-6">
            <p className="text-sm text-white">Table of Contents</p>

            <div className="bg-[#1A1A1A] max-w-sm rounded-[10px] space-y-2 p-4">
              {content.map((con) => (
                <p className="text-sm text-white list-disc" key={con}>
                  &bull; {con}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
