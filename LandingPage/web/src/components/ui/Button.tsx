"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

import { analyticsEvents } from "@/content/analytics-events";
import { trackEvent } from "@/lib/analytics/track";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  eventName?: string;
  eventProperties?: Record<string, string | number | boolean | null | undefined>;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

const variantClassName = {
  primary: "button button-primary",
  secondary: "button button-secondary",
  ghost: "button button-ghost",
};

export const Button = ({
  children,
  href,
  icon,
  variant = "primary",
  className = "",
  eventName,
  eventProperties,
  onClick,
  ...buttonProps
}: ButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    trackEvent(eventName ?? analyticsEvents.ctaClicked, {
      label: typeof children === "string" ? children : undefined,
      href,
      ...eventProperties,
    });
    onClick?.(event as MouseEvent<HTMLButtonElement>);
  };
  const content = (
    <>
      <span>{children}</span>
      {icon ? <span className="button-icon">{icon}</span> : null}
    </>
  );
  const buttonClassName = `${variantClassName[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link className={buttonClassName} href={href} onClick={handleClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} onClick={handleClick} {...buttonProps}>
      {content}
    </button>
  );
};
