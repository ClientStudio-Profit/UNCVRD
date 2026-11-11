"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import Icon from "./Icon";

// Video slot. `variant="frame"` renders a poster with a play control;
// `variant="button"` renders just a text trigger (e.g. "Watch Showreel").
// The player opens in a dialog. Until the real file exists at `src`, the
// dialog explains where to put it instead of showing a broken player.
export default function VideoPlaceholder({
  src,
  poster,
  title = "Video",
  label,
  variant = "frame",
  className = "",
  sizes = "100vw",
}) {
  const [open, setOpen] = useState(false);
  const [missing, setMissing] = useState(false);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  const playRing = (
    <span className="grid h-12 w-12 place-items-center rounded-full border border-bone/70 transition-colors duration-500 group-hover:border-ember group-hover:bg-ember">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );

  return (
    <>
      {variant === "button" ? (
        <button ref={triggerRef} type="button" onClick={() => setOpen(true)} className={`group inline-flex items-center gap-4 label ${className}`}>
          {playRing}
          <span>{label || title}</span>
        </button>
      ) : (
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Play ${title}`}
          className={`group relative block w-full overflow-hidden text-left ${className}`}
        >
          <ImagePlaceholder src={poster} alt="" sizes={sizes} className="absolute inset-0" imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
          <span className="absolute inset-0 bg-ink/25 transition-colors duration-500 group-hover:bg-ink/10" aria-hidden="true" />
          <span className="absolute inset-0 grid place-items-center">{playRing}</span>
          {label && <span className="label absolute bottom-5 left-5 text-bone/80">{label}</span>}
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-0 z-[80] grid place-items-center bg-ink/95 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <div className="w-full max-w-5xl">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="label text-bone/70">{title}</p>
                <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="label inline-flex min-h-11 items-center gap-2 hover:text-ember">
                  Close <Icon name="close" size={16} />
                </button>
              </div>
              <div className="cine relative aspect-video w-full overflow-hidden border hairline">
                {missing ? (
                  <div className="absolute inset-0 grid place-items-center p-6 text-center">
                    <div>
                      <p className="eyebrow mb-3">Video placeholder</p>
                      <p className="text-sm leading-relaxed text-bone/75">
                        No video file yet. Add it at
                        <br />
                        <code className="break-all text-bone">public{src}</code>
                      </p>
                    </div>
                  </div>
                ) : (
                  <video className="absolute inset-0 h-full w-full bg-ink object-contain" src={src} poster={poster} controls autoPlay playsInline onError={() => setMissing(true)} />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
