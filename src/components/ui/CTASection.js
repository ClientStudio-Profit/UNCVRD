import ImagePlaceholder from "./ImagePlaceholder";
import ArrowLink from "./ArrowLink";
import { Reveal, TitleReveal } from "./Reveal";

// Closing call-to-action band. layout: "split" (text right of the image) | "center".
export default function CTASection({ image, eyebrow, lines, text, href = "/contact", cta = "Get in touch", layout = "split" }) {
  const center = layout === "center";
  return (
    <section className="grain relative overflow-hidden">
      <ImagePlaceholder src={image} alt="" className="absolute inset-0" />
      <div className={`absolute inset-0 ${center ? "bg-ink/55" : "bg-gradient-to-l from-[#7c1a08]/90 via-[#4a1006]/75 to-ink/40"}`} aria-hidden="true" />
      {!center && <div className="sprockets absolute inset-y-0 right-0 hidden w-9 opacity-80 lg:block" aria-hidden="true" />}
      <div
        className={`relative z-10 mx-auto flex min-h-[26rem] w-full max-w-[1400px] flex-col justify-center px-5 py-20 sm:px-8 lg:px-14 ${
          center ? "items-center text-center" : "md:pl-[42%]"
        }`}
      >
        {eyebrow && (
          <Reveal as="p" y={10} className="label mb-4 text-bone/80">
            {eyebrow}
          </Reveal>
        )}
        <TitleReveal lines={lines} className="text-[clamp(3.5rem,8vw,6.5rem)]" />
        {text && (
          <Reveal as="p" delay={0.2} className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-bone/85">
            {text}
          </Reveal>
        )}
        <Reveal delay={0.3} className="mt-8">
          <ArrowLink href={href} variant="button" className="bg-ink/30 backdrop-blur-sm">
            {cta}
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
