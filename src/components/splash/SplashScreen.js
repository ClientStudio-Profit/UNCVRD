"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const STAGGER = 0.3; // detik antar kata
const HOLD = 1.2; // detik logo + kata ditahan sebelum splash menutup

const words = [
  { label: "We", className: "top-6 left-5 md:left-10" },
  { label: "Believe", className: "top-6 left-1/2 -translate-x-1/2" },
  { label: "You", className: "top-6 right-5 md:right-10" },
  { label: "Have", className: "top-1/2 -translate-y-1/2 left-5 md:left-10" },
  { label: "A", className: "top-1/2 -translate-y-1/2 right-5 md:right-10" },
  { label: "Story", className: "bottom-14 left-5 md:left-10" },
  { label: "Worth", className: "bottom-14 left-1/2 -translate-x-1/2" },
  { label: "Telling", className: "bottom-14 right-5 md:right-10" },
];

// Total durasi sebelum menutup sendiri (kata terakhir muncul + jeda).
const TOTAL_MS = (words.length * STAGGER + HOLD) * 1000;

export default function SplashScreen() {
  const [open, setOpen] = useState(true);
  const [hover, setHover] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Tampil di setiap pemuatan penuh (buka web / refresh), lalu tutup otomatis setelah TOTAL_MS.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setOpen(false);
      return;
    }
    const timer = setTimeout(close, TOTAL_MS);
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  // Tentukan apakah splash perlu tampil, dan tutup otomatis setelah TOTAL_MS.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (seen || reduceMotion) {
      setOpen(false);
      return;
    }
    const timer = setTimeout(close, TOTAL_MS);
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  // Kunci scroll selama splash tampil.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="splash"
          role="dialog"
          aria-label="UNCVRD intro"
          className="splash-root cine fixed inset-0 z-[100] overflow-hidden bg-ink text-bone"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Kata-kata di sekeliling logo */}
          {words.map((word, i) => (
            <motion.span
              key={word.label}
              className={`display absolute text-3xl transition-colors duration-300 md:text-5xl ${word.className} ${hover ? "text-ember" : "text-bone"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i + 1) * STAGGER, duration: 0.6 }}
            >
              {word.label}
            </motion.span>
          ))}

          {/* Logo tengah, masuk dari atas */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Image
              src="/assets/images/logo_tr.png"
              alt="UNCVRD"
              width={360}
              height={122}
              priority
              className="h-auto w-[220px] md:w-[360px]"
            />
          </motion.div>

          {/* Lewati intro */}
          <button
            type="button"
            onClick={close}
            className="label absolute bottom-4 left-1/2 z-10 min-h-11 -translate-x-1/2 px-4 text-[0.65rem] text-bone/60 transition-colors hover:text-ember"
          >
            Skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
