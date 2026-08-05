import { useEffect } from 'react';

// Smoothly scrolls to the element matching the given hash selector.
// Works for both clicks and programmatic navigation.
export function scrollToSection(hash: string) {
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Attaches smooth-scroll handling to all in-page anchor links (<a href="#…">).
export function useSmoothScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#') || href === '#') return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      scrollToSection(href);
      // Update the URL without an extra jump.
      history.replaceState(null, '', href);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
