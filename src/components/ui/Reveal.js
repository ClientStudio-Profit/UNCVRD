"use client";
import { motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, margin: "0px 0px -12% 0px" };

// Fade + rise when scrolled into view.
export function Reveal({ children, className = "", delay = 0, y = 28, as = "div", ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Headline revealed line by line from behind a mask.
// lines: array of strings or { t: "TEXT", accent: true }.
// The in-view trigger sits on the heading itself (the masked lines start
// fully clipped, so they can't be observed directly).
export function TitleReveal({ lines, className = "", as = "h2", delay = 0, onLoad = false }) {
  const Tag = motion[as] || motion.h2;
  const trigger = onLoad ? { animate: "show" } : { whileInView: "show", viewport };
  return (
    <Tag className={`display ${className}`} initial="hidden" {...trigger}>
      {lines.map((line, i) => {
        const text = typeof line === "string" ? line : line.t;
        const accent = typeof line === "object" && line.accent;
        return (
          <span key={i} className="block overflow-hidden pt-[0.06em] -mt-[0.06em] pb-[0.04em]">
            <motion.span
              className={`block ${accent ? "text-ember" : ""}`}
              variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
              transition={{ duration: 1, delay: delay + i * 0.09, ease }}
            >
              {text}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}

// Image wipe-in with a slow settle.
export function ImageReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={viewport}
      transition={{ duration: 1.1, delay, ease }}
    >
      <motion.div
        className="h-full w-full"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.6, delay, ease }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
