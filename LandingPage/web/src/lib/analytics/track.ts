"use client";

import posthog from "posthog-js";

type EventProperties = Record<string, string | number | boolean | null | undefined>;

export const isAnalyticsEnabled = () =>
  Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST);

export const trackEvent = (eventName: string, properties?: EventProperties) => {
  if (!isAnalyticsEnabled()) {
    if (process.env.NODE_ENV === "development") {
      console.debug("[analytics]", eventName, properties ?? {});
    }

    return;
  }

  posthog.capture(eventName, properties);
};
