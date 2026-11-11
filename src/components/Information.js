import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ArrowLink from "@/components/ui/ArrowLink";
import { Reveal, TitleReveal } from "@/components/ui/Reveal";

// Home closing statement.
export default function Information() {
  return (
    <section className="grain relative overflow-hidden">
      <ImagePlaceholder src="/assets/images/home/home-closing.jpg" alt="" className="absolute inset-0" />
      <div className="ember-wash absolute inset-0 opacity-85 mix-blend-multiply" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-14 lg:py-28">
        <div>
          <Reveal as="p" className="label mb-4 text-bone/85" y={10}>
            Let&rsquo;s Collaborate
          </Reveal>
          <TitleReveal lines={["Have a story", "to tell?"]} className="text-[clamp(4.5rem,12vw,10rem)]" />
        </div>
        <Reveal delay={0.25} className="md:pb-4">
          <ArrowLink href="/contact" variant="ring">
            Get in touch
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
