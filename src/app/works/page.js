import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ArrowLink from "@/components/ui/ArrowLink";
import CTASection from "@/components/ui/CTASection";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import WorksBrowser from "@/components/works/WorksBrowser";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";
import { featuredProject, projects } from "@/data/projects";
import { media } from "@/data/site";

export const metadata = { title: "Works" };

export default function WorksPage() {
  const f = featuredProject;
  return (
    <>
      <PageHero
        image="/assets/images/works/works-hero.jpg"
        eyebrow="Our Works"
        lines={["Stories", { t: "we create.", accent: true }]}
        subtitle="A collection of films, commercials, and visual stories that turns ideas into real impact."
      >
        <VideoPlaceholder variant="button" src={media.showreel} poster={media.showreelPoster} title="UNCVRD Showreel" label="Watch Showreel" />
      </PageHero>

      <section className="mx-auto w-full max-w-[1400px] px-5 pt-14 sm:px-8 lg:px-14">
        <ImageReveal className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/8]">
          <Link href={`/works/${f.slug}`} className="group absolute inset-0 block">
            <ImagePlaceholder src="/assets/images/works/works-featured-01.jpg" alt="" sizes="100vw" className="absolute inset-0" imgClassName="transition-transform duration-[1600ms] group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-[#7c1a08]/70" aria-hidden="true" />
            <span className="sprockets absolute inset-y-0 right-[24%] hidden w-7 -skew-x-6 opacity-90 lg:block" aria-hidden="true" />
            <span className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
              <span className="label text-bone/85">Featured Project</span>
              <span className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <span>
                  <span className="display block text-[clamp(4rem,9vw,8rem)]">{f.title}</span>
                  <span className="label mt-4 flex items-center gap-3 text-bone/85">
                    {f.format}
                    <span className="h-px w-6 bg-bone/50" aria-hidden="true" />
                    {f.year}
                  </span>
                </span>
                <span className="max-w-[14rem] text-sm leading-relaxed text-bone/90">
                  {f.description.split(".")[0]}.
                  <span className="label mt-4 flex items-center gap-2 text-bone">View project ↗</span>
                </span>
              </span>
            </span>
          </Link>
        </ImageReveal>
      </section>

      <WorksBrowser projects={projects} featuredSlug={f.slug} />

      <CTASection
        image="/assets/images/works/works-closing.jpg"
        lines={["Have a project", "in mind?"]}
        text="Let's create something meaningful together."
        cta="Start a project"
      />
    </>
  );
}
