"use client";

import { useEffect } from "react";

const CARD_SELECTOR = ".product-tile, .news-card, .category-card, .info-card, .trust-card, .detail-card, .module-metric";
const TILT_SELECTOR = ".product-tile, .category-card";
const MAX_TILT_DEG = 5;

export default function CardGlow() {
  useEffect(() => {
    const coarseInput = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (coarseInput || reducedMotion) {
      return;
    }

    let activeElement: HTMLElement | null = null;
    let tiltElement: HTMLElement | null = null;

    const clearActive = () => {
      if (!activeElement) {
        return;
      }

      activeElement.classList.remove("is-glow-active");
      activeElement.style.removeProperty("--glow-x");
      activeElement.style.removeProperty("--glow-y");
      activeElement = null;
    };

    const clearTilt = () => {
      if (!tiltElement) {
        return;
      }

      tiltElement.classList.remove("is-tilt-active");
      tiltElement.style.removeProperty("--tilt-rotate-x");
      tiltElement.style.removeProperty("--tilt-rotate-y");
      tiltElement = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest(CARD_SELECTOR) : null;

      if (!(target instanceof HTMLElement)) {
        clearActive();
        clearTilt();
        return;
      }

      if (activeElement && activeElement !== target) {
        activeElement.classList.remove("is-glow-active");
      }

      activeElement = target;
      activeElement.classList.add("is-glow-active");

      const rect = activeElement.getBoundingClientRect();
      const glowX = event.clientX - rect.left;
      const glowY = event.clientY - rect.top;

      activeElement.style.setProperty("--glow-x", `${glowX}px`);
      activeElement.style.setProperty("--glow-y", `${glowY}px`);

      if (!target.matches(TILT_SELECTOR)) {
        clearTilt();
        return;
      }

      if (tiltElement && tiltElement !== target) {
        tiltElement.classList.remove("is-tilt-active");
      }

      tiltElement = target;
      tiltElement.classList.add("is-tilt-active");

      const tiltRect = tiltElement.getBoundingClientRect();
      const tiltX = (event.clientX - tiltRect.left) / tiltRect.width - 0.5;
      const tiltY = (event.clientY - tiltRect.top) / tiltRect.height - 0.5;
      const rotateX = -(tiltY * MAX_TILT_DEG * 2);
      const rotateY = tiltX * MAX_TILT_DEG * 2;

      tiltElement.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
      tiltElement.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
    };

    const handlePointerLeave = () => {
      clearActive();
      clearTilt();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      clearActive();
      clearTilt();
    };
  }, []);

  return null;
}
