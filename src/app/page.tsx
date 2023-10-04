import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="overflow-x-hidden overflow-y-visible pt-20">
      <Hero />
      <Intro />
      <Skills />
      <About />
    </main>
  );
}
