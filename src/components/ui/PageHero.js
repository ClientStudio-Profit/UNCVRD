import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import Icon from "./Icon";
import { Reveal, TitleReveal } from "./Reveal";

// Shared cinematic hero for inner pages.
export default function PageHero({ image, eyebrow, lines, subtitle, back, children, tall = false, aside }) {
  return (
    <section className={`grain relative flex ${tall ? "min-h-[100svh]" : "min-h-[78svh]"} items-end overflow-hidden`}>
      <ImagePlaceholder src={image} alt="" priority className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-14 pt-36 sm:px-8 md:pb-20 lg:px-14">
        {back && (
          <Reveal y={10} className="mb-6">
            <Link href={back.href} className="label group inline-flex min-h-11 items-center gap-3 hover:text-ember">
              <Icon name="arrowLeft" size={16} className="transition-transform duration-500 group-hover:-translate-x-1" />
              {back.label}
            </Link>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal as="p" y={10} className="label mb-5 tracking-[0.4em] text-bone/85">
            {eyebrow}
          </Reveal>
        )}
        <TitleReveal as="h1" onLoad lines={lines} delay={0.15} className="text-[clamp(4.25rem,12vw,10rem)]" />
        {subtitle && (
          <Reveal as="p" delay={0.5} className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-bone/85">
            {subtitle}
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.65} className="mt-8">
            {children}
          </Reveal>
        )}
      </div>
      {aside}
    </section>
  );
}
