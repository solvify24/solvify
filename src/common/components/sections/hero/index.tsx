"use client";

import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import TextAnimation from "./_components/text-animation";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { logo } from "@/common/lib/data";

export default function Hero() {
  const { ref } = useSectionInView("home");

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
        id="home"
        ref={ref}
      >
        <div
          className={
            "absolute left-0 top-0 h-screen w-full bg-[#00000040] dark:bg-[#00000060]"
          }
        ></div>
        <video
          width="480"
          height="720"
          preload="none"
          autoPlay
          crossOrigin="anonymous"
          muted
          loop
          className="absolute -z-10 h-screen w-screen object-cover"
        >
          <source src="/layout.mp4" />
        </video>
        <div className="container flex flex-col items-start justify-center tracking-wide text-white">
          <div className="container relative h-full w-full">
            <div className="flex flex-col items-center gap-y-6 md:gap-y-6 mx-auto w-[280px] sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px]">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 flex flex-row items-center justify-center gap-[0.4em]"
              >
                <Image
                  src={logo}
                  alt="LOGO"
                  className="h-[2rem] w-[2rem] lg:h-[2.4em] lg:w-[2.4em]"
                ></Image>
                <span className="block font-extrabold text-[2rem] lg:text-[2.4em] tracking-[0.4em]">
                  OLVIFY
                </span>
              </motion.div>
              <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.1,
                }}
              >
                <TextAnimation />
              </motion.div>
              <motion.div
                className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:flex-row lg:text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                }}
              >
                <span className="text-[1.4rem]">Touching the untouched</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  );
}
