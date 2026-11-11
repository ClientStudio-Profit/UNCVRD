import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { ImageReveal } from "@/components/ui/Reveal";
import { formatDate } from "@/data/articles";

export default function ArticleCard({ article, ratio = "aspect-[3/2]", sizes = "(min-width: 1024px) 33vw, 100vw", delay = 0, className = "" }) {
  return (
    <article className={className}>
      <Link href={`/journal/${article.slug}`} className="group block">
        <ImageReveal className={ratio} delay={delay}>
          <ImagePlaceholder src={article.cover} alt="" sizes={sizes} className="h-full w-full" imgClassName="transition-transform duration-[1400ms] group-hover:scale-105" />
        </ImageReveal>
        <p className="label mt-4 flex flex-wrap items-center gap-x-3 text-[0.65rem]">
          <span className="text-ember">{article.category}</span>
          <span className="text-bone/60">{article.readingTime} min read</span>
          <span className="text-bone/40">{formatDate(article.date)}</span>
        </p>
        <h3 className="display mt-2 text-3xl transition-colors duration-300 group-hover:text-ember md:text-4xl">{article.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-bone/70">{article.excerpt}</p>
      </Link>
    </article>
  );
}
