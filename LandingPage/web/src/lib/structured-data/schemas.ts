import { brand, socialLinks } from "@/content/brand";
import { faqs } from "@/content/landing/seo";
import { absoluteUrl } from "@/lib/metadata/build-metadata";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.url,
  logo: absoluteUrl("/og/nexora-og.png"),
  email: brand.email,
  telephone: brand.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "MG Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  sameAs: socialLinks.map((link) => link.href),
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  image: absoluteUrl("/media/landing/portal/portal-frame.png"),
  url: brand.url,
  email: brand.email,
  telephone: brand.phone,
  priceRange: "Custom project scope",
  areaServed: [
    {
      "@type": "City",
      name: "Bengaluru",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  address: organizationSchema.address,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brand.name,
  url: brand.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${brand.url}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
