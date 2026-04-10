import Image from "next/image";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";

export default function ExploreBlogs({ type }: { type: string }) {
  const bloggers =
    type === "home"
      ? [
          {
            name: "John Techson",
            role: "Quantum Computing",
            img: "/explore_1.svg",
            date: "October 15, 2023",
            title: "The Quantum Leap in Computing",
            text: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
            likes: "24.5k",
            comments: "50",
            share: "20",
          },
          {
            name: "Sarah Ethicist",
            role: "AI Ethics",
            img: "/explore_2.svg",
            date: "November 5, 2023",
            title: "The Ethical Dilemmas of AI",
            text: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
            likes: "32k",
            comments: "72",
            share: "18",
          },
          {
            name: "Astronomer X",
            role: "Space Exploration",
            img: "/explore_3.svg",
            date: "December 10, 2023",
            title: "The Mars Colonization Challenge",
            text: "Exploring the technical and logistical challenges of human colonization on Mars.",
            likes: "20k",
            comments: "31",
            share: "12",
          },
        ]
      : [
          {
            name: "John Techson",
            role: "Technology",
            img: "/explore_1.svg",
            date: "October 15, 2023",
            title: "Tech Giants Announce New Product Line",
            text: "Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape",
            likes: "24.5k",
            comments: "50",
            share: "20",
          },
          {
            name: "Sarah Ethicist",
            role: "Technology",
            img: "/explore_2.svg",
            date: "October 11, 2023",
            title: "The Future of Autonomous Vehicles",
            text: "An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.",
            likes: "32k",
            comments: "72",
            share: "18",
          },
          {
            name: "Astronomer X",
            role: "Technology",
            img: "/explore_3.svg",
            date: "December 10, 2023",
            title: "Tech Startups Secure Record Funding",
            text: "An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape.",
            likes: "20k",
            comments: "31",
            share: "12",
          },
        ];

  const buttons =
    type === "home"
      ? [
          "All",
          "Quantum Computing",
          "AI Ethics",
          "Space Exploration",
          "Biotechnology",
          "Renewable Energy",
        ]
      : ["All", "Technology", "Politics", "Health", "Environment", "Sports"];

  const [id, setId] = useState<string[]>([]);
  const [name, setName] = useState("All");

  function handleClick(ind: number) {
    if (id.includes(ind.toString())) {
      setId(id.filter((x) => x !== ind.toString()));
    } else {
      setId((i: string[]) => [...i, ind.toString()]);
    }
  }
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center gap-4 mx-auto px-4 overflow-x-auto scrollbar-hide ">
          {buttons.map((button) => (
            <p
              onClick={() => setName(button)}
              className={`cursor-pointer shrink-0 ${name === button && "bg-[#ffd11a] text-[#141414]!"} transition-all duration-500 border border-[#262626] px-5 text-sm py-2.5 rounded-[8px] text-zinc-400`}
              key={button}
            >
              {button}
            </p>
          ))}
        </div>
      </div>

      <div>
        {bloggers.map((blog, ind) => (
          <div
            key={blog.name}
            className="grid gap-3 md:grid-cols-[0.5fr_1fr_0.2fr] px-4 md:px-6 lg:px-12 xl:px-20 border-t border-zinc-600 py-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  width={40}
                  height={2}
                  alt="blog"
                  src={blog.img}
                  className="w-10"
                />
                <div className="space-y-1">
                  <p className="text-white font-medium text-sm">{blog.name}</p>
                  <p className="text-xs font-normal text-zinc-300">
                    {blog.role}
                  </p>
                </div>
              </div>
              <div className="md:hidden">
                <a
                  href="/blog"
                  className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-4 pr-3 py-2.5`}
                >
                  View Blog
                  <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-normal text-zinc-300">{blog.date}</p>
              <div className="space-y-1">
                <h6 className="text-white text-base font-medium">
                  {blog.title}
                </h6>
                <p className="text-zinc-400 text-xs font-normal">{blog.text}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => handleClick(ind)}
                    className="flex items-center cursor-pointer gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5"
                  >
                    {id.includes(ind.toString()) ? (
                      <FaHeart className="text-red-600" />
                    ) : (
                      <FaRegHeart className="text-zinc-400" />
                    )}
                    <p className="text-xs font-normal text-zinc-400">
                      {blog.likes}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5">
                    <FiMessageCircle className="text-zinc-400" />
                    <p className="text-xs font-normal text-zinc-400">
                      {blog.comments}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1.5">
                    <IoIosShareAlt className="text-zinc-400" />
                    <p className="text-xs font-normal text-zinc-400">
                      {blog.share}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <p
                className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-4 pr-3 py-2.5`}
              >
                {type === "home" ? "View Blog" : "Read More"}
                <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
