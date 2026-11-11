import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ArrowLink from "@/components/ui/ArrowLink";
import Icon from "@/components/ui/Icon";
import PageContainer from "@/components/layout/PageContainer";
import SocialLinks from "@/components/layout/SocialLinks";
import InquiryForm from "@/components/contact/InquiryForm";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";
import { contact } from "@/data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const rows = [
    ["mail", contact.email, `mailto:${contact.email}`],
    ["phone", contact.phone, null],
    ["pin", contact.location, null],
  ];
  return (
    <>
      <PageHero
        image="/assets/images/contact/contact-hero.jpg"
        eyebrow="Get in touch"
        lines={["Have a", "story", { t: "to tell?", accent: true }]}
        subtitle="Let's turn your idea into a powerful visual experience."
      />

      <section className="border-y hairline">
        <PageContainer className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-4 lg:border-r lg:hairline lg:pr-10">
            <Reveal as="p" className="eyebrow mb-4" y={10}>Contact us</Reveal>
            <TitleReveal lines={["Let's", "create", "together."]} className="text-6xl md:text-7xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
            <Reveal as="p" delay={0.2} className="mt-6 max-w-xs text-sm leading-relaxed text-bone/80">
              Whether it&rsquo;s a film, commercial, or a new creative idea — we&rsquo;d love to hear from you.
            </Reveal>
            <ul className="mt-8 space-y-4">
              {rows.map(([icon, text, href]) => (
                <li key={icon} className="flex items-center gap-4 text-sm">
                  <Icon name={icon} size={20} className="text-ember" />
                  {href ? <a href={href} className="hover:text-ember">{text}</a> : <span>{text}</span>}
                </li>
              ))}
            </ul>
            {contact.isPlaceholder && <p className="label mt-4 text-[0.6rem] text-bone/45">Placeholder details — configure in src/data/site.js</p>}
            <SocialLinks boxed className="mt-6" />
          </div>
          <div className="lg:col-span-8">
            <p className="eyebrow mb-6">Send a project inquiry</p>
            <InquiryForm />
          </div>
        </PageContainer>
      </section>

      <section className="relative overflow-hidden">
        <ImagePlaceholder src="/assets/images/contact/contact-studio.jpg" alt="" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/10 via-ink/40 to-ink/90" aria-hidden="true" />
        <PageContainer className="relative flex min-h-[20rem] items-center py-16 lg:justify-end">
          <div className="lg:w-5/12">
            <Reveal as="p" className="eyebrow mb-3" y={10}>Office &amp; Studio</Reveal>
            <TitleReveal lines={["Visit our studio."]} className="text-5xl md:text-6xl" />
            <Reveal as="p" delay={0.2} className="mt-4 text-sm leading-relaxed text-bone/85">
              Come by, say hello, and discuss your next project with us.
              <span className="mt-2 block text-bone/60">{contact.address}</span>
            </Reveal>
            <Reveal delay={0.3} className="mt-6">
              <a href={contact.directionsUrl} className="btn group border-bone/60 hover:border-ember">
                Get directions <Icon name="arrowUpRight" size={14} />
              </a>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="relative h-[40svh] min-h-[18rem]" aria-hidden="true">
        <ImagePlaceholder src="/assets/images/contact/contact-closing.jpg" alt="" className="absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
      </section>
    </>
  );
}
