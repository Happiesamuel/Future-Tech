"use client";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const foots = [
    {
      title: "Home",
      links: [
        {
          name: "Features",
          route: "/",
          type: null,
        },
        {
          name: "Blogs",
          route: "/",
          type: null,
        },
        {
          name: "Resources",
          route: "/",
          type: "new",
        },
        {
          name: "Testimonials",
          route: "/",
          type: null,
        },
        {
          name: "Contact Us",
          route: "/",
          type: null,
        },
        {
          name: "Newsletter",
          route: "/",
          type: null,
        },
      ],
    },
    {
      title: "News",
      links: [
        {
          name: "Trending Stories",
          route: "/",
          type: null,
        },
        {
          name: "Featured Videos",
          route: "/",
          type: null,
        },
        {
          name: "Technology",
          route: "/",
          type: null,
        },
        {
          name: "Health",
          route: "/",
          type: null,
        },
        {
          name: "Politics",
          route: "/",
          type: null,
        },
        {
          name: "Environment",
          route: "/",
          type: null,
        },
      ],
    },
    {
      title: "Blogs",
      links: [
        {
          name: "Quantom Computing",
          route: "/",
          type: null,
        },
        {
          name: "AI Ethnics",
          route: "/",
          type: null,
        },
        {
          name: "Space Exploration",
          route: "/",
          type: null,
        },
        {
          name: "Biotechnology",
          route: "/",
          type: "new",
        },
        {
          name: "Renewable Energy",
          route: "/",
          type: null,
        },
        {
          name: "Biohacking",
          route: "/",
          type: null,
        },
      ],
    },
    {
      title: "Podcasts",
      links: [
        {
          name: "AI Revolution",
          route: "/",
          type: "new",
        },
        {
          name: "TechTalk AI",
          route: "/",
          type: null,
        },
        {
          name: "AI Conversations",
          route: "/",
          type: null,
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "Whitepapers",
          route: "/",
          type: "button",
        },
        {
          name: "Ebooks",
          route: "/",
          type: "button",
        },
        {
          name: "Reports",
          route: "/",
          type: "button",
        },
        {
          name: "Research Papers",
          route: "/",
          type: "button",
        },
      ],
    },
  ];
  return (
    <footer className="  my-0 px-4 md:px-6 lg:px-12 xl:px-20 pt-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5  ">
        {foots.map((foot, i) => (
          <div
            key={foot.title}
            className={`space-y-3 ${i === 4 && "col-span-2 md:col-span-1"}`}
          >
            <h6 className="font-medium text-sm text-white">{foot.title}</h6>
            <div
              className={`gap-2 flex-col flex ${i === 4 && "flex-row   flex-wrap md:flex-col"}`}
            >
              {foot.links.map((link) => (
                <div
                  key={link.name}
                  className="flex cursor-pointer items-center gap-1"
                >
                  <p
                    className={`text-zinc-400 hover:text-[#ffd11a] transition-all duration-500 text-xs font-normal ${link.type === "button" && "border flex items-center gap-1 border-[#262626] rounded-[8px] pl-4 pr-3 py-1.5"}`}
                  >
                    {link.name}
                    {link.type === "button" && (
                      <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
                    )}
                  </p>
                  {link.type === "new" && (
                    <p className="px-3 py-0.5 border border-[#262626] text-white text-xs bg-[#1a1a1a] rounded-[6px]">
                      New
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t mt-16 py-6 border-zinc-600 md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="hover:text-[#ffd11a] duration-500 transition-all text-xs text-zinc-400 font-normal cursor-pointer">
            Terms & Conditions
          </p>{" "}
          <p className=" text-xs text-zinc-400 font-normal ">|</p>{" "}
          <p className="hover:text-[#ffd11a] duration-500 transition-all text-xs text-zinc-400 font-normal cursor-pointer">
            Privacy Policy
          </p>
        </div>

        <div className="flex items-center gap-5">
          <FaTwitter className="hover:text-[#ffd11a] duration-500 transition-all text-white cursor-pointer text-xl" />
          <FaTelegramPlane className="hover:text-[#ffd11a] duration-500 transition-all text-white cursor-pointer text-xl" />
          <FaLinkedin className="hover:text-[#ffd11a] duration-500 transition-all text-white cursor-pointer text-xl" />
        </div>

        <p className=" text-xs text-zinc-400 font-normal ">
          © {new Date().getFullYear()} FutureTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
