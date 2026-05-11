import { ArrowUpRight } from "lucide-react";

import { analyticsEvents } from "@/content/analytics-events";
import { services } from "@/content/landing/services";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

export const ServicesSection = () => (
  <SectionShell
    id="services"
    eyebrow="Services"
    title="One studio for the visible brand and the working system behind it."
    intro="Each service is scoped around the business action it should improve, not just the artifact being delivered."
    tone="ink"
  >
    <div className="service-grid">
      {services.map((service) => (
        <Reveal
          className="service-card"
          eventName={analyticsEvents.serviceViewed}
          eventProperties={{ service: service.id }}
          key={service.id}
        >
          <div className="service-card-heading">
            <h3>{service.name}</h3>
            <ArrowUpRight aria-hidden="true" size={20} />
          </div>
          <p>{service.summary}</p>
          <div className="service-meta">
            <div>
              <span>When needed</span>
              <ul>
                {service.whenNeeded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span>Outcome</span>
              <ul>
                {service.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);
