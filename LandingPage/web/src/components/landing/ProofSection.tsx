import { Eye, ShieldCheck } from "lucide-react";

import { analyticsEvents } from "@/content/analytics-events";
import { proof } from "@/content/landing/proof";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export const ProofSection = () => (
  <SectionShell id="proof" eyebrow="Real proof plan" title={proof.title} intro={proof.intro}>
    <div className="proof-layout">
      <div className="proof-principles" aria-label="Proof principles">
        {proof.principles.map((principle) => (
          <div key={principle}>
            <ShieldCheck aria-hidden="true" size={18} />
            <span>{principle}</span>
          </div>
        ))}
      </div>
      <div className="proof-projects">
        {proof.projects.map((project) => (
          <Reveal
            className="proof-project"
            eventName={analyticsEvents.proofProjectViewed}
            eventProperties={{ project: project.name }}
            key={project.name}
          >
            <span>{project.type}</span>
            <h3>{project.name}</h3>
            <p>{project.goal}</p>
            <ul>
              {project.signals.map((signal) => (
                <li key={signal}>
                  <Eye aria-hidden="true" size={14} />
                  {signal}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </SectionShell>
);
