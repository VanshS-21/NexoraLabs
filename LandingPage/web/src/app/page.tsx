import type { Metadata } from "next";

import { ClientCategoriesSection } from "@/components/landing/ClientCategoriesSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { CustomScopeSection } from "@/components/landing/CustomScopeSection";
import { EngagementPathsSection } from "@/components/landing/EngagementPathsSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ProofSection } from "@/components/landing/ProofSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { StructuredData } from "@/components/seo/StructuredData";
import { landingSeo } from "@/content/landing/seo";
import {
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data/schemas";
import { buildMetadata } from "@/lib/metadata/build-metadata";

export const metadata: Metadata = buildMetadata({
  title: landingSeo.title,
  description: landingSeo.description,
  keywords: landingSeo.keywords,
});

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={faqSchema} />
      <HeroSection />
      <ProblemSection />
      <ClientCategoriesSection />
      <ServicesSection />
      <ProofSection />
      <ProcessSection />
      <EngagementPathsSection />
      <TeamSection />
      <CustomScopeSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
