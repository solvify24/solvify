"use client";

import React from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { productsData } from "@/common/lib/data";
import Product from "./_components/product";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";

export default function Projects() {
  const { ref } = useSectionInView("products", 0.15);

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="products"
      ref={ref}
    >
      <SectionHeading>Products</SectionHeading>
      <div className="px-8 py-8">
        {productsData.map((product, index) => (
          <React.Fragment key={index}>
            <Product {...product} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}
