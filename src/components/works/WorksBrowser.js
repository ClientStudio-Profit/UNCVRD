"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projectCategories } from "@/data/projects";

const PAGE_SIZE = 6;
const tabs = ["All Works", ...projectCategories];

// Repeating composition: wide + tall pair, then a full-width banner, etc.
// Each slot has its own size, proportion, and offset.
const slots = [
  { col: "lg:col-span-7", ratio: "aspect-[4/3] lg:aspect-[7/5]", title: "text-5xl md:text-6xl" },
  { col: "lg:col-span-5 lg:mt-24", ratio: "aspect-[4/5]", title: "text-4xl md:text-5xl" },
  { col: "lg:col-span-4", ratio: "aspect-[4/5]", title: "text-4xl md:text-5xl" },
  { col: "lg:col-span-8 lg:-mt-10", ratio: "aspect-[16/9]", title: "text-5xl md:text-6xl" },
  { col: "lg:col-span-12", ratio: "aspect-[16/9] lg:aspect-[21/8]", title: "text-5xl md:text-7xl" },
  { col: "lg:col-span-5", ratio: "aspect-[1/1]", title: "text-4xl md:text-5xl" },
];

export default function WorksBrowser({ projects, featuredSlug }) {
  const [active, setActive] = useState("All Works");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const list = projects.filter((p) => p.slug !== featuredSlug);
    return active === "All Works" ? list : list.filter((p) => p.category === active);
  }, [projects, featuredSlug, active]);

  const shown = filtered.slice(0, visible);
  const select = (tab) => {
    setActive(tab);
    setVisible(PAGE_SIZE);
  };

  return (
    <div>
      <nav aria-label="Work categories" className="sticky top-[4.5rem] z-30 border-y hairline bg-ink/90 backdrop-blur-md">
        <ul className="mx-auto flex w-full max-w-[1400px] gap-2 overflow-x-auto px-5 sm:px-8 md:justify-center lg:px-14">
          {tabs.map((tab) => (
            <li key={tab} className="shrink-0">
              <button
                type="button"
                onClick={() => select(tab)}
                aria-pressed={active === tab}
                className={`label relative min-h-14 px-4 transition-colors duration-300 hover:text-ember ${active === tab ? "text-ember" : ""}`}
              >
                {tab}
                {active === tab && <motion.span layoutId="works-tab" className="absolute inset-x-4 bottom-2 h-0.5 bg-ember" />}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 sm:px-8 lg:px-14 lg:py-20" aria-live="polite">
        <p className="sr-only">{filtered.length} projects shown</p>
        {shown.length === 0 ? (
          <p className="py-24 text-center text-bone/70">No projects in this category yet.</p>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {shown.map((p, i) => {
                const s = slots[i % slots.length];
                return (
                  <motion.div key={`${active}-${p.slug}`} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className={s.col}>
                    <ProjectCard project={p} className={s.ratio} titleClassName={s.title} sizes="(min-width: 1024px) 60vw, 100vw" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {visible < filtered.length && (
          <Reveal className="mt-16 text-center">
            <button type="button" className="btn" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Load more works +
            </button>
          </Reveal>
        )}
      </div>
    </div>
  );
}
