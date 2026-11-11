import Link from "next/link";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import ArrowLink from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { media } from "@/data/site";

// Home "What We Do": the five core services as a typographic index.
const core = services.filter((s) => s.slug !== "other-services");

export default function Focusing() {
  return (
    <section className="grain relative overflow-hidden border-y hairline bg-coal">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-14">
        <Reveal className="lg:col-span-4">
          <VideoPlaceholder src={media.showreel} poster={media.showreelPoster} title="UNCVRD Showreel" label="Showreel" sizes="(min-width: 1024px) 33vw, 100vw" className="aspect-[4/3]" />
        </Reveal>

        <div className="lg:col-span-5 lg:pl-8">
          <Reveal as="h2" className="eyebrow mb-6" y={10}>
            What We Do
          </Reveal>
          <ul>
            {core.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 0.07}>
                <Link
                  href={`/services/${service.slug}`}
                  className="display group flex items-baseline gap-4 py-1 text-[clamp(3rem,6vw,5rem)] transition-[color,transform] duration-500 hover:translate-x-3 hover:text-ember"
                >
                  {service.title}
                  <span className="label text-bone/0 transition-colors duration-500 group-hover:text-bone/60">{service.number}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="lg:col-span-3" delay={0.2}>
          <p className="max-w-xs text-sm leading-relaxed text-bone/75">From concept to final cut, we craft visual stories that connect, inspire, and leave a lasting impact.</p>
          <ArrowLink href="/services" className="mt-4 text-ember hover:text-bone">
            Explore services
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
