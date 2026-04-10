import { BsArrowUpRight } from "react-icons/bs";
import { FaLinkedin, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function ContactHeader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-zinc-600">
      <div className="space-y-5 sm:border-r border-b lg:border-b-0 border-zinc-600 py-10 pl-4 md:pl-6 lg:pl-12 xl:pl-20">
        <h6 className="font-medium text-white text-sm">General Inquiries</h6>
        <div className="space-y-2">
          <p
            className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
          >
            contact@ai-podcasts.com
            <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
          </p>
          <p
            className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
          >
            +1 (123) 456-7890
            <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
          </p>
        </div>
      </div>
      <div className="space-y-5 px-4 md:px-6 lg:px-10  py-10 border-b lg:border-b-0 lg:border-r border-zinc-600">
        <h6 className="font-medium text-white text-sm">Technical Support</h6>
        <div className="space-y-2">
          <p
            className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
          >
            contact@ai-podcasts.com
            <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
          </p>
          <p
            className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
          >
            +1 (123) 456-7890
            <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
          </p>
        </div>
      </div>
      <div className="space-y-5  px-4 md:px-6 lg:px-10  py-10 border-b lg:border-b-0 sm:border-r border-zinc-600">
        <h6 className="font-medium text-white text-sm">Our Office</h6>
        <div className="space-y-2">
          <p className={`text-zinc-400   r text-xs font-normal `}>
            Address: 123 AI Tech Avenue, Techville, 54321
          </p>
        </div>
      </div>
      <div className="space-y-5 px-4 md:px-6 lg:px-10 py-10 lg:border-r border-zinc-600">
        <h6 className="font-medium text-white text-sm">Connect with Us</h6>
        <div className="flex items-center gap-5">
          <div
            className={` bg-[#141414] cursor-pointer text-xs font-normal duration-500 transition-all border flex items-center hover:bg-[#ffd11a] border-[#262626] rounded-[8px] size-10 justify-center`}
          >
            <FaTwitter className="hover:text-[#141414]  text-white  text-base" />
          </div>
          <div
            className={` bg-[#141414] cursor-pointer text-xs font-normal duration-500 transition-all border flex items-center hover:bg-[#ffd11a] border-[#262626] rounded-[8px] size-10 justify-center`}
          >
            <FaLinkedin className="hover:text-[#141414]  text-white  text-base" />
          </div>
          <div
            className={` bg-[#141414] cursor-pointer text-xs font-normal duration-500 transition-all border flex items-center hover:bg-[#ffd11a] border-[#262626] rounded-[8px] size-10 justify-center`}
          >
            <FaTelegramPlane className="hover:text-[#141414]  text-white  text-base" />
          </div>
        </div>
      </div>
    </div>
  );
}
