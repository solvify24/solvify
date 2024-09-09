"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SectionHeading from "@/common/components/shared/section-heading";
import { socialLinks } from "@/common/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 text-center dark:bg-darkBg dark:text-white"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Reach Us</SectionHeading>
      <div className="w-[min(100%,38rem)]">
        <p className="text-gray-700 dark:text-white/80">
          Feel free to connect with us
        </p>
        <div className="flex items-center justify-center gap-x-8 py-8">
          {socialLinks.map((value, index) => (
            <a
              key={index}
              href={value.link}
              target="blank"
              className="p-4 group flex items-start justify-end gap-x-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:bg-gold hover:text-black dark:bg-white dark:hover:bg-gold dark:bg-opacity-10 dark:hover:text-black"
            >
              <span className="block text-nowrap absolute opacity-0 max-w-0 transition-[max-width] duration-500 ease-in-out group-hover:max-w-xl group-hover:relative group-hover:opacity-100">
                {value.title}
              </span>
              <value.icon className="w-[1.4rem] h-[1.4rem] display-block" />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
