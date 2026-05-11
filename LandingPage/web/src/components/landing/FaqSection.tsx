import { faqs } from "@/content/landing/seo";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export const FaqSection = () => (
  <SectionShell
    eyebrow="Search-ready answers"
    title="The homepage includes answer blocks for humans and search engines."
    intro="These are the first FAQ targets for Google, local search, and AI answer engines. They can expand into service pages after launch."
  >
    <div className="faq-list">
      {faqs.map((faq) => (
        <Reveal className="faq-item" key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);
