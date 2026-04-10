import gsap from "gsap";
import { BsArrowUpRight } from "react-icons/bs";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FadeUpText from "@/lib/TextReveal";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactForm from "./contact/ContactFom";
gsap.registerPlugin(ScrollTrigger);

const animateKite = (ref: React.RefObject<HTMLImageElement | null>) => {
  if (!ref.current) return;
  gsap.to(ref.current, {
    rotation: 360,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 1.2,
  });
};
export default function Contact() {
  const kiteRef = useRef<HTMLImageElement>(null);
  const kiteRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animateKite(kiteRef);
      animateKite(kiteRef2);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="">
      <div className="flex lg:items-center flex-col lg:flex-row justify-between">
        <div className="flex-[0.7] pt-6 justify-start w-full">
          <div className="space-y-4 mx-4 md:mx-0 pb-8 md:px-6 lg:px-12 xl:px-20 border-b md:border-b-0 border-zinc-600">
            <Image
              width={40}
              height={2}
              alt="research"
              ref={kiteRef}
              className="size-10"
              src="/contact_1.svg"
            />
            <div className="flex items-center justify-between">
              <FadeUpText className="font-medium text-2xl text-white">
                Get in Touch with AI Podcasts
              </FadeUpText>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:border-l  border-b lg:border-t-0 border- lg:pb-0 lg:border-b-0 border-zinc-600 px-4">
          <div className=" py-6 md:py-10 w-full  lg:pl-8 lg:pr-20  gap-4">
            <Quantity />
          </div>
        </div>
      </div>

      <div className="flex lg:items-center flex-col lg:flex-row justify-between lg:border-t  border-zinc-600">
        <div className="flex-[0.7] pt-6  justify-start w-full">
          <div className="space-y-4 mx-4 md:mx-0 pb-8 md:px-6 lg:px-12 xl:px-20 border-b md:border-b-0 border-zinc-600">
            <Image
              width={40}
              height={2}
              alt="research"
              ref={kiteRef2}
              className="size-10"
              src="/contact_2.svg"
            />
            <div className="flex items-center justify-between">
              <FadeUpText className="font-medium text-2xl text-white">
                Asked question
              </FadeUpText>
            </div>
            <p className="mt-6  text-sm  text-zinc-400">
              If the question is not available on our FAQ section, Feel free to
              contact us personally, we will resolve your respective doubts.
            </p>
            <p
              className={`text-zinc-400  bg-[#141414] cursor-pointer text-xs font-normal border flex items-center gap-1 w-fit border-[#262626] rounded-[8px] pl-3 pr-2 py-2.5`}
            >
              Ask Question
              <BsArrowUpRight className="text-[#ffd11a]  font-bold" />
            </p>
          </div>
        </div>

        <div className="flex-1 lg:border-l border-b lg:border-y-0 border-y lg:pb-0 lg:border-b-0 border-zinc-600 px-4">
          <div className=" py-6 md:py-10   lg:pl-8 lg:pr-20   w-full gap-4">
            <QuantityTwo />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuantityTwo() {
  const acc = [
    {
      title: "What is AI?",
      text: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
    },
    {
      title: "How can I listen to your podcasts?",
      text: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
    },
    {
      title: "Are your podcasts free to listen to?",
      text: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
    },
    {
      title: "Can I download episodes to listen offline?",
      text: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
    },
    {
      title: "How often do you release new episodes?",
      text: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
    },
  ];
  return (
    <div className="w-full">
      <Accordion
        type="single"
        className="space-y-3 w-full"
        collapsible
        defaultValue="item-1"
      >
        {acc.map((ac, i) => (
          <AccordionItem
            className="cursor-pointer w-full  rounded-[10px] bg-[#1a1a1a] p-4 border border-[#262626]"
            key={i}
            value={`item-${i + 1}`}
          >
            <AccordionTrigger className="font-medium rounded-none cursor-pointer text-sm text-white">
              {ac.title}
            </AccordionTrigger>
            <AccordionContent className="text-sm  text-zinc-400  border-zinc-600  border-t pt-5 text-justify font-normal">
              {ac.text}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
function Quantity() {
  return (
    <div className="space-y-3">
      <ContactForm />
    </div>
  );
}
