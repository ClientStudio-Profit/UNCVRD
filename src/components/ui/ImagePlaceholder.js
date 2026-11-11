import Image from "next/image";

// Image slot with a dark cinematic base treatment underneath.
// Swap `src` for the real asset when it arrives — nothing else changes.
// Set the box size with className (e.g. "aspect-[16/9]" or "absolute inset-0").
export default function ImagePlaceholder({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  shade = false,
  children,
}) {
  const positioned = /\b(absolute|fixed)\b/.test(className);
  return (
    <div className={`cine overflow-hidden ${positioned ? "" : "relative"} ${className}`}>
      {src && (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imgClassName}`} />
      )}
      {shade && <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50" aria-hidden="true" />}
      {children}
    </div>
  );
}
