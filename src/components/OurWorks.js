import Carousel from "./Carousel";
import ArrowLink from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

// Home "Featured Works": the first three projects, shown with the dedicated
// home-featured-work-0N.jpg frames.
const featured = projects.slice(0, 3).map((project, i) => ({
  project,
  image: `/assets/images/home/home-featured-work-0${i + 1}.jpg`,
}));

export default function OurWorks() {
  return (
    <section className="bg-ink pb-20 pt-24 lg:pt-44">
      <div className="mx-auto mb-8 flex w-full max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14">
        <Reveal as="h2" className="eyebrow" y={10}>
          Featured Works
        </Reveal>
        <ArrowLink href="/works">View all works</ArrowLink>
      </div>
      <Reveal>
        <Carousel items={featured} />
      </Reveal>
    </section>
  );
}
