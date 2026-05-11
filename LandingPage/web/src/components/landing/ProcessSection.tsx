import { processSteps } from "@/content/landing/process";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export const ProcessSection = () => (
  <SectionShell
    id="process"
    eyebrow="Process"
    title="A launch path that plans search, trust, and tracking before pixels settle."
    intro="The process is intentionally practical: understand the business, decide what the digital system must prove, then build only what helps the customer act."
    tone="warm"
  >
    <div className="process-list">
      {processSteps.map((step) => (
        <Reveal className="process-step" key={step.step}>
          <span>{step.step}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);
