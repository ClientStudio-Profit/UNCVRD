import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ArrowLink from "@/components/ui/ArrowLink";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";

export default function FeaturedArticle({ article }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <ImageReveal className="relative aspect-[16/11] lg:col-span-7">
        <ImagePlaceholder src={article.cover} alt="" sizes="(min-width: 1024px) 58vw, 100vw" className="absolute inset-0" />
        <span className="label absolute left-4 top-4 bg-ember px-3 py-2 text-[0.65rem]">Featured</span>
      </ImageReveal>
      <div className="lg:col-span-5">
        <Reveal as="p" className="label mb-4 flex gap-3 text-[0.65rem] text-bone/70" y={10}>
          {article.category}
          <span aria-hidden="true">—</span>
          {article.readingTime} min read
        </Reveal>
        <TitleReveal lines={[article.title]} className="text-5xl md:text-6xl" />
        <Reveal as="p" delay={0.2} className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-bone/80">{article.excerpt}</Reveal>
        <Reveal delay={0.3} className="mt-6">
          <ArrowLink href={`/journal/${article.slug}`} variant="ring">Read article</ArrowLink>
        </Reveal>
      </div>
    </div>
  );
}
