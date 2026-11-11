import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import ArrowLink from "@/components/ui/ArrowLink";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";

export default function OurStory() {
  return (
    <section className="relative bg-bone text-ink">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12 lg:gap-8 lg:px-14">
        <div className="lg:col-span-4">
          <Reveal as="p" className="eyebrow mb-4" y={10}>
            Our Story
          </Reveal>
          <TitleReveal lines={["Uncover", "real stories."]} className="text-[clamp(4.5rem,9vw,8rem)]" />
        </div>
        <Reveal className="self-end lg:col-span-3 lg:pb-3" delay={0.15}>
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink/80">
            UNCVRD is a film production studio that brings ideas to life through powerful visuals, meaningful narratives, and a collaborative creative process.
          </p>
          <ArrowLink href="/about" className="mt-4 text-ember hover:text-ink">
            Read our story
          </ArrowLink>
        </Reveal>
        <div className="relative lg:col-span-5 lg:-mb-32 lg:-mt-28">
          <div className="absolute inset-0 hidden translate-x-4 translate-y-5 rotate-[3deg] bg-ember lg:block" aria-hidden="true" />
          <ImageReveal className="relative aspect-[7/5] lg:-rotate-[2deg] lg:shadow-2xl lg:shadow-ink/60">
            <ImagePlaceholder src="/assets/images/home/home-story.jpg" alt="" sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full" />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
