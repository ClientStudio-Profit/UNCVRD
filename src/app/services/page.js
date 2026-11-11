import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ProcessRow from "@/components/ui/ProcessRow";
import CTASection from "@/components/ui/CTASection";
import ArrowLink from "@/components/ui/ArrowLink";
import Numeral from "@/components/ui/Numeral";
import PageContainer from "@/components/layout/PageContainer";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";
import { services, workflow } from "@/data/services";

export const metadata = { title: "Services" };

// Alternating asymmetric compositions.
const layouts = [
  { img: "lg:col-span-7", text: "lg:col-span-5", ratio: "aspect-[4/3]" },
  { img: "lg:col-span-5 lg:order-last", text: "lg:col-span-7 lg:pr-16", ratio: "aspect-[4/5] lg:aspect-[1/1]" },
  { img: "lg:col-span-6 lg:col-start-2", text: "lg:col-span-4", ratio: "aspect-[16/10]" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/assets/images/services/services-hero.jpg"
        eyebrow="What we do"
        lines={["Our", { t: "services.", accent: true }]}
        subtitle="End-to-end film and visual production services that turn ideas into powerful stories."
      />

      <PageContainer as="section" className="space-y-20 py-16 lg:space-y-28 lg:py-24">
        {services.map((s, i) => {
          const l = layouts[i % layouts.length];
          return (
            <article key={s.slug} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
              <ImageReveal className={`${l.img} ${l.ratio} relative`}>
                <Link href={`/services/${s.slug}`} aria-label={s.title} className="group absolute inset-0 block">
                  <ImagePlaceholder src={s.image} alt="" sizes="(min-width: 1024px) 55vw, 100vw" className="absolute inset-0" imgClassName="transition-transform duration-[1400ms] group-hover:scale-105" />
                </Link>
              </ImageReveal>
              <div className={l.text}>
                <Reveal><Numeral className="text-sm text-bone/60">{s.number}</Numeral></Reveal>
                <Reveal as="span" className="rule my-4" y={0} delay={0.1} />
                <TitleReveal as="h2" lines={s.titleLines} className="text-[clamp(3.5rem,7vw,6.5rem)]" />
                <Reveal as="p" delay={0.2} className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-bone/75">{s.description}</Reveal>
                <Reveal delay={0.3} className="mt-3"><ArrowLink href={`/services/${s.slug}`}>Learn more</ArrowLink></Reveal>
              </div>
            </article>
          );
        })}
      </PageContainer>

      <section className="border-y hairline bg-coal">
        <PageContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Our Workflow</Reveal>
            <TitleReveal lines={["From idea", "to impact."]} className="text-5xl md:text-6xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
          </div>
          <ProcessRow steps={workflow} className="lg:col-span-9" />
        </PageContainer>
      </section>

      <CTASection image="/assets/images/services/services-closing.jpg" lines={["Have a project", "in mind?"]} text="Let's create something meaningful together." cta="Get in touch" />
    </>
  );
}
