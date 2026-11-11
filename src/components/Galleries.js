import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { ImageReveal, Reveal, TitleReveal } from "@/components/ui/Reveal";

const frame = (n) => `/assets/images/home/home-bts-0${n}.jpg`;

// Home "Behind The Scenes": four frames with deliberately different
// proportions and offsets.
const frames = [
  { src: frame(1), box: "col-span-2 aspect-[7/5] lg:col-span-5" },
  { src: frame(2), box: "aspect-[4/5] lg:col-span-4 lg:mt-20" },
  { src: frame(4), box: "aspect-[4/5] lg:order-last lg:col-span-3 lg:aspect-square" },
  { src: frame(3), box: "col-span-2 aspect-[16/9] lg:col-span-7 lg:col-start-3 lg:-mt-24" },
];

export default function Galleries() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-3 px-5 sm:px-8 md:gap-5 lg:grid-cols-12 lg:px-14">
        <div className="col-span-2 mb-6 lg:col-span-3 lg:mb-0">
          <span className="mb-5 block h-px w-8 bg-bone/60" aria-hidden="true" />
          <TitleReveal lines={["Behind", "the scenes"]} className="text-6xl md:text-7xl" />
          <Reveal as="p" delay={0.2} className="mt-5 max-w-[16rem] text-sm leading-relaxed text-bone/70">
            The setups, the waiting, and the small moments between takes.
          </Reveal>
        </div>
        {frames.map((f, i) => (
          <ImageReveal key={f.src} className={f.box} delay={i * 0.08}>
            <ImagePlaceholder src={f.src} alt="" sizes="(min-width: 1024px) 45vw, 100vw" className="h-full w-full" imgClassName="grayscale transition-[filter,transform] duration-700 hover:scale-105 hover:grayscale-0" />
          </ImageReveal>
        ))}
      </div>
    </section>
  );
}
