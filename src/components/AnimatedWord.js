"use client";
import { motion } from "framer-motion";

// Single word/label that fades up on load. Used for staggered hero details.
export default function AnimatedWord({ label, delay = 0, className = "", as = "span" }) {
  const Tag = motion[as] || motion.span;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {label}
    </Tag>
  );
}
