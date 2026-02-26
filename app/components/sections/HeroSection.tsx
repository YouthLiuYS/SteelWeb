"use client";

import { useEffect, useMemo, useState } from "react";
import LangText from "../LangText";
import { siteData } from "@/content/siteData";

const ROTATE_INTERVAL_MS = 6000;

export default function HeroSection() {
  const slides = useMemo(() => siteData.heroSlides, []);
  const highlights = useMemo(() => siteData.hero.highlights, []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [slides]);

  return (
    <section className="hero" id="top">
      <div className="hero-backgrounds" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={index === activeIndex ? "hero-bg active" : "hero-bg"}
            key={`${slide.title.zh}-${index}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
        ))}
      </div>
      <div aria-hidden="true" className="hero-mesh" />

      <div className="container hero-content reveal">
        {slides.map((slide, index) => (
          <article className={index === activeIndex ? "hero-slide active" : "hero-slide"} key={`${slide.subtitle.zh}-${index}`}>
            <p className="hero-eyebrow">
              <LangText value={slide.eyebrow} />
            </p>
            <h1 className="hero-title">
              <LangText value={slide.title} />
            </h1>
            <p className="hero-subtitle">
              <LangText value={slide.subtitle} />
            </p>
            <div className="hero-highlights" aria-label="Factory strengths">
              {highlights.map((item, itemIndex) => (
                <article className="hero-highlight" key={`${item.value}-${itemIndex}`}>
                  <p className="hero-highlight-value">{item.value}</p>
                  <p className="hero-highlight-label">
                    <LangText value={item.label} />
                  </p>
                </article>
              ))}
            </div>
            <div className="hero-actions">
              <a className="btn btn-solid" href={slide.ctaPrimaryHref}>
                <LangText value={slide.ctaPrimary} />
              </a>
              {slide.ctaSecondary && slide.ctaSecondaryHref ? (
                <a className="btn btn-outline" href={slide.ctaSecondaryHref}>
                  <LangText value={slide.ctaSecondary} />
                </a>
              ) : null}
            </div>
          </article>
        ))}

        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              aria-label={slide.title.en || slide.title.zh}
              className={index === activeIndex ? "hero-dot active" : "hero-dot"}
              key={`${slide.ctaPrimary.en}-${index}`}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
