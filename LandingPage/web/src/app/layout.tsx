import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { PostHogProvider } from "@/lib/analytics/PostHogProvider";
import { buildMetadata } from "@/lib/metadata/build-metadata";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <PostHogProvider>
          <SkipLink />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
