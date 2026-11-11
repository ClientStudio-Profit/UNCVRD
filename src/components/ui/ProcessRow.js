import Icon from "./Icon";
import ImagePlaceholder from "./ImagePlaceholder";
import { Reveal, ImageReveal } from "./Reveal";

// Horizontal editorial process row. Steps with `image` render as numbered
// frames; steps with `icon` render as an icon sequence joined by arrows.
export default function ProcessRow({ steps, className = "" }) {
  const withImages = steps.some((s) => s.image);
  const cols = { 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" }[steps.length] || "lg:grid-cols-4";

  return (
    <ol className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 ${cols} ${className}`}>
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <Reveal delay={i * 0.1}>
            {withImages ? (
              <>
                <ImageReveal className="aspect-[3/2]" delay={i * 0.1}>
                  <ImagePlaceholder src={step.image} alt="" sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw" className="h-full w-full" />
                </ImageReveal>
                <p className="mt-5 text-2xl font-bold tracking-wider text-ember">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-1 text-3xl">{step.title}</h3>
              </>
            ) : (
              <>
                <div className="flex items-center gap-4 lg:block">
                  <Icon name={step.icon} size={34} strokeWidth={1.1} className="text-bone" />
                  <h3 className="label lg:mt-5">{step.title}</h3>
                </div>
              </>
            )}
            <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-bone/70">{step.text}</p>
          </Reveal>
          {!withImages && i < steps.length - 1 && (
            <Icon name="arrow" size={18} strokeWidth={1} className="absolute -right-5 top-2 hidden text-bone/50 lg:block" />
          )}
        </li>
      ))}
    </ol>
  );
}
