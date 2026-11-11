"use client";
import { useState } from "react";
import FAQAccordion from "./FAQAccordion";
import FAQCategoryNavigation from "./FAQCategoryNavigation";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import PageContainer from "@/components/layout/PageContainer";
import { Reveal, TitleReveal } from "@/components/ui/Reveal";

export default function FAQBrowser({ categories, faqs }) {
  const [active, setActive] = useState(categories[0].id);
  const items = faqs.filter((f) => f.category === active);
  const label = categories.find((c) => c.id === active).label;

  return (
    <>
      <FAQCategoryNavigation categories={categories} active={active} onSelect={setActive} />
      <section className="relative overflow-hidden">
        <ImagePlaceholder src="/assets/images/faq/faq-decoration.jpg" alt="" className="absolute -bottom-20 -left-20 hidden h-[28rem] w-[28rem] opacity-40 lg:block" />
        <PageContainer className="relative grid gap-10 py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-4">
            <Reveal as="p" className="eyebrow mb-4" y={10}>FAQ</Reveal>
            <TitleReveal lines={["Frequently", "asked", "questions."]} className="text-5xl md:text-6xl" />
            <Reveal as="span" className="rule mt-6" y={0} delay={0.3} />
            <Reveal as="p" delay={0.2} className="mt-6 max-w-xs text-sm leading-relaxed text-bone/75">
              Find answers to common questions about our studio, services, production process, and collaboration.
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <p className="label mb-4 text-[0.65rem] text-bone/50" aria-live="polite">{label}</p>
            <FAQAccordion key={active} items={items} />
          </div>
        </PageContainer>
      </section>
    </>
  );
}
