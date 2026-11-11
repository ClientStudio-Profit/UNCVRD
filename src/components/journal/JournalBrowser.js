"use client";
import { useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";
import FeaturedArticle from "./FeaturedArticle";
import ArticleCategoryFilter from "./ArticleCategoryFilter";
import PageContainer from "@/components/layout/PageContainer";
import { Reveal } from "@/components/ui/Reveal";
import { articleSearchText } from "@/data/articles";

const ratios = ["aspect-[3/2]", "aspect-[4/5]", "aspect-[3/2]"];

// Filtering (category + free-text search over title and content).
export default function JournalBrowser({ articles, categories }) {
  const [category, setCategory] = useState("All Stories");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => (category === "All Stories" || a.category === category) && (!q || articleSearchText(a).includes(q)));
  }, [articles, category, query]);

  const filtering = category !== "All Stories" || query.trim() !== "";
  const featured = !filtering ? articles.find((a) => a.featured) : null;
  const latest = featured ? filtered.filter((a) => a.slug !== featured.slug) : filtered;

  return (
    <>
      <ArticleCategoryFilter categories={categories} active={category} onSelect={setCategory} query={query} onQuery={setQuery} />
      {featured && (
        <PageContainer as="section" className="py-12 lg:py-16">
          <FeaturedArticle article={featured} />
        </PageContainer>
      )}
      <PageContainer as="section" className={`pb-16 ${featured ? "" : "pt-12"}`}>
        <div className="mb-8 flex items-baseline justify-between border-b hairline pb-4">
          <h2 className="display text-4xl">{filtering ? "Results" : "Latest stories"}</h2>
          <p className="label text-[0.65rem] text-bone/60" aria-live="polite">{filtered.length} {filtered.length === 1 ? "article" : "articles"}</p>
        </div>
        {latest.length === 0 ? (
          <p className="py-16 text-center text-bone/70">No articles match your search.</p>
        ) : (
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
            {latest.map((a, i) => (
              <ArticleCard key={a.slug} article={a} ratio={ratios[i % 3]} delay={i * 0.08} className={i % 3 === 1 ? "lg:mt-12" : ""} />
            ))}
          </div>
        )}
      </PageContainer>
    </>
  );
}
