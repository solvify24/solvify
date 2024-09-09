"use client";

import { useRef } from "react";
import { productsData } from "@/common/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProductProps = (typeof productsData)[number];

export default function Product({
  title,
  description,
  imageUrl,
  link,
}: ProductProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0.36"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <Link href={link} target="_blank">
        <section
          className={
            "relative flex flex-col md:flex-row max-w-[52rem] overflow-hidden rounded-lg border transition hover:bg-gray-200 dark:hover:bg-darkOcean md:h-[30rem]"
          }
        >
          <div className="flex h-full flex-col px-5 pb-7 pt-4 md:max-w-[50%] md:pl-10 md:pr-2 md:pt-10 md:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold uppercase"> {title}</h3>
            <p className="mt-2 leading-relaxed">{description}</p>
          </div>

          <Image
            src={imageUrl}
            alt="Our Product"
            quality={95}
            className="w-full md:w-[28.25rem] rounded-t-lg transition md:group-hover:-translate-x-3 md:group-hover:-translate-y-0 group-hover:-translate-y-3 md:group-even:group-hover:translate-y-0 md:group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 md:block"
          />
        </section>
      </Link>
    </motion.div>
  );
}
