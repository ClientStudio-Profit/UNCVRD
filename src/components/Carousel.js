"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Icon from "@/components/ui/Icon";

const ease = [0.22, 1, 0.36, 1];

// Featured-work carousel: one prominent project flanked by the previous and
// next ones. items: [{ project, image }]
export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const at = (offset) => items[(index + offset + total) % total];
  const current = at(0);
  const previous = at(-1);
  const next = at(1);
  const go = (step) => setIndex((i) => (i + step + total) % total);

  const sideTile = (item, step, className) => (
    <button
      type="button"
      onClick={() => go(step)}
      aria-label={`Show ${item.project.title}`}
      className={`group relative hidden overflow-hidden lg:block ${className}`}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={item.project.slug} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          <ImagePlaceholder src={item.image} alt="" sizes="20vw" className="absolute inset-0" imgClassName="transition-transform duration-[1400ms] group-hover:scale-105" />
          <span className="absolute inset-0 bg-ink/35 transition-colors duration-500 group-hover:bg-ink/10" />
        </motion.span>
      </AnimatePresence>
    </button>
  );

  return (
    <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-[17%_1fr_17%]" aria-roledescription="carousel" aria-label="Featured works">
      {sideTile(previous, -1, "mt-16 aspect-[1/1]")}

      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/9] lg:aspect-[2.6/1]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current.project.slug}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <Link href={`/works/${current.project.slug}`} className="group absolute inset-0 block">
              <ImagePlaceholder src={current.image} alt="" sizes="(min-width: 1024px) 66vw, 100vw" className="absolute inset-0" imgClassName="transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/10 to-transparent" aria-hidden="true" />
              <span className="absolute inset-y-0 left-0 flex flex-col justify-center p-6 md:p-12">
                <span className="mb-4 block h-px w-6 bg-bone/60" aria-hidden="true" />
                <span className="display block max-w-[5.5em] text-6xl md:text-8xl">{current.project.title}</span>
                <span className="label mt-5 flex items-center gap-3 text-bone/80">
                  {current.project.format}
                  <span className="h-px w-5 bg-bone/50" aria-hidden="true" />
                  {current.project.year}
                </span>
              </span>
              <span className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full border border-bone/70 transition-colors duration-500 group-hover:border-ember group-hover:bg-ember md:bottom-10 md:right-10" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col">
        {sideTile(next, 1, "-mt-10 aspect-[6/5]")}
        <div className="flex items-center justify-between gap-3 px-5 pt-5 sm:px-8 lg:justify-center lg:px-0">
          <p className="label text-bone/60 lg:hidden" aria-live="polite">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <div className="flex gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous project" className="grid h-11 w-11 place-items-center rounded-full border border-bone/50 transition-colors duration-300 hover:border-ember hover:bg-ember">
              <Icon name="arrowLeft" size={16} />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next project" className="grid h-11 w-11 place-items-center rounded-full border border-bone/50 transition-colors duration-300 hover:border-ember hover:bg-ember">
              <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
