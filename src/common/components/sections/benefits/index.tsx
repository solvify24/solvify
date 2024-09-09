"use client";

import { useSectionInView } from "@/common/lib/hooks";
import SectionDivider from "@/common/components/shared/section-divider";
import SectionHeading from "@/common/components/shared/section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { benefitsData } from "@/common/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Benefits() {
  const { ref } = useSectionInView("benefits");

  return (
    <motion.section
      id="benefits"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div>
        <SectionHeading>Benefits</SectionHeading>
        <ul className="px-8 py-8 flex max-w-[53rem] flex-wrap items-center justify-center gap-2 text-lg text-gray-800">
          {benefitsData.map((item, index) => (
            <motion.li
              className="borderBlack rounded-xl bg-gray-200 px-6 py-4 my-4 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
      <SectionDivider />
    </motion.section>
  );
}
