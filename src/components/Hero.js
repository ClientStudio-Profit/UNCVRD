"use client";
import { motion } from "framer-motion";
import AnimatedWord from "./AnimatedWord";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { TitleReveal } from "@/components/ui/Reveal";
import { projectCategories } from "@/data/projects";
import { media } from "@/data/site";

const headline = ["We believe", "you have", { t: "a story", accent: true }, "worth telling."];

export default function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-end overflow-hidden">
      <motion.div className="absolute inset-0" initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}>
        <ImagePlaceholder src="/assets/images/home/home-hero-poster.jpg" alt="" priority className="absolute inset-0" />
        {media.homeHeroLoop && (
          <video className="absolute inset-0 h-full w-full object-cover" src={media.homeHeroLoop} poster="/assets/images/home/home-hero-poster.jpg" autoPlay muted loop playsInline aria-hidden="true" />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-24 pt-32 sm:px-8 lg:px-14">
        <AnimatedWord as="p" label="A Film Production Studio" delay={0.1} className="label mb-6 block tracking-[0.5em] text-bone/85" />
        <TitleReveal as="h1" onLoad lines={headline} delay={0.25} className="text-[clamp(4.5rem,13.5vw,11.5rem)]" />
        <motion.div className="mt-9" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
          <VideoPlaceholder variant="button" src={media.showreel} poster={media.showreelPoster} title="UNCVRD Showreel" label="Watch Showreel" />
        </motion.div>
      </div>

      <ul className="absolute bottom-28 right-14 z-10 hidden border-l border-bone/40 pl-5 lg:block" aria-label="Disciplines">
        {projectCategories.map((c, i) => (
          <li key={c}>
            <AnimatedWord label={c} delay={1 + i * 0.12} className="label block py-1.5" />
          </li>
        ))}
      </ul>

      <motion.div
        className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-hidden="true"
      >
        <span className="label text-[0.6rem] text-bone/70">Scroll</span>
        <span className="relative block h-14 w-px overflow-hidden bg-bone/20">
          <motion.span className="absolute inset-x-0 top-0 h-1/2 bg-bone" animate={{ y: ["-100%", "220%"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
        </span>
      </motion.div>
    </section>
  );
}
