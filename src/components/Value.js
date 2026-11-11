import { Reveal, TitleReveal } from "@/components/ui/Reveal";
import { values } from "@/data/about";

// Home "Our Values": studio philosophy as a typography-led index.
export default function Value() {
  return (
    <section className="border-t hairline bg-coal py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-14">
        <div className="mb-12 grid gap-6 lg:grid-cols-12">
          <Reveal as="h2" className="eyebrow lg:col-span-3" y={10}>
            Our Values
          </Reveal>
          <Reveal as="p" className="max-w-xl text-lg leading-relaxed text-bone/80 lg:col-span-7" delay={0.1}>
            We believe every person, brand, and place is carrying a story. Our job is to uncover it — honestly, carefully, and together.
          </Reveal>
        </div>
        <ul>
          {values.map((value, i) => (
            <li key={value.title} className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-t hairline py-5 last:border-b lg:grid-cols-12 lg:py-3">
              <span className="label text-ember lg:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <TitleReveal as="h3" lines={[`${value.title}.`]} delay={i * 0.06} className="text-[clamp(4rem,13vw,10.5rem)] transition-colors duration-500 group-hover:text-ember lg:col-span-8" />
              <p className="col-start-2 mt-2 max-w-xs text-sm leading-relaxed text-bone/70 lg:col-span-3 lg:col-start-auto lg:mt-0">{value.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
