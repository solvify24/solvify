"use client";

import { useSectionInView } from "@/common/lib/hooks";
import SectionDivider from "@/common/components/shared/section-divider";
import SectionHeading from "@/common/components/shared/section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const { ref } = useSectionInView("about", 0.4);
  const divRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "0 0.36"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="z-50 flex w-full flex-col items-center justify-start leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex w-full flex-col items-center">
        <SectionHeading>About Us</SectionHeading>
        <motion.div
          className="overflow-hidden px-8 py-8 sm:w-[80%] lg:w-[1040px] xl:w-[1180px]"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
        >
          <div className="group relative w-full">
            <div className="text-justify relative z-40 flex flex-col font-medium tracking-wide text-primary lg:text-lg xl:text-md">
              <span>
                Solvify is not just a startup; it's a testament to youthful
                passion and innovative spirit. Pre-incubated at Technology
                Business Incubator of Thiagarajar College of Engineering,
                Madurai, Solvify was founded by five visionary students from the
                Computer Science & Business Systems Department. With a
                commitment to tackling societal challenges through creative,
                market-centric solutions, our journey is one of inspiration and
                relentless pursuit of excellence.
              </span>
              <h3 className="mt-6 mb-4 text-4xl font-bold">Our Story</h3>
              <span>
                Our story began in August 2023 with the "Accident Prevention
                System" project at the Madurai Tech Community. This initiative
                laid the foundation for our mission to create impactful
                technology. Over the next six months, we engaged in rigorous
                market research and in-depth customer interactions, refining our
                ideas and understanding the real-world needs of our users. This
                diligent process culminated in the development of a robust
                prototype at PALS IITM in January 2024. By July 2024, our
                relentless hard work and innovative approach bore fruit, and
                Solvify officially launched as a startup
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}
