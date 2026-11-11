import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import ArrowLink from "@/components/ui/ArrowLink";
import Icon from "@/components/ui/Icon";
import PageContainer from "@/components/layout/PageContainer";
import ClientLogo from "@/components/collaborations/ClientLogo";
import CollaboratorLogo from "@/components/collaborations/CollaboratorLogo";
import CollaborationProject from "@/components/collaborations/CollaborationProject";
import { Reveal, TitleReveal } from "@/components/ui/Reveal";
import { clients, collaborators, featuredCollaborations, pillars } from "@/data/collaborations";

export const metadata = { title: "Clients & Collaborations" };

export default function CollaborationsPage() {
  return (
    <>
      <PageHero
        image="/assets/images/collaborations/collabs-hero.jpg"
        eyebrow="Clients & Collaborations"
        lines={["Creative", "partnerships", "that create", { t: "real impact.", accent: true }]}
        subtitle="Brands, organizations, and creators who have trusted UNCVRD to bring their stories to life."
      />

      <section className="border-b hairline">
        <PageContainer className="grid gap-8 py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4 lg:border-r lg:hairline">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Our Clients</Reveal>
            <TitleReveal lines={["Brands", "we've worked", "with."]} className="text-5xl md:text-6xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
            <p className="label mt-6 text-[0.6rem] text-bone/45">Placeholder logos — no real clients shown</p>
          </div>
          <ul className="grid grid-cols-2 gap-y-2 sm:grid-cols-4 lg:col-span-8">
            {clients.map((c) => (
              <li key={c.name}><ClientLogo {...c} /></li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section className="border-b hairline">
        <PageContainer className="py-14">
          <div className="mb-8 flex items-center justify-between">
            <Reveal as="h2" className="eyebrow" y={10}>Featured Collaborations</Reveal>
            <ArrowLink href="/works">View all works</ArrowLink>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {featuredCollaborations.map((item, i) => (
              <CollaborationProject key={item.title} item={item} delay={i * 0.1} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-b hairline">
        <PageContainer className="grid gap-8 py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-3">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Our Collaborators</Reveal>
            <TitleReveal lines={["Creative", "friends &", "partners."]} className="text-5xl md:text-6xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
          </div>
          <ul className="grid grid-cols-2 border-bone/15 lg:col-span-9 lg:grid-cols-4 [&>li]:border-bone/15 max-lg:[&>li:nth-child(odd)]:border-r max-lg:[&>li:nth-child(n+3)]:border-t lg:[&>li:not(:nth-child(4n+1))]:border-l lg:[&>li:nth-child(n+5)]:border-t">
            {collaborators.map((c) => (
              <li key={c.name}><CollaboratorLogo {...c} className="h-24" /></li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section className="border-b hairline">
        <PageContainer className="grid gap-10 py-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-3">
            <TitleReveal lines={["Why partner", "with UNCVRD?"]} className="text-4xl md:text-5xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
          </div>
          <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4 lg:gap-0">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08} className="lg:border-l lg:hairline lg:px-6">
                <Icon name={p.icon} size={30} strokeWidth={1.1} />
                <h3 className="mt-4 text-sm font-bold">{p.title}</h3>
                <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-bone/65">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </PageContainer>
      </section>

      <CTASection image="/assets/images/collaborations/collabs-closing.jpg" lines={["Let's create", "together."]} text="Have a campaign, project, or idea in mind? We're ready to collaborate." cta="Start a collaboration" />
    </>
  );
}
