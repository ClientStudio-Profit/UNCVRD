import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ProcessRow from "@/components/ui/ProcessRow";
import ProjectCard from "@/components/ui/ProjectCard";
import CTASection from "@/components/ui/CTASection";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import Icon from "@/components/ui/Icon";
import PageContainer from "@/components/layout/PageContainer";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  return { title: s ? s.title : "Service" };
}

const deliverableIcons = ["clap", "camera", "play", "layers"];

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = projects.filter((p) => s.relatedCategories.includes(p.category)).slice(0, 3);

  return (
    <>
      <PageHero
        image={s.heroImage}
        back={{ href: "/services", label: "Back to Services" }}
        eyebrow="Our services"
        lines={s.titleLines.map((t, i, a) => (i === a.length - 1 ? { t: t + ".", accent: true } : t))}
        subtitle={s.subtitle}
      >
        <VideoPlaceholder variant="button" src={`/assets/videos/services/${s.slug}.mp4`} poster={s.heroImage} title={`${s.title} reel`} label="Watch process reel" />
      </PageHero>

      <section className="border-b hairline">
        <PageContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Overview</Reveal>
            <TitleReveal lines={[s.overviewTitle]} className="text-5xl md:text-6xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
          </div>
          <Reveal className="lg:col-span-4" delay={0.15}>
            <p className="text-[0.95rem] leading-relaxed text-bone/80">{s.overview}</p>
            <p className="label mt-6 text-bone/50">Placeholder copy</p>
          </Reveal>
          <ul className="space-y-5 lg:col-span-4 lg:border-l lg:hairline lg:pl-10">
            {s.deliverables.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 0.08} className="flex items-start gap-5">
                <Icon name={deliverableIcons[i % 4]} size={30} strokeWidth={1.1} />
                <div>
                  <p className="label">{d.title}</p>
                  <p className="mt-1 text-sm text-bone/65">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section className="relative overflow-hidden border-b hairline">
        <ImagePlaceholder src={s.capabilitiesImage} alt="" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/20 via-ink/50 to-ink" aria-hidden="true" />
        <PageContainer className="relative grid min-h-[26rem] items-center py-16 lg:grid-cols-2">
          <div className="lg:col-start-2">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Our capabilities</Reveal>
            <TitleReveal lines={["What", "we handle."]} className="text-5xl md:text-6xl" />
            <ul className="mt-8 space-y-3">
              {s.capabilities.map((c, i) => (
                <Reveal as="li" key={c} delay={i * 0.06} className="flex items-center gap-4 text-sm">
                  <Icon name="check" size={20} className="text-ember" />
                  {c}
                </Reveal>
              ))}
            </ul>
          </div>
        </PageContainer>
      </section>

      <section className="border-b hairline">
        <PageContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Our process</Reveal>
            <TitleReveal lines={["The", "production", "journey."]} className="text-5xl md:text-6xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
          </div>
          <ProcessRow steps={s.process} className="lg:col-span-9" />
        </PageContainer>
      </section>

      <section>
        <PageContainer className="py-14">
          <Reveal as="h2" className="eyebrow mb-8" y={10}>Related works</Reveal>
          <p className="sr-only">Sample projects shown for layout testing.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} image={`/assets/images/services/service-detail-related-0${i + 1}.jpg`} className="aspect-[4/3]" titleClassName="text-3xl md:text-4xl" sizes="(min-width: 768px) 33vw, 100vw" delay={i * 0.08} />
            ))}
          </div>
        </PageContainer>
      </section>

      <CTASection image={s.closingImage} lines={s.closingTitle.replace(/\.$/, "").split(/(?= your )/).map((t) => t.trim())} cta="Start a project" />
    </>
  );
}
