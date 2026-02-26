"use client";

import { useEffect, useState } from "react";

function readProgress() {
  const root = document.documentElement;
  const maxScroll = root.scrollHeight - window.innerHeight;

  if (maxScroll <= 0) {
    return 0;
  }

  const ratio = window.scrollY / maxScroll;
  return Math.min(1, Math.max(0, ratio));
}

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setProgress(readProgress());
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="scroll-progress">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
