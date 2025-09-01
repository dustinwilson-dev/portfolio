"use client"

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visibles = entries.filter(e => e.isIntersecting);
        if (visibles.length) {
          const top = visibles.reduce((a, b) =>
            (a.intersectionRatio > b.intersectionRatio ? a : b)
          );
          setActiveId((top.target as HTMLElement).id);
        }
      },
      {
        // center band so only one is “active” at a time
        root: null,
        rootMargin: "-35% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
