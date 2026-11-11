"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { isActive } from "./navUtils";

const linkClass = (active) =>
  `label relative inline-flex min-h-11 items-center gap-1.5 transition-colors duration-300 hover:text-ember ${active ? "text-ember" : "text-bone"}`;

const ActiveDot = () => <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ember" aria-hidden="true" />;

function Dropdown({ item, active, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => !ref.current?.contains(e.relatedTarget) && setOpen(false)}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <div className="flex items-center">
        <Link href={item.href} className={linkClass(active)} aria-current={pathname === item.href ? "page" : active ? "true" : undefined}>
          {item.label}
          {active && <ActiveDot />}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="services-menu"
          aria-label={`${item.label} categories`}
          onClick={(e) => setOpen((v) => (e.detail === 0 ? !v : true))}
          className={`grid h-11 w-7 place-items-center hover:text-ember ${active ? "text-ember" : ""}`}
        >
          <Icon name="chevron" size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            id="services-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 top-full w-72 border hairline bg-coal/95 py-3 backdrop-blur-md"
          >
            {item.children.map((child, i) => {
              const current = pathname === child.href;
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    aria-current={current ? "page" : undefined}
                    className={`label flex min-h-11 items-center gap-4 px-5 transition-colors duration-300 hover:bg-bone/5 hover:text-ember ${current ? "text-ember" : ""}`}
                  >
                    <span className="text-bone/40">{String(i + 1).padStart(2, "0")}</span>
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

// Dropdown: hover opens it, so a mouse click keeps it open; keyboard activation toggles.
export default function DesktopNav({ items, pathname }) {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-7 xl:gap-9">
        {items.map((item) => {
          const active = isActive(pathname, item.href);
          return item.children ? (
            <Dropdown key={item.href} item={item} active={active} pathname={pathname} />
          ) : (
            <li key={item.href}>
              <Link href={item.href} className={linkClass(active)} aria-current={active ? "page" : undefined}>
                {item.label}
                {active && <ActiveDot />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
