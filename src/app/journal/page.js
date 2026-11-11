import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import PageContainer from "@/components/layout/PageContainer";
import JournalBrowser from "@/components/journal/JournalBrowser";
import NewsletterForm from "@/components/journal/NewsletterForm";
import { Reveal, TitleReveal } from "@/components/ui/Reveal";
import { articleCategories, articles } from "@/data/articles";

export const metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <>
      <PageHero
        image="/assets/images/journal/journal-hero.jpg"
        eyebrow="Journal / Stories"
        lines={["Stories", "beyond", { t: "the frame.", accent: true }]}
        subtitle="Insights, processes, and real stories from our production journey."
      />
      <JournalBrowser articles={articles} categories={articleCategories} />

      <section className="relative flex min-h-[16rem] items-center overflow-hidden border-y hairline">
        <ImagePlaceholder src="/assets/images/journal/journal-banner.jpg" alt="" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/10 to-ink/80" aria-hidden="true" />
        <PageContainer className="relative flex justify-end py-14">
          <Reveal as="p" className="max-w-md border-l border-ember pl-6 text-2xl italic leading-snug md:text-3xl">
            Ideas, people, process, and all the stories in between.
          </Reveal>
        </PageContainer>
      </section>

      <section className="grain relative overflow-hidden">
        <ImagePlaceholder src="/assets/images/journal/journal-newsletter.jpg" alt="" className="absolute inset-0" />
        <div className="ember-wash absolute inset-0 opacity-80 mix-blend-multiply" aria-hidden="true" />
        <PageContainer className="relative grid gap-8 py-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:col-start-2">
            <Reveal as="p" className="label mb-4" y={10}>Stay in the loop</Reveal>
            <TitleReveal lines={["Get our latest stories."]} className="text-[clamp(3.5rem,6vw,5.5rem)]" />
            <Reveal as="p" delay={0.2} className="mb-8 mt-5 max-w-md text-[0.95rem] leading-relaxed text-bone/85">
              Subscribe to our journal and be the first to get new articles, behind-the-scenes, and project updates.
            </Reveal>
            <NewsletterForm />
          </div>
        </PageContainer>
      </section>
    </>
  );
}
