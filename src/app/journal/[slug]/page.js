import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import ArrowLink from "@/components/ui/ArrowLink";
import ArticleCard from "@/components/journal/ArticleCard";
import PageContainer from "@/components/layout/PageContainer";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { articles, formatDate, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = getArticle(slug);
  return { title: a ? a.title : "Article" };
}

function Block({ block }) {
  switch (block.type) {
    case "heading":
      return <h2 className="display mb-4 mt-12 text-4xl md:text-5xl">{block.text}</h2>;
    case "paragraph":
      return <p className="mb-5 text-[1.05rem] leading-[1.8] text-bone/85">{block.text}</p>;
    case "list":
      return (
        <ul className="mb-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4 text-[1.05rem] leading-relaxed text-bone/85">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-ember" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-10 border-l-2 border-ember pl-6 md:pl-8">
          <p className="text-2xl italic leading-snug md:text-3xl">&ldquo;{block.text}&rdquo;</p>
          {block.cite && <footer className="label mt-4 text-[0.65rem] text-bone/60">{block.cite}</footer>}
        </blockquote>
      );
    case "image":
      return (
        <figure className="my-10 md:-mx-12">
          <ImageReveal className="relative aspect-[16/9]">
            <ImagePlaceholder src={block.src} alt={block.caption || ""} sizes="(min-width: 768px) 56rem, 100vw" className="absolute inset-0" />
          </ImageReveal>
          {block.caption && <figcaption className="mt-3 text-xs text-bone/55">{block.caption}</figcaption>}
        </figure>
      );
    case "video":
      return (
        <figure className="my-10 md:-mx-12">
          <VideoPlaceholder src={block.src} poster={block.poster} title={block.caption || "Video"} label="Video embed placeholder" className="aspect-video" />
          {block.caption && <figcaption className="mt-3 text-xs text-bone/55">{block.caption}</figcaption>}
        </figure>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = articles.filter((x) => x.slug !== slug && x.category === a.category).concat(articles.filter((x) => x.slug !== slug && x.category !== a.category)).slice(0, 3);

  return (
    <>
      <PageHero image={a.cover} back={{ href: "/journal", label: "Back to Journal" }} eyebrow={a.category} lines={[a.title]} />

      <PageContainer as="section" className="border-b hairline py-5">
        <dl className="label flex flex-wrap gap-x-10 gap-y-3 text-[0.65rem]">
          {[["Published", formatDate(a.date)], ["Reading time", `${a.readingTime} min`], ["Category", a.category]].map(([k, v]) => (
            <div key={k} className="flex gap-3"><dt className="text-bone/50">{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </PageContainer>

      <article className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
        <Reveal as="p" className="mb-10 text-2xl leading-snug md:text-3xl">{a.intro}</Reveal>
        <p className="label mb-8 text-[0.6rem] text-bone/45">Sample article — placeholder content</p>
        {a.content.map((b, i) => <Block key={i} block={b} />)}
      </article>

      <section className="border-t hairline">
        <PageContainer className="py-14">
          <h2 className="eyebrow mb-6">In pictures</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {a.gallery.map((src, i) => (
              <ImageReveal key={src} delay={i * 0.08} className={i === 1 ? "aspect-[4/5]" : "aspect-[3/2]"}>
                <ImagePlaceholder src={src} alt="" sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full" />
              </ImageReveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-t hairline bg-coal">
        <PageContainer className="py-14">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="display text-4xl">Related stories</h2>
            <ArrowLink href="/journal">Back to journal</ArrowLink>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((r, i) => <ArticleCard key={r.slug} article={r} delay={i * 0.08} />)}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
