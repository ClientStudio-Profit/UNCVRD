"use client";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/Icon";

// Accessible accordion: real <button>s with aria-expanded/aria-controls,
// Tab/Enter/Space natively, plus Arrow/Home/End to move between questions.
export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0);
  const base = useId();

  const onKeyDown = (e, i) => {
    const buttons = e.currentTarget.closest("ul").querySelectorAll("button[data-faq]");
    const move = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: buttons.length - 1 }[e.key];
    if (move === undefined) return;
    e.preventDefault();
    buttons[(move + buttons.length) % buttons.length].focus();
  };

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        return (
          <li key={item.question} className={`border transition-colors duration-300 ${isOpen ? "border-ember/70 bg-ember/5" : "hairline hover:border-bone/40"}`}>
            <h3>
              <button
                type="button"
                data-faq
                id={`${base}-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="flex min-h-14 w-full items-center justify-between gap-6 px-5 py-3 text-left text-[0.95rem] font-bold"
              >
                {item.question}
                <Icon name={isOpen ? "minus" : "plus"} size={18} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={`${base}-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl px-5 pb-6 text-sm leading-relaxed text-bone/80">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
