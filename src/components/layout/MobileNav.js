"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import SocialLinks from "./SocialLinks";
import { isActive } from "./navUtils";

export default function MobileNav({ items, pathname, open, onClose }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-40 overflow-y-auto bg-ink lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="cine pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <nav aria-label="Mobile" className="relative flex min-h-full flex-col px-5 pb-10 pt-28 sm:px-8">
            <ul className="flex-1">
              {items.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b hairline"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={`display flex min-h-16 flex-1 items-center text-5xl ${active ? "text-ember" : ""}`}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls="mobile-services"
                          aria-label={`${item.label} categories`}
                          onClick={() => setExpanded((v) => !v)}
                          className="grid h-14 w-14 place-items-center"
                        >
                          <Icon name={expanded ? "minus" : "plus"} size={22} />
                        </button>
                      )}
                    </div>
                    {item.children && expanded && (
                      <ul id="mobile-services" className="pb-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} onClick={onClose} className={`label flex min-h-11 items-center ${pathname === child.href ? "text-ember" : "text-bone/75"}`}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                );
              })}
            </ul>
            <SocialLinks boxed className="mt-10" />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
