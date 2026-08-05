import { useEffect, useState } from 'react';

// Track which section is currently in view using IntersectionObserver.
// Returns the id of the active section (defaults to the first id).
export function useActiveSection(ids: string[], offset = 0.4): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      // Trigger when a section crosses the vertical threshold of the viewport.
      { rootMargin: `-${offset * 100}% 0px -${(1 - offset) * 100}% 0px`, threshold: [0, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}
