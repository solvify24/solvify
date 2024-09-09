"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import { useHasMounted, useSectionInView } from "@/common/lib/hooks";
import SectionHeading from "@/common/components/shared/section-heading";
import { approachData } from "@/common/lib/data";
import SectionDivider from "@/common/components/shared/section-divider";

export default function Approach() {
  const { ref } = useSectionInView("approach", 0.3);
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();

  return (
    <section
      id="approach"
      ref={ref}
      className="w-full flex flex-col items-center scroll-mt-12 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>Our Approach</SectionHeading>
      <div className="px-8 py-8 sm:w-[80%] lg:w-[1040px] xl:w-[1180px] flex flex-col gap-12 relative font-medium text-primary lg:text-lg xl:text-md">
        <span>
          At Solvify, we believe in a customer-centric approach that involves
          deeply understanding the needs of our users and the challenges they
          face. Our unique process ensures that every solution we develop is
          thoroughly researched, meticulously crafted, and rigorously tested.
          Our methodology includes the following steps:
        </span>
        <VerticalTimeline
          animate={false}
          lineColor={
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"
          }
        >
          {ihasMounted &&
            approachData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background:
                      theme === "light"
                        ? "#f3f4f6"
                        : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    display: "none",
                  }}
                  iconStyle={{
                    display: "none",
                  }}
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
        </VerticalTimeline>
        <span>
          Our emphasis on continuous feedback and iteration ensures that our
          solutions are not only effective but also aligned with the evolving
          needs of our customers.
        </span>
      </div>
      <SectionDivider />
    </section>
  );
}
