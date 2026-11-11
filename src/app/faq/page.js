import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import FAQBrowser from "@/components/faq/FAQBrowser";
import { faqCategories, faqs } from "@/data/faqs";

export const metadata = { title: "Info / FAQ" };

export default function FAQPage() {
  return (
    <>
      <PageHero
        image="/assets/images/faq/faq-hero.jpg"
        eyebrow="Info / FAQ"
        lines={["Everything", "you need", { t: "to know.", accent: true }]}
        subtitle="Common questions, project process, and important information about working with UNCVRD."
      />
      <FAQBrowser categories={faqCategories} faqs={faqs} />
      <CTASection
        image="/assets/images/faq/faq-contact-banner.jpg"
        eyebrow="Still have questions?"
        lines={["Let's talk", "directly."]}
        text="Can't find what you're looking for? Feel free to reach out to our team."
        cta="Contact us"
      />
    </>
  );
}
