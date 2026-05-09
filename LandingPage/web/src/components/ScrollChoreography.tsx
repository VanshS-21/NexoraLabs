"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const easeOutQuart = (value: number) => 1 - Math.pow(1 - value, 4);
const getPageTop = (element: HTMLElement) => element.getBoundingClientRect().top + window.scrollY;
const launchTargets = ["#about", "#process", "#services", "#work", "#contact"] as const;

const getAll = <T extends HTMLElement>(root: ParentNode | null | undefined, selector: string) =>
  Array.from(root?.querySelectorAll<T>(selector) ?? []);

export function ScrollChoreography() {
  const { scrollY } = useScroll();
  const [metrics, setMetrics] = useState(0);
  const metricsVersion = useRef(0);

  // Recalculate element positions on resize / load / fonts ready
  const recalc = useCallback(() => {
    metricsVersion.current += 1;
    setMetrics(metricsVersion.current);
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    window.addEventListener("load", recalc);
    window.addEventListener("pageshow", recalc);
    window.visualViewport?.addEventListener("resize", recalc);
    document.fonts?.ready.then(recalc).catch(() => undefined);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => recalc();
    if (typeof reduceMotion.addEventListener === "function") {
      reduceMotion.addEventListener("change", handler);
    } else {
      reduceMotion.addListener(handler);
    }

    return () => {
      window.removeEventListener("resize", recalc);
      window.removeEventListener("load", recalc);
      window.removeEventListener("pageshow", recalc);
      window.visualViewport?.removeEventListener("resize", recalc);
      if (typeof reduceMotion.removeEventListener === "function") {
        reduceMotion.removeEventListener("change", handler);
      } else {
        reduceMotion.removeListener(handler);
      }
    };
  }, [recalc]);

  // IntersectionObserver-based reveals (runs once per metrics recalc)
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motionRoot = document.querySelector<HTMLElement>("[data-motion-root]");
    const revealNodes = getAll<HTMLElement>(document, "[data-reveal]");

    motionRoot?.setAttribute("data-motion-ready", "true");

    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealNodes.forEach((el) => { el.dataset.visible = "true"; });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.16 },
    );

    revealNodes.forEach((el) => {
      if (el.dataset.visible === "true") return;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [metrics]);

  // Nav dot click handlers (stable, only rebind on metrics change)
  useEffect(() => {
    const viewportHeight = window.innerHeight || 1;

    const servicesSection = document.querySelector<HTMLElement>("[data-services-section]");
    const serviceNavDots = getAll<HTMLButtonElement>(servicesSection, "[data-service-nav-dot]");
    const servicePanels = getAll<HTMLElement>(servicesSection, "[data-service-panel]");

    if (servicesSection && servicePanels.length) {
      const sectionOffsetTop = getPageTop(servicesSection);
      const sectionOffsetHeight = servicesSection.offsetHeight;
      const handlers: Array<() => void> = [];

      serviceNavDots.forEach((dot) => {
        const handler = () => {
          const targetIndex = Number(dot.dataset.serviceIndex ?? 0);
          const scrollRange = Math.max(1, sectionOffsetHeight - viewportHeight);
          const targetProgress = targetIndex / Math.max(1, servicePanels.length - 1);
          window.scrollTo({ top: sectionOffsetTop + targetProgress * scrollRange, behavior: "smooth" });
        };
        dot.addEventListener("click", handler);
        handlers.push(handler);
      });

      return () => {
        serviceNavDots.forEach((dot, i) => dot.removeEventListener("click", handlers[i]));
      };
    }

    const testimonialSection = document.querySelector<HTMLElement>("[data-testimonial-section]");
    const testimonialNavDots = getAll<HTMLButtonElement>(testimonialSection, "[data-testimonial-nav-dot]");
    const testimonialCards = getAll<HTMLElement>(testimonialSection, "[data-testimonial-card]");

    if (testimonialSection && testimonialCards.length) {
      const sectionOffsetTop = getPageTop(testimonialSection);
      const sectionOffsetHeight = testimonialSection.offsetHeight;
      const handlers: Array<() => void> = [];

      testimonialNavDots.forEach((dot) => {
        const handler = () => {
          const targetIndex = Number(dot.dataset.testimonialIndex ?? 0);
          const scrollRange = Math.max(1, sectionOffsetHeight - viewportHeight);
          const targetProgress = targetIndex / Math.max(1, testimonialCards.length - 1);
          window.scrollTo({ top: sectionOffsetTop + targetProgress * scrollRange, behavior: "smooth" });
        };
        dot.addEventListener("click", handler);
        handlers.push(handler);
      });

      return () => {
        testimonialNavDots.forEach((dot, i) => dot.removeEventListener("click", handlers[i]));
      };
    }
  }, [metrics]);

  // Back-to-top click handler
  useEffect(() => {
    const btn = document.querySelector<HTMLButtonElement>("[data-back-to-top]");
    if (!btn) return;
    const handler = () => window.scrollTo({ top: 0, behavior: "smooth" });
    btn.addEventListener("click", handler);
    return () => btn.removeEventListener("click", handler);
  }, []);

  // Main scroll-driven updater — replaces manual rAF + scroll listener
  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const viewportHeight = window.innerHeight || 1;

    // Launch Map
    const launchMap = document.querySelector<HTMLElement>("[data-launch-map]");
    const launchFill = launchMap?.querySelector<HTMLElement>("[data-launch-fill]");
    const launchStops = getAll<HTMLAnchorElement>(launchMap, "[data-launch-stop]");
    const launchSections = launchTargets
      .map((sel) => document.querySelector<HTMLElement>(sel))
      .filter((s): s is HTMLElement => Boolean(s))
      .map((s) => ({ top: getPageTop(s), bottom: getPageTop(s) + s.offsetHeight }));

    if (launchMap && launchFill && launchStops.length && launchSections.length) {
      const pageStart = launchSections[0].top;
      const pageEnd = launchSections[launchSections.length - 1].bottom;
      const focusLine = latestScrollY + viewportHeight * 0.42;
      const progress = reduceMotion.matches ? 1 : clamp((focusLine - pageStart) / Math.max(1, pageEnd - pageStart));

      let activeIndex = 0;
      launchSections.forEach((section, index) => {
        if (focusLine >= section.top - viewportHeight * 0.14) activeIndex = index;
      });

      launchMap.style.setProperty("--launch-progress", progress.toFixed(3));
      launchFill.style.setProperty("--launch-fill", progress.toFixed(3));
      launchStops.forEach((stop, index) => {
        const distance = Math.abs(index - activeIndex);
        stop.dataset.launchState = index === activeIndex ? "active" : index < activeIndex ? "passed" : "upcoming";
        stop.style.setProperty("--launch-stop-distance", Math.min(distance, 3).toFixed(2));
      });
      launchMap.dataset.launchVisibility =
        activeIndex === 0 && latestScrollY < pageStart + viewportHeight * 0.72 ? "hidden" : "visible";
    }

    // Greeting Section
    const greetingSection = document.querySelector<HTMLElement>("[data-greeting-section]");
    if (greetingSection) {
      const copy = greetingSection.querySelector<HTMLElement>("[data-greeting-copy]");
      const target = copy || greetingSection;
      const greetingOffsetTop = getPageTop(target);
      const progress = clamp((viewportHeight * 0.84 - (greetingOffsetTop - latestScrollY)) / (viewportHeight * 0.36));
      greetingSection.style.setProperty("--scroll-progress", progress.toFixed(3));

      getAll<HTMLElement>(greetingSection, "[data-ink-line]").forEach((line) => {
        const offsetTop = getPageTop(line);
        const ink = clamp((viewportHeight * 0.82 - (offsetTop - latestScrollY)) / (viewportHeight * 0.24));
        line.style.setProperty("--ink-percent", Math.round(48 + ink * 52) + "%");
      });

      getAll<HTMLElement>(greetingSection, "[data-capability-pill]").forEach((pill) => {
        const drift = Number(pill.dataset.pillDrift || 0);
        const tiltDirection = drift >= 0 ? -1 : 1;
        pill.style.setProperty("--pill-shift", Math.round(drift * (1 - progress)) + "px");
        pill.style.setProperty("--pill-tilt", (tiltDirection * 1.8 * (1 - progress)).toFixed(2) + "deg");
      });
    }

    // Process Section
    const processSection = document.querySelector<HTMLElement>("[data-process-section]");
    const processGrid = processSection?.querySelector<HTMLElement>("[data-process-grid]");
    const processCards = getAll<HTMLElement>(processSection, "[data-process-card]");
    if (processSection && processGrid && processCards.length) {
      if (reduceMotion.matches) {
        processSection.style.setProperty("--process-progress", "1");
        processCards.forEach((card, index) => {
          card.style.setProperty("--process-stack-x", "0px");
          card.style.setProperty("--process-stack-y", "0px");
          card.style.setProperty("--process-stack-rotate", "0deg");
          card.style.setProperty("--process-card-scale", "1");
          card.style.setProperty("--process-z", String(index + 1));
        });
      } else {
        const gridOffsetTop = getPageTop(processGrid);
        const gridClientWidth = processGrid.clientWidth;
        const gridClientHeight = processGrid.clientHeight;
        const progress = easeOutQuart(clamp((viewportHeight * 0.86 - (gridOffsetTop - latestScrollY)) / (viewportHeight * 0.48)));
        const remaining = 1 - progress;
        const stackCenterX = gridClientWidth / 2;
        const stackCenterY = gridClientHeight / 2;
        const middleIndex = (processCards.length - 1) / 2;

        processCards.forEach((card, index) => {
          const centerX = card.offsetLeft + card.offsetWidth / 2;
          const centerY = card.offsetTop + card.offsetHeight / 2;
          const stackX = (stackCenterX - centerX) * remaining;
          const stackY = (stackCenterY - centerY) * remaining;
          const rotate = (middleIndex - index) * 2.15 * remaining;
          const scale = 0.94 + progress * 0.06;
          card.style.setProperty("--process-stack-x", Math.round(stackX) + "px");
          card.style.setProperty("--process-stack-y", Math.round(stackY) + "px");
          card.style.setProperty("--process-stack-rotate", rotate.toFixed(2) + "deg");
          card.style.setProperty("--process-card-scale", scale.toFixed(3));
          card.style.setProperty("--process-z", String(index + 1));
        });
        processSection.style.setProperty("--process-progress", progress.toFixed(3));
      }
    }

    // Services Section
    const servicesSection = document.querySelector<HTMLElement>("[data-services-section]");
    const serviceShell = servicesSection?.querySelector<HTMLElement>("[data-service-shell]");
    const serviceRail = servicesSection?.querySelector<HTMLElement>("[data-service-rail]");
    const servicePanels = getAll<HTMLElement>(servicesSection, "[data-service-panel]");
    const serviceNavDots = getAll<HTMLButtonElement>(servicesSection, "[data-service-nav-dot]");
    if (servicesSection && serviceShell && serviceRail && servicePanels.length) {
      if (reduceMotion.matches || window.innerWidth < 760) {
        servicesSection.style.setProperty("--service-progress", "1");
        serviceRail.style.setProperty("--service-shift", "0px");
        servicePanels.forEach((panel) => {
          panel.style.setProperty("--service-panel-opacity", "1");
          panel.style.setProperty("--service-panel-scale", "1");
        });
        serviceNavDots.forEach((dot) => { dot.dataset.dotState = "active"; });
      } else {
        const sectionOffsetTop = getPageTop(servicesSection);
        const sectionOffsetHeight = servicesSection.offsetHeight;
        const railScrollHeight = serviceRail.scrollHeight;
        const shellClientHeight = serviceShell.clientHeight;
        const scrollRange = Math.max(1, sectionOffsetHeight - viewportHeight);
        const progress = clamp(-(sectionOffsetTop - latestScrollY) / scrollRange);
        const maxShift = Math.max(0, railScrollHeight - shellClientHeight);
        const activeIndex = progress * (servicePanels.length - 1);

        servicesSection.style.setProperty("--service-progress", progress.toFixed(3));
        serviceRail.style.setProperty("--service-shift", Math.round(-maxShift * progress) + "px");
        servicePanels.forEach((panel, index) => {
          const distance = Math.abs(index - activeIndex);
          panel.style.setProperty("--service-panel-opacity", clamp(1 - distance * 0.5, 0.28, 1).toFixed(3));
          panel.style.setProperty("--service-panel-scale", (1 - clamp(distance * 0.035, 0, 0.07)).toFixed(3));
        });
        serviceNavDots.forEach((dot, index) => {
          const roundedActive = Math.round(activeIndex);
          dot.dataset.dotState = index === roundedActive ? "active" : index < roundedActive ? "passed" : "upcoming";
        });
      }
    }

    // Work Section
    const workSection = document.querySelector<HTMLElement>("[data-work-section]");
    const workStage = workSection?.querySelector<HTMLElement>("[data-work-stage]");
    const workCenter = workSection?.querySelector<HTMLElement>("[data-work-center]");
    const workCards = getAll<HTMLElement>(workSection, "[data-work-card]");
    if (workSection && workStage && workCenter && workCards.length) {
      const stageOffsetTop = getPageTop(workStage);
      const stageOffsetHeight = workStage.offsetHeight;
      const stageTop = stageOffsetTop - latestScrollY;
      const stageBottom = stageTop + stageOffsetHeight;
      const visibleHeight = Math.max(0, Math.min(stageBottom, viewportHeight) - Math.max(stageTop, 0));
      const spreadProgress = reduceMotion.matches ? 1 : easeOutQuart(clamp(visibleHeight / Math.min(stageOffsetHeight, viewportHeight * 0.72)));
      const remaining = 1 - spreadProgress;
      const middleIndex = (workCards.length - 1) / 2;

      const stageRect = workStage.getBoundingClientRect();
      const centerRect = workCenter.getBoundingClientRect();
      const centerX = centerRect.left - stageRect.left + centerRect.width / 2;
      const centerY = centerRect.top - stageRect.top + centerRect.height / 2;

      workCards.forEach((card, index) => {
        const cardCenterX = card.getBoundingClientRect().left - stageRect.left + card.offsetWidth / 2;
        const cardCenterY = card.getBoundingClientRect().top - stageRect.top + card.offsetHeight / 2;
        const targetRotate = Number(card.dataset.workRotate || 0);
        const stackRotate = (index - middleIndex) * 2.4;
        const stackX = (centerX - cardCenterX) * remaining;
        const stackY = (centerY - cardCenterY) * remaining;
        const rotate = stackRotate * remaining + targetRotate * spreadProgress;
        const scale = 0.84 + spreadProgress * 0.16;
        const opacity = 0.5 + spreadProgress * 0.5;

        card.style.setProperty("--work-shift-x", Math.round(stackX) + "px");
        card.style.setProperty("--work-shift-y", Math.round(stackY) + "px");
        card.style.setProperty("--work-rotate", rotate.toFixed(2) + "deg");
        card.style.setProperty("--work-scale", scale.toFixed(3));
        card.style.setProperty("--work-opacity", opacity.toFixed(3));
        card.style.setProperty("--work-z", String(workCards.length - index));
      });
      workSection.style.setProperty("--work-spread", spreadProgress.toFixed(3));
    }

    // Testimonial Section
    const testimonialSection = document.querySelector<HTMLElement>("[data-testimonial-section]");
    const testimonialCards = getAll<HTMLElement>(testimonialSection, "[data-testimonial-card]");
    const testimonialNavDots = getAll<HTMLButtonElement>(testimonialSection, "[data-testimonial-nav-dot]");
    if (testimonialSection && testimonialCards.length) {
      if (reduceMotion.matches) {
        testimonialSection.style.setProperty("--testimonial-progress", "0");
        testimonialCards.forEach((card) => {
          card.style.setProperty("--testimonial-x", "0px");
          card.style.setProperty("--testimonial-y", "0px");
          card.style.setProperty("--testimonial-rotate", "0deg");
          card.style.setProperty("--testimonial-scale", "1");
          card.style.setProperty("--testimonial-opacity", "1");
          card.style.setProperty("--testimonial-content-opacity", "1");
          card.style.setProperty("--testimonial-z", "100");
        });
        testimonialNavDots.forEach((dot) => { dot.dataset.dotState = "active"; });
      } else {
        const sectionOffsetTop = getPageTop(testimonialSection);
        const sectionOffsetHeight = testimonialSection.offsetHeight;
        const scrollRange = Math.max(1, sectionOffsetHeight - viewportHeight);
        const progress = clamp(-(sectionOffsetTop - latestScrollY) / scrollRange);
        const active = progress * Math.max(1, testimonialCards.length - 1);

        testimonialSection.style.setProperty("--testimonial-progress", progress.toFixed(3));
        testimonialCards.forEach((card, index) => {
          const distance = index - active;
          const futureOffset = Math.max(distance, 0);
          const passed = clamp(active - index);
          const localProgress = easeOutQuart(passed);
          const activeDistance = Math.abs(distance);
          const x = futureOffset * 13 - localProgress * 46;
          const y = futureOffset * 11 - localProgress * 118;
          const rotate = futureOffset * 1.45 - localProgress * 4.6;
          const scale = 1 - futureOffset * 0.018 - localProgress * 0.035;
          const opacity = 1 - Math.max(0, activeDistance - 1.08) * 0.34 - localProgress * 0.18;
          const contentOpacity = 1 - clamp(activeDistance * 0.95, 0, 1);
          const z = Math.round(100 - activeDistance * 18 + index);

          card.style.setProperty("--testimonial-x", x.toFixed(1) + "px");
          card.style.setProperty("--testimonial-y", y.toFixed(1) + "px");
          card.style.setProperty("--testimonial-rotate", rotate.toFixed(2) + "deg");
          card.style.setProperty("--testimonial-scale", scale.toFixed(3));
          card.style.setProperty("--testimonial-opacity", clamp(opacity, 0.28, 1).toFixed(3));
          card.style.setProperty("--testimonial-content-opacity", contentOpacity.toFixed(3));
          card.style.setProperty("--testimonial-z", String(z));
        });
        testimonialNavDots.forEach((dot, index) => {
          const roundedActive = Math.round(active);
          dot.dataset.dotState = index === roundedActive ? "active" : index < roundedActive ? "passed" : "upcoming";
        });
      }
    }

    // Back to top
    const backToTop = document.querySelector<HTMLButtonElement>("[data-back-to-top]");
    if (backToTop) {
      backToTop.dataset.visible = latestScrollY > viewportHeight * 1.2 ? "true" : "false";
    }
  });

  return <span aria-hidden="true" data-choreography-probe hidden />;
}
