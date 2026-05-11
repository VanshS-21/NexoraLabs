"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

let posthogStarted = false;

export const PostHogProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!key || !host || posthogStarted) {
      return;
    }

    posthogStarted = true;
    posthog.init(key, {
      api_host: host,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      person_profiles: "identified_only",
    });
  }, []);

  return children;
};
