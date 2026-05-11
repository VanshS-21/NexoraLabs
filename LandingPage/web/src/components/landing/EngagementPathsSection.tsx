import { engagementPaths } from "@/content/landing/engagement-paths";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export const EngagementPathsSection = () => (
  <SectionShell
    eyebrow="Engagement paths"
    title="Start with the shape of the problem."
    intro="The first conversation should decide whether the business needs a launch, an upgrade, or a system."
  >
    <div className="engagement-grid">
      {engagementPaths.map((path) => (
        <Reveal className="engagement-card" key={path.id}>
          <h3>{path.label}</h3>
          <p>{path.fits}</p>
          <ul>
            {path.likelyServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <blockquote>{path.qualificationPrompt}</blockquote>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);
