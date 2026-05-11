"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { analyticsEvents } from "@/content/analytics-events";
import { brand } from "@/content/brand";
import { primaryNavigation } from "@/content/navigation";
import { trackEvent } from "@/lib/analytics/track";

export const Header = () => (
  <header className="site-header">
    <Link className="brand-lockup" href="/" aria-label={`${brand.name} home`}>
      <span className="brand-mark" aria-hidden="true">
        {brand.logoMark}
      </span>
      <span>{brand.name}</span>
    </Link>
    <nav aria-label="Primary navigation">
      {primaryNavigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() =>
            trackEvent(analyticsEvents.navClicked, {
              label: item.label,
              href: item.href,
            })
          }
        >
          {item.label}
        </a>
      ))}
    </nav>
    <a
      className="header-contact"
      href="#contact"
      onClick={() =>
        trackEvent(analyticsEvents.navClicked, {
          label: "Start",
          href: "#contact",
        })
      }
    >
      Start
      <ArrowUpRight aria-hidden="true" size={16} />
    </a>
  </header>
);
