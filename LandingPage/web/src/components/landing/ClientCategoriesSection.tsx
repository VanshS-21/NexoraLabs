import { clientCategories } from "@/content/landing/client-categories";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export const ClientCategoriesSection = () => (
  <SectionShell
    id="clients"
    eyebrow="Who we build for"
    title="Built for operators whose customers compare trust before price."
    intro="The launch focus is local service and commerce businesses that need clear actions, practical content, and visible credibility."
  >
    <div className="category-grid">
      {clientCategories.map((category) => (
        <Reveal className="category-card" key={category.id}>
          <div>
            <span>{category.examples.join(" / ")}</span>
            <h3>{category.label}</h3>
          </div>
          <p>{category.trustProblem}</p>
          <strong>{category.actionFrame}</strong>
          <ul>
            {category.primaryActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);
