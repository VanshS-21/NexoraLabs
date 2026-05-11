"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

import { trackEvent } from "@/lib/analytics/track";

type RevealProps = {
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventProperties?: Record<string, string | number | boolean | null | undefined>;
};

export const Reveal = ({ children, className, eventName, eventProperties }: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const hasTracked = useRef(false);

  const trackOnce = () => {
    if (!eventName || hasTracked.current) {
      return;
    }

    hasTracked.current = true;
    trackEvent(eventName, eventProperties);
  };

  if (reduceMotion) {
    return (
      <div className={className} onMouseEnter={trackOnce}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onViewportEnter={trackOnce}
    >
      {children}
    </motion.div>
  );
};
