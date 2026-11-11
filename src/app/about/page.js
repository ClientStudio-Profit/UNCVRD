import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ProcessRow from "@/components/ui/ProcessRow";
import CTASection from "@/components/ui/CTASection";
import Icon from "@/components/ui/Icon";
import PageContainer from "@/components/layout/PageContainer";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";
import { approach, team, values } from "@/data/about";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/assets/images/about/about-hero.jpg"
        eyebrow="About UNCVRD"
        lines={["More than", "a production.", { t: "A creative", accent: true }, { t: "collective.", accent: true }]}
        subtitle="A film production studio that uncovers real stories, crafts visual experiences, and creates meaningful impact."
      />

      <section className="border-b hairline">
        <div className="grid lg:grid-cols-2">
          <ImageReveal className="aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]">
            <ImagePlaceholder src="/assets/images/about/about-story.jpg" alt="" sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full" />
          </ImageReveal>
          <div className="grid gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-14">
            <div>
              <Reveal as="p" className="eyebrow mb-4" y={10}>Our Story</Reveal>
              <TitleReveal lines={["The story", "behind", "UNCVRD."]} className="text-5xl md:text-6xl" />
              <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
            </div>
            <Reveal delay={0.15} className="space-y-4 text-sm leading-relaxed text-bone/80 lg:border-l lg:hairline lg:pl-8">
              <p>UNCVRD was born from a shared belief that stories have the power to move people.</p>
              <p>What started as a small creative team has grown into a film production studio that collaborates with brands, organizations, and individuals to bring bold ideas to life on screen.</p>
              <p className="label text-bone/50">Placeholder copy — replace with the studio&rsquo;s own history.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="grid lg:grid-cols-[1.1fr_1fr]">
          <ImageReveal className="aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]">
            <ImagePlaceholder src="/assets/images/about/about-philosophy.jpg" alt="" sizes="(min-width: 1024px) 55vw, 100vw" className="h-full w-full" imgClassName="grayscale" />
          </ImageReveal>
          <div className="grid gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
            <div>
              <Reveal as="p" className="eyebrow mb-4" y={10}>Our Philosophy</Reveal>
              <TitleReveal lines={["Stories", "create", "connections."]} className="text-5xl md:text-6xl" />
            </div>
            <Reveal delay={0.15} className="text-sm leading-relaxed text-bone/80 lg:border-l lg:hairline lg:pl-8">
              We believe in the power of visual storytelling — to connect people, spark conversations, and create lasting impact beyond the screen.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <PageContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-3">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Our Approach</Reveal>
            <TitleReveal lines={["How we", "work."]} className="text-6xl md:text-7xl" />
          </div>
          <ProcessRow steps={approach} className="lg:col-span-9" />
        </PageContainer>
      </section>

      <section className="border-b hairline">
        <PageContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3">
            <Reveal as="p" className="eyebrow mb-4" y={10}>The People</Reveal>
            <TitleReveal lines={["Meet", "the team."]} className="text-6xl md:text-7xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
            <p className="label mt-6 text-bone/50">Sample team — placeholder names</p>
          </div>
          <ul className="grid grid-cols-2 gap-4 lg:col-span-9 lg:grid-cols-4">
            {team.map((m, i) => (
              <li key={m.name} className={i % 2 ? "lg:mt-10" : ""}>
                <ImageReveal className="aspect-[4/5]" delay={i * 0.08}>
                  <ImagePlaceholder src={m.portrait} alt={`Portrait of ${m.name}`} sizes="(min-width: 1024px) 18vw, 45vw" className="h-full w-full" imgClassName="grayscale transition duration-700 hover:grayscale-0 hover:scale-105" />
                </ImageReveal>
                <h3 className="label mt-4 text-sm">{m.name}</h3>
                <p className="mt-1 text-sm text-bone/70">{m.position}</p>
                <p className="mt-2 text-xs leading-relaxed text-bone/55">{m.bio}</p>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section className="ember-wash relative overflow-hidden">
        <div className="sprockets absolute inset-y-0 left-0 hidden w-8 lg:block" aria-hidden="true" />
        <PageContainer className="grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:pl-24">
          <div className="lg:col-span-4">
            <Reveal as="p" className="eyebrow mb-4 !text-bone/80" y={10}>Our Values</Reveal>
            <TitleReveal lines={["What", "drives us."]} className="text-6xl md:text-7xl" />
          </div>
          <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.1}>
                <Icon name={v.icon} size={34} strokeWidth={1.1} />
                <h3 className="label mt-4">{v.title}</h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-bone/80">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </PageContainer>
      </section>

      <CTASection
        layout="center"
        image="/assets/images/about/about-closing.jpg"
        lines={["Let's create", "something meaningful."]}
        cta="Work with us"
      />
    </>
  );
}
