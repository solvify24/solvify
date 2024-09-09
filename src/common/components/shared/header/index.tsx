"use client";

import { links } from "@/common/lib/data";
import { smoothScrollTo } from "@/common/lib/utils";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[99]">
      <nav className="fixed w-full flex justify-center left-1/2 top-[0.15rem] -translate-x-1/2 py-2 sm:top-[1.7rem]">
        <motion.div
          className="w-full flex items-center justify-center py-2 px-2 rounded-none sm:w-[initial] border border-[#f4f3ee] border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:rounded-full"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-2 text-[0.9rem] font-medium transition-colors">
            {links.map((link) => (
              <motion.li
                className="relative flex items-center justify-center text-black dark:text-white"
                key={link.id}
              >
                <Link
                  className={
                    "flex w-full items-center justify-center px-3 py-1 uppercase transition " +
                    (link.id === activeSection ? "text-white" : "")
                  }
                  href={link.id}
                  onClick={(e) => {
                    smoothScrollTo({ e, id: link.id });
                    setActiveSection(link.id);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.id === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-gold"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </header>
  );
}
