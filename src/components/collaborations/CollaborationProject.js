import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { ImageReveal } from "@/components/ui/Reveal";

export default function CollaborationProject({ item, delay = 0 }) {
  return (
    <article>
      <Link href={`/works/${item.projectSlug}`} className="group block">
        <ImageReveal className="relative aspect-[3/2]" delay={delay}>
          <ImagePlaceholder src={item.image} alt="" sizes="(min-width: 768px) 33vw, 100vw" className="absolute inset-0" imgClassName="transition-transform duration-[1400ms] group-hover:scale-105" />
          <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-bone/70 transition-colors duration-500 group-hover:border-ember group-hover:bg-ember" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </ImageReveal>
        <p className="label mt-4 flex gap-3 text-[0.65rem]">
          <span className="text-ember">{item.category}</span><span className="text-bone/40">—</span><span className="text-bone/70">{item.client}</span>
        </p>
        <h3 className="display mt-2 text-3xl transition-colors group-hover:text-ember md:text-4xl">{item.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-bone/70">{item.description}</p>
      </Link>
    </article>
  );
}
