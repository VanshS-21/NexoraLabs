import type { Metadata } from "next";

import { legal } from "@/content/legal";
import { buildMetadata } from "@/lib/metadata/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: legal.privacy.title,
  description: legal.privacy.intro,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="legal-page">
      <p className="eyebrow">Legal</p>
      <h1>{legal.privacy.title}</h1>
      <p>{legal.privacy.intro}</p>
      <p>Last updated: {legal.lastUpdated}</p>
      {legal.privacy.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </article>
  );
}
