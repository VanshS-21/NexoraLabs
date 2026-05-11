import { UserRound } from "lucide-react";

import { teamMembers } from "@/content/landing/team";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export const TeamSection = () => (
  <SectionShell
    id="team"
    eyebrow="Team"
    title="A lean launch team, with public details to be added before launch."
    intro="The product plan keeps this intentionally simple: role clarity without inflated biographies, skill lists, or responsibility matrices."
  >
    <div className="team-grid">
      {teamMembers.map((member) => (
        <Reveal className="team-card" key={member.id}>
          <div className="team-avatar" aria-hidden="true">
            <UserRound size={28} />
          </div>
          <span>{member.role}</span>
          <h3>{member.name}</h3>
          {member.isPlaceholder ? <p>Placeholder profile</p> : null}
        </Reveal>
      ))}
    </div>
  </SectionShell>
);
