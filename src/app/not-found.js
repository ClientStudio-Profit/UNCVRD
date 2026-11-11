import PageContainer from "@/components/layout/PageContainer";
import ArrowLink from "@/components/ui/ArrowLink";

export default function NotFound() {
  return (
    <PageContainer as="section" className="cine flex min-h-[80svh] max-w-none flex-col items-start justify-center">
      <p className="eyebrow mb-4">404 — Scene missing</p>
      <h1 className="display text-[clamp(4rem,12vw,9rem)]">This page didn&rsquo;t make the cut.</h1>
      <ArrowLink href="/" variant="button" className="mt-10">
        Back to home
      </ArrowLink>
    </PageContainer>
  );
}
