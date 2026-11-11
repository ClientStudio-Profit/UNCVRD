import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import ProcessRow from "@/components/ui/ProcessRow";
import Icon from "@/components/ui/Icon";
import PageContainer from "@/components/layout/PageContainer";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  return { title: p ? p.title : "Project" };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { previous, next } = getAdjacentProjects(slug);

  const facts = [
    ["Client", project.client],
    ["Category", project.format || project.category],
    ["Duration", project.duration],
    ["Release", project.year],
  ];

  return (
    <>
      <PageHero
        image={project.heroImage}
        back={{ href: "/works", label: "Back to Works" }}
        lines={[project.title]}
        subtitle={`${project.format || project.category} — ${project.year}`}
      >
        <VideoPlaceholder variant="button" src={project.video} poster={project.posterImage} title={project.title} label="Watch full film" />
      </PageHero>

      <section className="ember-wash">
        <PageContainer className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Overview</Reveal>
            <TitleReveal lines={project.headline.split(" ").reduce((acc, w) => {
              const last = acc[acc.length - 1];
              if (last && (last + " " + w).length <= 16) acc[acc.length - 1] = last + " " + w; else acc.push(w);
              return acc;
            }, [])} className="text-5xl md:text-6xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
          </div>
          <Reveal className="lg:col-span-4" delay={0.15}>
            <p className="text-[0.95rem] leading-relaxed text-bone/85">{project.description}</p>
            {project.placeholder && <p className="label mt-6 text-bone/60">Sample content — placeholder project</p>}
          </Reveal>
          <Reveal className="lg:col-span-4 lg:border-l lg:border-bone/20 lg:pl-10" delay={0.25}>
            <dl>
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-b border-bone/15 py-3 first:pt-0">
                  <dt className="label text-bone/70">{k}</dt>
                  <dd className="label text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </PageContainer>
      </section>

      <PageContainer as="section" className="py-14">
        <ImageReveal className="relative aspect-video">
          <VideoPlaceholder src={project.video} poster={project.posterImage} title={project.title} label="Film showcase" className="absolute inset-0 h-full" />
        </ImageReveal>
      </PageContainer>

      <PageContainer as="section" className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Reveal as="p" className="eyebrow mb-4" y={10}>The Process</Reveal>
          <TitleReveal lines={["From idea", "to screen."]} className="text-5xl md:text-6xl" />
        </div>
        <ProcessRow steps={project.process} className="lg:col-span-9" />
      </PageContainer>

      <section className="overflow-hidden border-t hairline">
        <PageContainer className="grid gap-8 py-16 lg:grid-cols-12 lg:items-center">
          <ImageReveal className="aspect-[4/5] lg:col-span-5">
            <ImagePlaceholder src={project.gallery[0]} alt="" sizes="(min-width: 1024px) 40vw, 100vw" className="h-full w-full" />
          </ImageReveal>
          <div className="grid grid-cols-2 gap-3 lg:col-span-4">
            {project.gallery.slice(1, 4).map((src, i) => (
              <ImageReveal key={src} delay={i * 0.1} className={i === 2 ? "col-span-2 aspect-[16/9]" : "aspect-square"}>
                <ImagePlaceholder src={src} alt="" sizes="25vw" className="h-full w-full" imgClassName="grayscale hover:grayscale-0 transition duration-700" />
              </ImageReveal>
            ))}
          </div>
          <div className="lg:col-span-3 lg:pl-6">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Behind The Scenes</Reveal>
            <TitleReveal lines={["The people", "behind", "the story."]} className="text-5xl md:text-6xl" />
            <Reveal as="p" delay={0.2} className="mt-6 text-sm leading-relaxed text-bone/70">
              A look at the process, the team, and the small moments that brought this project to life.
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="border-t hairline">
        <PageContainer className="grid gap-8 py-12 lg:grid-cols-[10rem_1fr] lg:items-center">
          <h2 className="eyebrow">Credits</h2>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
            {project.credits.map((c) => (
              <div key={c.role} className="lg:border-l lg:border-bone/15 lg:px-5">
                <dt className="label text-[0.6rem] text-bone/60">{c.role}</dt>
                <dd className="mt-1 text-sm">{c.name}</dd>
              </div>
            ))}
          </dl>
        </PageContainer>
      </section>

      <nav aria-label="More projects" className="border-t hairline bg-gradient-to-b from-ink to-[#2a0a04]">
        <PageContainer className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-10">
          <Link href={`/works/${previous.slug}`} className="group flex items-center gap-4 sm:gap-6">
            <ImagePlaceholder src={previous.cardImage} alt="" sizes="140px" className="hidden aspect-[4/3] w-28 shrink-0 sm:block lg:w-36" imgClassName="transition-transform duration-700 group-hover:scale-110" />
            <span>
              <span className="label flex items-center gap-2 text-bone/60"><Icon name="arrowLeft" size={14} /> Previous</span>
              <span className="display mt-1 block text-3xl md:text-4xl group-hover:text-ember transition-colors">{previous.title}</span>
            </span>
          </Link>
          <Link href="/works" aria-label="All works" className="grid h-12 w-12 place-items-center hover:text-ember"><Icon name="grid" size={22} /></Link>
          <Link href={`/works/${next.slug}`} className="group flex items-center justify-end gap-4 text-right sm:gap-6">
            <span>
              <span className="label flex items-center justify-end gap-2 text-bone/60">Next <Icon name="arrow" size={14} /></span>
              <span className="display mt-1 block text-3xl md:text-4xl group-hover:text-ember transition-colors">{next.title}</span>
            </span>
            <ImagePlaceholder src={next.cardImage} alt="" sizes="140px" className="hidden aspect-[4/3] w-28 shrink-0 sm:block lg:w-36" imgClassName="transition-transform duration-700 group-hover:scale-110" />
          </Link>
        </PageContainer>
      </nav>
    </>
  );
}
