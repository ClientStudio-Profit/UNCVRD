import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import { ImageReveal } from "./Reveal";

// Project tile. Size and proportion come from className so cards can vary.
export default function ProjectCard({ project, image, className = "aspect-[16/9]", sizes = "(min-width: 768px) 50vw, 100vw", titleClassName = "text-4xl md:text-5xl", delay = 0 }) {
  return (
    <ImageReveal className={className} delay={delay}>
      <Link href={`/works/${project.slug}`} className="group relative block h-full w-full overflow-hidden">
        <ImagePlaceholder
          src={image || project.cardImage}
          alt=""
          sizes={sizes}
          className="absolute inset-0"
          imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" aria-hidden="true" />
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
          <span>
            <span className={`display block ${titleClassName}`}>{project.title}</span>
            <span className="label mt-3 flex items-center gap-3 text-bone/75">
              {project.format || project.category}
              <span className="h-px w-5 bg-bone/50" aria-hidden="true" />
              {project.year}
            </span>
          </span>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-bone/60 transition-all duration-500 group-hover:scale-110 group-hover:border-ember group-hover:bg-ember" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </Link>
    </ImageReveal>
  );
}
