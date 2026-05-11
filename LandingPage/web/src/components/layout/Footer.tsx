"use client";

import Link from "next/link";

import { analyticsEvents } from "@/content/analytics-events";
import { brand, socialLinks } from "@/content/brand";
import { footerGroups } from "@/content/footer";
import { trackEvent } from "@/lib/analytics/track";

const trackFooterLink = (label: string, href: string) => {
  trackEvent(analyticsEvents.footerLinkClicked, {
    label,
    href,
  });
};

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <Link className="brand-lockup" href="/" aria-label={`${brand.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            {brand.logoMark}
          </span>
          <span>{brand.name}</span>
        </Link>
        <p>{brand.tagline}</p>
        <address>
          {brand.address}
          <br />
          <a href={`mailto:${brand.email}`} onClick={() => trackFooterLink("Email", `mailto:${brand.email}`)}>
            {brand.email}
          </a>
          <br />
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            onClick={() => trackFooterLink("Phone", `tel:${brand.phone.replace(/\s/g, "")}`)}
          >
            {brand.phone}
          </a>
        </address>
      </div>
      <div className="footer-links">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href} onClick={() => trackFooterLink(link.label, link.href)}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={() => trackFooterLink(link.label, link.href)}>
                  {link.label}
                </a>
              ),
            )}
          </div>
        ))}
        <div>
          <h2>Social</h2>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackFooterLink(link.label, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="footer-disclaimer">
        Placeholder legal, contact, social, and address details are used until public launch.
      </p>
    </div>
  </footer>
);
