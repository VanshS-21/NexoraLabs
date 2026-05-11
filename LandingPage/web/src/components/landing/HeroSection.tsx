import Image from "next/image";
import { ArrowRight, CheckCircle2, Compass } from "lucide-react";

import { analyticsEvents } from "@/content/analytics-events";
import { hero } from "@/content/landing/hero";
import { Button } from "@/components/ui/Button";

export const HeroSection = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">{hero.eyebrow}</p>
      <h1 id="hero-title">{hero.headline}</h1>
      <p className="hero-subhead">{hero.subhead}</p>
      <div className="hero-actions">
        <Button
          href={hero.primaryCta.href}
          icon={<ArrowRight aria-hidden="true" size={18} />}
          eventName={analyticsEvents.heroCtaClicked}
          eventProperties={{ cta: hero.primaryCta.label }}
        >
          {hero.primaryCta.label}
        </Button>
        <Button
          href={hero.secondaryCta.href}
          variant="secondary"
          icon={<Compass aria-hidden="true" size={18} />}
          eventName={analyticsEvents.heroCtaClicked}
          eventProperties={{ cta: hero.secondaryCta.label }}
        >
          {hero.secondaryCta.label}
        </Button>
      </div>
      <ul className="hero-highlights" aria-label="Core service highlights">
        {hero.highlights.map((highlight) => (
          <li key={highlight}>
            <CheckCircle2 aria-hidden="true" size={16} />
            {highlight}
          </li>
        ))}
      </ul>
      <p className="hero-trust">{hero.trustLine}</p>
    </div>
    <div className="hero-media" aria-label={hero.image.alt}>
      <Image
        alt={hero.image.alt}
        src={hero.image.src}
        width={hero.image.width}
        height={hero.image.height}
        preload
        sizes="(max-width: 900px) 100vw, 48vw"
      />
      <div className="hero-media-panel">
        <span>Scope</span>
        <strong>Local first. National reach.</strong>
      </div>
    </div>
  </section>
);
