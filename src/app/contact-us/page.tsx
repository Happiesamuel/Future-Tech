"use client";

import Contact from "@/components/Contact";
import ContactHeader from "@/components/contact/ContactHeader";

export default function Page() {
  return (
    <div className=" pt-22 ">
      <ContactHeader />
      <Contact />
    </div>
  );
}
