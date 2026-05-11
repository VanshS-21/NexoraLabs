import { ArrowRight } from "lucide-react";

import { customScope } from "@/content/landing/custom-scope";
import { Button } from "@/components/ui/Button";

export const CustomScopeSection = () => (
  <section className="custom-scope">
    <div>
      <p className="eyebrow">Custom scope</p>
      <h2>{customScope.title}</h2>
      <p>{customScope.body}</p>
    </div>
    <ul>
      {customScope.examples.map((example) => (
        <li key={example}>{example}</li>
      ))}
    </ul>
    <Button href="#contact" icon={<ArrowRight aria-hidden="true" size={18} />}>
      Scope the need
    </Button>
  </section>
);
