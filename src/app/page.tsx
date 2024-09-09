"use client";

import About from "@/common/components/sections/about";
import Contact from "@/common/components/sections/contact";
import Approach from "@/common/components/sections/approach";
import Hero from "@/common/components/sections/hero";
import Benefits from "@/common/components/sections/benefits";
import Products from "@/common/components/sections/products";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <Products />
      <About />
      <Approach />
      <Benefits />
      <Contact />
    </main>
  );
}
