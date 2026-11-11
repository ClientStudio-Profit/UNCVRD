import { Reveal, TitleReveal } from "./Reveal";

// Eyebrow + masked display title + ember rule.
export default function SectionHeading({ eyebrow, lines, as = "h2", className = "", titleClassName = "text-6xl md:text-7xl", rule = true, children }) {
  return (
    <div className={className}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow mb-4" y={10}>
          {eyebrow}
        </Reveal>
      )}
      <TitleReveal as={as} lines={lines} className={titleClassName} />
      {rule && <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />}
      {children}
    </div>
  );
}
