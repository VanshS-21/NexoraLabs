import type { Metadata } from "next";

import { legal } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: legal.terms.title,
  description: legal.terms.intro,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="legal-page">
      <p className="eyebrow">Legal</p>
      <h1>{legal.terms.title}</h1>
      <p>{legal.terms.intro}</p>
      <p>Last updated: {legal.lastUpdated}</p>
      {legal.terms.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </article>
  );
}
