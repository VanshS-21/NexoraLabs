import { problems } from "@/content/landing/problems";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export const ProblemSection = () => (
  <SectionShell
    eyebrow="The gap"
    title="Most service websites do not fail loudly. They quietly leak trust."
    intro="The first version of Nexora Labs is designed around that problem: build the page, the system, and the search foundation together."
    tone="warm"
  >
    <div className="problem-grid">
      {problems.map((problem) => (
        <Reveal className="problem-item" key={problem.title}>
          <h3>{problem.title}</h3>
          <p>{problem.detail}</p>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);
