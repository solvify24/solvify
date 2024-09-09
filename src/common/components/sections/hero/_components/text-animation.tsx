"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function TextAnimation() {
  const count = useMotionValue(0);

  return (
    <>
      <motion.span className="w-full mx-auto my-[1.4em] flex flex-row gap-x-[0.5em] items-center justify-center mb-10 max-w-96 text-[2rem] font-extrabold lg:text-[3rem]">
        <motion.span>We</motion.span>
        <motion.span className="relative">
          <motion.span>
            <motion.span
              className="text-blue"
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0.6,
              }}
              transition={{ delay: 2 }}
            >
              penetrate
            </motion.span>
            <motion.div
              className="bg-blue"
              style={{
                position: "absolute",
                height: "6px",
                top: "50%",
              }}
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{ duration: 1, delay: 2 }}
            />
          </motion.span>
          <motion.span
            style={{ position: "absolute", x: "-50%", left: "50%" }}
            initial={{ opacity: 0, y: "-0.6em" }}
            animate={{ opacity: 1, y: "-1em" }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <span className="text-gold">create</span>
          </motion.span>
        </motion.span>
        <motion.span>market</motion.span>
        {/* <RedoAnimText delay={delay + duration} /> */}
      </motion.span>
    </>
  );
}
